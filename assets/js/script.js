document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');
    const finalsCard = document.querySelector('.finals-card');
    
    setTimeout(() => {
        background.style.opacity = 1;
    }, 1000);
    
    setTimeout(() => {
        finalsCard.style.opacity = 1;
    }, 2000);

    finalsCard.addEventListener('mouseover', () => {
        background.style.filter = 'blur(10px)';
    });

    finalsCard.addEventListener('mouseout', () => {
        background.style.filter = 'blur(5px)';
    });
});
    