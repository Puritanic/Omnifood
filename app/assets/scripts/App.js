import $ from './vendor/jquery-3.2.1.min';
import './vendor/noframework.waypoints.min';

console.log(window.Waypoint);

$(() => {
  const waypoint = new Waypoint({
    element: document.getElementById('features'),
    handler() {
      $('.nav').toggleClass('fixed');
    },
    offset: '20%'
  });

  $('#js-features-scroll').on('click', () => {
    $('html, body').animate({ scrollTop: $('#features').offset().top }, 1000);
  });
  $('#js-plans-scroll').on('click', () => {
    $('html, body').animate({ scrollTop: $('#plans').offset().top }, 1000);
  });

  /** *******  jQuery Smooth scrolling  ********* */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        window.location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        window.location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            () => {
              // Callback after animation
              // Must change focus!
              const $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              }
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          );
        }
      }
    });
});
