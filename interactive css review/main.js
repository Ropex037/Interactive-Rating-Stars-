  const stars = document.querySelectorAll('.star-rating span');
  let selectedRating = 0;

  stars.forEach(star => {
    // Hover effect
    star.addEventListener('mouseenter', () => {
      const value = parseInt(star.getAttribute('data-value'));
      highlightStars(value);
    });

    // Remove hover effect when mouse leaves
    star.addEventListener('mouseleave', () => {
      highlightStars(selectedRating);
    });

    // Click to set rating
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-value'));
      highlightStars(selectedRating);
    
    });
  });

  function highlightStars(rating) {
    stars.forEach(star => {
      const value = parseInt(star.getAttribute('data-value'));
      star.classList.toggle('selected', value <= rating);
    });
  }