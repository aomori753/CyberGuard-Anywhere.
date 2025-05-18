// Basic JavaScript for CyberGuard Anywhere (Still thinking dynamic functions

document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    // Add a click event listener to the button
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            // Display a simple alert when the button is clicked
            // In a real application, this would navigate to a new page or show a modal
            alert('Thank you for your interest in CyberGuard Anywhere! More information coming soon.');
        });
    }

    // You could add more JavaScript here for dynamic content, (Please suggest or comment in my github) Thanks!
    // simulating alerts, or handling form submissions (if you add a contact form).
});
