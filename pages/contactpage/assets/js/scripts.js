function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard: ' + email);
    });
}

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    // Background fade-in
    const background = document.querySelector('.background');
    background.style.opacity = 1;
});
