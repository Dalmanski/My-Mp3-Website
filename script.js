// Remove overflow hidden after animations and on scroll up/down
document.body.addEventListener('animationend', function() {
    document.body.style.overflow = 'auto';
});
