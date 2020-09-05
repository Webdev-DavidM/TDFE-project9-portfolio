/* This section includes the jquery will allows the page to scroll down to the relevant section when the user clicks it */

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
      // End if
    }
  });
});

const title = document.querySelectorAll('.title-fade');

window.addEventListener('scroll', () => {
  title.forEach((title) => {
    const windowScroll = window.scrollY + window.innerHeight;
    // console.log(
    //   'This is the distance in pixels from the title to the top of the screen',
    //   title.offsetTop,
    //   'This is the the measurement which had the screen height and how far it has scrolled',
    //   windowScroll
    // );
    const titleBottom = title.offsetTop + 40;
    // console.log(titleBottom);
    const isNotScrolledPast = window.scrollY < titleBottom;
    if (windowScroll > title.offsetTop && isNotScrolledPast) {
      title.classList.add('active');
    } else {
      title.classList.remove('active');
    }
  });
});
