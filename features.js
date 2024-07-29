document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const moonIcon = toggleButton.getElementsByClassName('fa-moon')[0];
    const sunIcon = toggleButton.getElementsByClassName('fa-sun')[0];
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        moonIcon.classList.toggle('active');
        sunIcon.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const typingSpan = document.getElementById('typing');
    const text = 'Hey, I am Brayden'; 
    let index = 0; 

    function type() {
        if (index < text.length) {
            typingSpan.textContent += text.charAt(index);
            index++;
            setTimeout(type, 110); 
        }
    }

    type(); 
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutCards = document.querySelectorAll('.about-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5
    });

    aboutCards.forEach((card) => observer.observe(card));
});