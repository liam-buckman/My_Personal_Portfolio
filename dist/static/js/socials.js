// script.js

// Get the element
var box = document.getElementById('SocialsBanner');

// Set the offset point for fading to start
var stopPosition = 500; // Start fading after scrolling 500px
var maxScrollPosition = 1000; // Fully fade out at 1000px

if (box) {
    box.style.position = 'relative';
    box.style.top = '0px';
    box.style.transition = 'opacity 0.5s ease'; // Add a smooth fade transition
}

// Listen to the scroll event
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;  // Current scroll position
    
    // Calculate the opacity based on the scroll position
    if (scrollY <= stopPosition) {
        // Ensure the button is fully visible before stopPosition
        box.style.opacity = '1';
    } else if (scrollY > stopPosition && scrollY <= maxScrollPosition) {
        // Fade the button as you scroll between stopPosition and maxScrollPosition
        var fadeAmount = 1 - (scrollY - stopPosition) / (maxScrollPosition - stopPosition);
        box.style.opacity = fadeAmount;
    } else {
        // Fully fade out after maxScrollPosition
        box.style.opacity = '0';
    }
});