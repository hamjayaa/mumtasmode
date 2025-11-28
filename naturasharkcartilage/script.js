let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicator = document.getElementById('slide-indicator');
const progressBar = document.getElementById('progress-bar');
let isAnimating = false;

function updateUI() {
    let displayCurrent = currentSlide + 1;
    let formattedCurrent = displayCurrent < 10 ? `0${displayCurrent}` : displayCurrent;
    let formattedTotal = slides.length < 10 ? `0${slides.length}` : slides.length;
    indicator.innerText = `${formattedCurrent} / ${formattedTotal}`;
    
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Fungsi baru untuk animasi angka
function runCounterAnimation(slide) {
    const counters = slide.querySelectorAll('.counter');
    counters.forEach(counter => {
        // Reset ke 0 dulu biar animasinya kelihatan ulang kalau balik lagi
        counter.innerText = '0' + (counter.getAttribute('data-suffix') || '%');
        
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '%';
        const duration = 1500; // 1.5 detik (sesuai animasi bar)
        const startTime = performance.now();

        function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Efek easeOutQuad biar smooth (cepet di awal, pelan di akhir)
            const ease = progress * (2 - progress);
            
            const currentVal = Math.floor(ease * target);
            counter.innerText = currentVal + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + suffix; // Pastikan angka akhir pas
            }
        }
        
        // Delay dikit biar bareng sama animasi bar muncul
        setTimeout(() => requestAnimationFrame(updateCount), 300);
    });
}

function changeSlide(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const prevSlideIndex = currentSlide;
    
    if (direction === 'next') {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
    } else if (direction === 'prev') {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
    } else if (direction === 'reset') {
        currentSlide = 0;
    }

    const outgoingSlide = slides[prevSlideIndex];
    const incomingSlide = slides[currentSlide];

    let exitClass = direction === 'prev' ? 'exit-prev' : 'exit-next';
    let enterClass = direction === 'prev' ? 'enter-prev' : 'enter-next';

    if(direction === 'reset') { exitClass = 'exit-next'; enterClass = 'enter-next'; }

    outgoingSlide.classList.add(exitClass);
    outgoingSlide.classList.remove('active');

    incomingSlide.classList.add(enterClass);
    void incomingSlide.offsetWidth; 

    requestAnimationFrame(() => {
        incomingSlide.classList.add('active');
        incomingSlide.classList.remove(enterClass);
        
        // Trigger animasi angka kalau slide yang masuk punya class 'counter'
        if (incomingSlide.querySelectorAll('.counter').length > 0) {
            runCounterAnimation(incomingSlide);
        }
    });

    setTimeout(() => {
        outgoingSlide.classList.remove(exitClass);
        isAnimating = false;
    }, 1200); 

    updateUI();
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight" || e.key === "Space") changeSlide('next');
    if (e.key === "ArrowLeft") changeSlide('prev');
});

let touchX = 0;
document.addEventListener('touchstart', e => touchX = e.changedTouches[0].screenX);
document.addEventListener('touchend', e => {
    if (e.changedTouches[0].screenX < touchX - 50) changeSlide('next');
    if (e.changedTouches[0].screenX > touchX + 50) changeSlide('prev');
});

updateUI();
