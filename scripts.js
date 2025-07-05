// Simple interactions for SENDD IT app website
document.addEventListener('DOMContentLoaded', function() {
    console.log('SENDD IT website loaded');

    // Add hover effect to the two-phones image
    const phonesImage = document.querySelector('.two-phones-image');
    if (phonesImage) {
        console.log('Two-phones image found and interactive');
    }

    // Add smooth transitions to buttons
    document.querySelectorAll('.app-store-btn, .play-store-btn').forEach(button => {
        button.style.transition = 'all 0.3s ease';
    });
});
