// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const pictures = document.querySelectorAll('.picture');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    // Set initial state
    let currentIndex = 0;
  
    // Function to show a specific slide
    function showSlide(index) {
      // Handle index boundaries (wrap around)
      if (index < 0) index = pictures.length - 1;
      if (index >= pictures.length) index = 0;
      
      // Update current index
      currentIndex = index;
      
      // Update pictures - show active one, hide others
      pictures.forEach((picture, i) => {
        if (i === currentIndex) {
          picture.classList.add('active');
        } else {
          picture.classList.remove('active');
        }
      });
      
      // Update indicator dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    // Set up click events for dots
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
      });
    });
  
    // Set up navigation arrows
    leftArrow.addEventListener('click', function() {
      showSlide(currentIndex - 1);
    });
    
    rightArrow.addEventListener('click', function() {
      showSlide(currentIndex + 1);
    });
  
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
      }
    });
  
    // Optional: Add autoplay functionality
    // Uncomment these lines if you want the slideshow to auto-advance
    /*
    let slideshowInterval = setInterval(function() {
      showSlide(currentIndex + 1);
    }, 5000); // Change slides every 5 seconds
    
    // Pause autoplay when hovering over the slideshow
    document.querySelector('.picture-slideshow').addEventListener('mouseenter', function() {
      clearInterval(slideshowInterval);
    });
    
    // Resume autoplay when mouse leaves the slideshow
    document.querySelector('.picture-slideshow').addEventListener('mouseleave', function() {
      slideshowInterval = setInterval(function() {
        showSlide(currentIndex + 1);
      }, 5000);
    });
    */
  });