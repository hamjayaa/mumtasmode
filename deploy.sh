#!/bin/bash

# Deployment script for Mumtas website using rsync
# This script deploys the website to a VPS server using rsync over SSH

set -e  # Exit immediately if a command exits with a non-zero status

# Configuration - Set these variables according to your server setup
SSH_HOST=""
SSH_USER=""
SSH_PORT="22"
SSH_KEY_PATH="$HOME/.ssh/id_rsa"
REMOTE_DEST_DIR="/var/www/html"

# Display usage information
usage() {
    echo "Usage: $0 [OPTIONS]"
    echo "Deploy the Mumtas website to VPS server"
    echo ""
    echo "Options:"
    echo "  -h, --host HOST         SSH server hostname or IP address"
    echo "  -u, --user USER         SSH username"
    echo "  -p, --port PORT         SSH port (default: 22)"
    echo "  -k, --key KEY_PATH      SSH private key path (default: \$HOME/.ssh/id_rsa)"
    echo "  -d, --dest DIR          Remote destination directory (default: /var/www/html)"
    echo "  --dry-run               Perform a dry run without making changes"
    echo "  -v, --verbose           Enable verbose output"
    echo "  --help                  Show this help message"
    echo ""
    echo "Example: $0 -h myserver.com -u deploy -d /var/www/mumtas"
    exit 1
}

# Default values
DRY_RUN=false
VERBOSE=false

# Parse command line options
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--host)
            SSH_HOST="$2"
            shift 2
            ;;
        -u|--user)
            SSH_USER="$2"
            shift 2
            ;;
        -p|--port)
            SSH_PORT="$2"
            shift 2
            ;;
        -k|--key)
            SSH_KEY_PATH="$2"
            shift 2
            ;;
        -d|--dest)
            REMOTE_DEST_DIR="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        --help)
            usage
            ;;
        *)
            echo "Unknown option: $1"
            usage
            ;;
    esac
done

# Check if required parameters are provided
if [[ -z "$SSH_HOST" || -z "$SSH_USER" ]]; then
    echo "Error: SSH host and user must be provided"
    usage
fi

# Validate SSH key exists
if [[ ! -f "$SSH_KEY_PATH" ]]; then
    echo "Error: SSH private key not found at $SSH_KEY_PATH"
    exit 1
fi

# Prepare rsync options
RSYNC_OPTS="-avz --delete"

if [ "$VERBOSE" = true ]; then
    RSYNC_OPTS="$RSYNC_OPTS -v"
    echo "Verbose mode enabled"
fi

if [ "$DRY_RUN" = true ]; then
    RSYNC_OPTS="$RSYNC_OPTS --dry-run"
    echo "Dry run mode enabled - no changes will be made"
fi

# Additional rsync excludes for web deployment
RSYNC_OPTS="$RSYNC_OPTS \
    --exclude '.git' \
    --exclude '.github' \
    --exclude '.gitignore' \
    --exclude 'README.md' \
    --exclude 'deploy.sh' \
    --exclude '*.log' \
    --exclude 'node_modules' \
    --exclude '.env' \
    --exclude 'package-lock.json' \
    --exclude 'package.json' \
    --exclude 'yarn.lock' \
    --exclude 'Dockerfile' \
    --exclude 'docker-compose.yml' \
    --exclude '.dockerignore' \
    --exclude '.vscode' \
    --exclude '.idea' \
    --exclude '.DS_Store' \
    --exclude 'Thumbs.db' \
    -e 'ssh -i $SSH_KEY_PATH -p $SSH_PORT'"

echo "Deploying Mumtas website to $SSH_USER@$SSH_HOST:$REMOTE_DEST_DIR"
echo "Using SSH key: $SSH_KEY_PATH on port $SSH_PORT"

if [ "$DRY_RUN" = false ]; then
    # Create target directory if it doesn't exist
    echo "Creating remote directory if needed..."
    ssh -i "$SSH_KEY_PATH" -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "mkdir -p '$REMOTE_DEST_DIR'"
    
    echo "Starting deployment..."
fi

# Execute rsync
rsync $RSYNC_OPTS ./ "$SSH_USER@$SSH_HOST:$REMOTE_DEST_DIR"

if [ "$DRY_RUN" = false ]; then
    echo "Setting proper file permissions..."
    ssh -i "$SSH_KEY_PATH" -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "
        find '$REMOTE_DEST_DIR' -type d -exec chmod 755 {} \;
        find '$REMOTE_DEST_DIR' -type f -exec chmod 644 {} \;
        chmod 644 '$REMOTE_DEST_DIR/index.html'
        chmod 644 '$REMOTE_DEST_DIR/style.css'
        chmod 644 '$REMOTE_DEST_DIR/main.js'
    "
    
    echo "Deployment completed successfully!"
    echo "Your website should now be available at: http://$SSH_HOST or https://$SSH_HOST"
fi

exit 0