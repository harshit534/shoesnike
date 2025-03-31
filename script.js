// Optional: Add hover animation for shoe images (e.g., scale effect)
const shoeImages = document.querySelectorAll('.shoe-card img');

shoeImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
