$(function () {
    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    

    // BARFILLER
    $('#bar1').barfiller({
      barColor: '#f13a11',
      duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#f13a11',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#f13a11',
        duration: 2000
    });
});

// SLIDER FOR SWIPER
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// AUTORECIEVE EMAIL MEMBERSHIP
document.getElementById('EmailFormSubmit-Membership').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  fetch(form.action, {
      method: form.method,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(response => {
      if (response.ok) {
        $('#membershipForm').modal('hide');
        $('#failed-checkbox-form').modal('hide');
        $('#thank-you-form').modal('show');
      } else {
        $('#membershipForm').modal('hide');
        $('#failed-checkbox-form').modal('hide');
        $('#failed-form').modal('show');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      $('#membershipForm').modal('hide');
      $('#failed-checkbox-form').modal('hide');
      $('#failed-form').modal('show');
  });
});

// AUTORECIEVE EMAIL CONTACT SURVER
document.getElementById('EmailFormSubmit-Survey').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  fetch(form.action, {
      method: form.method,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(response => {
      if (response.ok) {
        $('#failed-checkbox-form').modal('hide');
        $('#thank-you-form').modal('show');
      } else {
        $('#failed-checkbox-form').modal('hide');
        $('#failed-form').modal('show');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      $('#failed-checkbox-form').modal('hide');
      $('#failed-form').modal('show');
  });
});

// CHECK BOX
function validateForm() {
  var checkbox = document.getElementById('signup-agree');
  if (!checkbox.checked) {
    $('#thank-you-form').modal('hide');
    $('#failed-form').modal('hide');
    $('#membershipForm').modal('hide');
    $('#failed-checkbox-form').modal('show');
      return false;
  }
  return true;
}
function validateFormContact() {
  var checkbox = document.getElementById('signup-agree-contact');
  if (!checkbox.checked) {
    $('#thank-you-form').modal('hide');
    $('#failed-form').modal('hide');
    $('#membershipForm').modal('hide');
    $('#failed-checkbox-form').modal('show');
      return false;
  }
  return true;
}