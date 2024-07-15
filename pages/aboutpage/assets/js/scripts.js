document.addEventListener('DOMContentLoaded', () => {
    const photo = document.querySelector('.about-photo');
    const description = document.querySelector('.description');

    photo.addEventListener('mouseover', () => {
        description.style.display = 'block';
    });

    photo.addEventListener('mouseout', () => {
        description.style.display = 'none';
    });
});
