const items = document.querySelectorAll('.item');
const twisterImages = document.querySelectorAll('.color');

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        twisterImages.forEach((image, imageIndex) => {
            image.style.display = imageIndex === index ? 'block' : 'none';
        });
    });

    item.addEventListener('mouseout', () => {
        twisterImages.forEach((image) => {
            image.style.display = 'block';
        });
    });
});
