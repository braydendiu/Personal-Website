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

document.addEventListener('DOMContentLoaded', function() {
    const shapes = document.querySelectorAll('.blurred-shape');
    const header = document.querySelector('#header');
    const sensitivity = 150; 

    function moveShape(e) {
        const { clientX, clientY } = e;
        const { left, top } = header.getBoundingClientRect();
        
        const mouseX = clientX - left;
        const mouseY = clientY - top;

        shapes.forEach((shape) => {
            const shapeRect = shape.getBoundingClientRect();
            const shapeCenterX = shapeRect.left + shapeRect.width / 2 - left;
            const shapeCenterY = shapeRect.top + shapeRect.height / 2 - top;

            const distanceX = mouseX - shapeCenterX;
            const distanceY = mouseY - shapeCenterY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            if (distance < sensitivity) {
                const angle = Math.atan2(distanceY, distanceX);
                const force = (sensitivity - distance) / sensitivity;

                const moveX = -Math.cos(angle) * force * 60; 
                const moveY = -Math.sin(angle) * force * 60;

                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                shape.style.transform = 'translate(0, 0)';
            }
        });
    }

    // Use mousemove for desktop
    header.addEventListener('mousemove', moveShape);

    // Use touchmove for mobile devices
    header.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling on touch devices
        const touch = e.touches[0];
        moveShape(touch);
    });

    // Reset shapes position when mouse/touch leaves the header
    function resetShapes() {
        shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0)';
        });
    }

    header.addEventListener('mouseleave', resetShapes);
    header.addEventListener('touchend', resetShapes);
});