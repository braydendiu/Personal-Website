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
    const text = 'Hi, I am Brayden'; 
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
{/* <script>
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger'); // changed const to var
    var navContainer = document.querySelector('.nav-container'); // changed const to var

    hamburger.addEventListener('click', function() {
        if (!navContainer.style.display || navContainer.style.display === 'none') {
            navContainer.style.display = 'flex';
        } else {
            navContainer.style.display = 'none';
        }
    });
});
</script> */}