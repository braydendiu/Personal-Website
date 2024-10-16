document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const moonIcon = toggleButton.querySelector('.fa-moon');
    const sunIcon = toggleButton.querySelector('.fa-sun');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    });

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