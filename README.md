# mumtasmode

## Deployment

This project is configured with GitHub Actions to deploy to an SSH server using rsync.

### Setup

To enable automatic deployments, you need to configure the following secrets in your GitHub repository:

1. `SSH_PRIVATE_KEY`: The private SSH key to access your server (without password protection)
2. `SSH_HOST`: The server address (e.g., `your-server.com` or IP address)
3. `SSH_USER`: The SSH username for your server (e.g., `deploy` or `root`)
4. `SSH_PORT`: The SSH port (default is 22 if not specified)
5. `SSH_DEST_DIR`: The destination directory on the server where files should be deployed (e.g., `/var/www/html`)
6. `SITE_URL`: (Optional) The URL of your site for health checks after deployment

### How it works

- The workflow triggers on pushes to the `main` branch
- It uses rsync to synchronize files from the repository to the server
- The deployment excludes `.git`, `.github`, configuration files, and other non-essential files
- The `--delete` flag ensures that files removed from the repository are also removed from the server
- Proper file permissions are set after deployment
- An optional health check verifies that the site is accessible after deployment

### Required Server Setup

1. **SSH Key Authentication**: Generate SSH key pair on your VPS:
   ```bash
   # On your VPS server
   ssh-keygen -t rsa -b 4096 -C "github-actions@your-domain.com"
   ```
   
2. **Authorized Keys**: Add the public key to your authorized keys:
   ```bash
   # On your VPS server
   mkdir -p ~/.ssh
   echo "YOUR_PUBLIC_KEY_CONTENT" >> ~/.ssh/authorized_keys
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```

3. **Web Directory**: Ensure your web server is configured to serve from the destination directory:
   ```bash
   # Create and set permissions for the web directory
   mkdir -p /var/www/html
   chown -R www-data:www-data /var/www/html  # Adjust user as needed
   ```

4. **Firewall**: Ensure SSH port (default 22) is open on your VPS

### Security Best Practices

- Use a dedicated SSH user for deployments with limited permissions
- Store only public keys on GitHub; never store private keys in the repository
- Use SSH key without a passphrase for automated deployments (or use SSH agent)
- Limit SSH access to specific IP addresses if possible
- Regularly rotate SSH keys
- Ensure your VPS has up-to-date security patches

### GitHub Secrets Configuration

1. Go to your repository Settings
2. Navigate to Secrets and Variables > Actions
3. Click "New repository secret" and add each of the required secrets

### Manual deployment

If needed, you can also run the workflow manually from the GitHub Actions tab.

#### Using the manual deployment script

For manual deployments outside of GitHub Actions, you can use the provided `deploy.sh` script:

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment (you'll need to provide your server details)
./deploy.sh -h your-server.com -u deploy-user -d /path/to/web/directory

# For help with options
./deploy.sh --help
```

The script includes safety features like dry-run mode, verbose output, and proper permission settings.