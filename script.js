window.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date("2024-08-01T00:00:00");
    const now = new Date();

    // Calculate full months
    let months = (now.getFullYear() - startDate.getFullYear()) * 12;
    months += now.getMonth() - startDate.getMonth();
    let monthStart = new Date(startDate.getFullYear(), startDate.getMonth() + months, startDate.getDate());

    if (now < monthStart) {
        months--;
        monthStart = new Date(startDate.getFullYear(), startDate.getMonth() + months, startDate.getDate());
    }

    const diff = now - monthStart;
    const leftoverDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    const totalDiff = now - startDate;
    const totalDays = Math.floor(totalDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalDiff / (1000 * 60)) % 60);

    const counterEl = document.getElementById("counter");
    if (counterEl) {
        counterEl.innerHTML = `
            <div>${totalDays} days... ${hours} hours... ${minutes} minutes...</div>
            <div style="margin-top: 0.5rem; color: #ffb6d9; font-size: 1rem;">
                (${months} month${months !== 1 ? 's' : ''} ${leftoverDays} day${leftoverDays !== 1 ? 's' : ''})
            </div>
        `;
    }
});



// 💌 Letter Slider Navigation
window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.letter-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
    }

    showSlide(current);
});

// 🎵 Volume Control for Letter Page
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    const slider = document.getElementById('volumeSlider');

    // Set initial volume based on the slider value
    if (audio && slider) {
        audio.volume = slider.value;

        // Update the audio volume when slider value changes
        slider.addEventListener('input', () => {
            audio.volume = slider.value;
        });
    }
});

// Select the slider
const volumeSlider = document.getElementById('volumeSlider');

// Function to update the gradient of the volume slider
volumeSlider.addEventListener('input', () => {
    // Get the current value of the slider
    const volume = volumeSlider.value;

    // Calculate the percentage of the volume (0 to 100)
    const percentage = volume / volumeSlider.max * 100;

    // Create a gradient that goes from light to dark based on the percentage
    const gradient = `linear-gradient(to right, #ffd1e8 ${percentage}%, #4f0031 ${percentage}%)`;

    // Apply the gradient to the slider background
    volumeSlider.style.background = gradient;
});

const audio = document.getElementById('bgMusic');
if (audio) {
    audio.loop = true;
}
