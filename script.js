const container = document.querySelector('.container');
const twisterImages = document.querySelectorAll('.color');
const colors = ['#77BCE8', '#54B465', '#FF9C00', '#8A6ED8'];

container.addEventListener('mouseover', handleMouseOver);
container.addEventListener('mouseout', handleMouseOut);

function handleMouseOver(event) {
    const target = event.target.closest('.item');
    if (!target) return;

    target.classList.add('active');
    const index = Array.from(target.parentNode.children).indexOf(target);
    const label = createItemLabel(colors[index]);
    target.prepend(label);

    twisterImages.forEach((image, imageIndex) => {
        image.style.display = imageIndex === index ? 'block' : 'none';
    });
}

function handleMouseOut(event) {
    const target = event.target.closest('.item');
    if (!target) return;

    target.classList.remove('active');
    const label = target.querySelector('.item-label');
    if (label) label.remove();

    twisterImages.forEach((image) => {
        image.style.display = 'block';
    });
}

function createItemLabel(backgroundColor) {
    const label = document.createElement('div');
    label.classList.add('item-label');
    label.style.backgroundColor = backgroundColor;
    return label;
}
