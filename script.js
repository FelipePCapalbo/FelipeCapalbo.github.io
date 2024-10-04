document.addEventListener("DOMContentLoaded", function () {
    // Animated text for the header with smooth transition
    const phrases = [
        "Manufacturing and Optimization solutions, AI-driven",
        "Efficiency at every step, powered by intelligent automation",
        "Transform your operations with advanced machine learning",
        "Data-driven insights for a smarter business future"
    ];

    let phraseIndex = 0;
    const animatedText = document.getElementById("animatedText");

    function animatePhrases() {
        animatedText.style.opacity = 0;
        setTimeout(() => {
            animatedText.textContent = phrases[phraseIndex];
            animatedText.style.opacity = 1;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }, 300); // Delay for the opacity transition
    }

    setInterval(animatePhrases, 5000); // Transition every 5 seconds
    animatePhrases(); // Start the animation immediately
});