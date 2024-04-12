document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle for dark mode
    const toggleButton = document.getElementById('dark-mode-toggle');
    const moonIcon = toggleButton.getElementsByClassName('fa-moon')[0];
    const sunIcon = toggleButton.getElementsByClassName('fa-sun')[0];
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        moonIcon.classList.toggle('active');
        sunIcon.classList.toggle('active');
    });

    // Typing effect
    const typingSpan = document.getElementById('typing');
    const text = 'Hi, I am Brayden'; 
    let index = 0; 

    function type() {
        if (index < text.length) {
            typingSpan.textContent += text.charAt(index);
            index++;
            setTimeout(type, 110); // Control the speed of typing here
        }
    }

    type();

    // Navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');

    hamburger.addEventListener('click', () => {
        // Toggle display of the nav container
        if (navContainer.style.display === 'none' || !navContainer.style.display) {
            navContainer.style.display = 'flex';
        } else {
            navContainer.style.display = 'none';
        }
    });
});