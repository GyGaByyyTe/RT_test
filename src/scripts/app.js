const selectInit = require('./common/select');
const calendarInit = require('./common/calendar');

if (document.getElementsByClassName('custom-select')) {
  selectInit();
}

if (document.getElementsByClassName('form__date')) {
  calendarInit();
}

// menu overlay
var sliderOverlay = $('#nav');
$('.hamburger__link').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('hamburger__link--pressed');
  sliderOverlay.toggleClass('active');
});