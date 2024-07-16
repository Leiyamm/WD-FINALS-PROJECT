document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo-container img');

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            photos.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const closeButton = document.querySelector('.close-button');
    const overlay = document.querySelector('.overlay');

    closeButton.addEventListener('click', function () {
        photos.forEach(photo => photo.classList.remove('active'));
    });

    overlay.addEventListener('click', function () {
        photos.forEach(photo => photo.classList.remove('active'));
    });
});
