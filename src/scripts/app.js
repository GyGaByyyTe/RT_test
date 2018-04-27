
const selectInit = require('./common/select');
const calendarInit = require('./common/calendar');

if (document.getElementsByClassName('custom-select')) {
  selectInit();
}

if (document.getElementsByClassName('form__date')) {
  calendarInit();
}

$('.roundtrip__custom-checkbox-real').on("click", function (e) {
  $('#datetimepicker2').prop('disabled', function(i, v) { return !v; });
});