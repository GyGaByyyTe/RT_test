var datetimepicker = require('datetimepicker');

module.exports = function() {
  const arrayDate = document.getElementsByClassName('form__date');
  const $datePicker1 = $('#datetimepicker1');
  const $datePicker2 = $('#datetimepicker2');
  for (var i = 0; i < arrayDate.length; i++) {
    arrayDate[i].style.display = 'none';
  }

  $datePicker1.datetimepicker({
    format: 'd.m.Y',
    // onShow: function(ct) {
    //   console.log('maxDate: ' + $datePicker2.val());
    //   this.setOptions({maxDate: $datePicker2.val()? $datePicker2.val(): false});
    // },
    timepicker: false
  });
  $('#button-datetimepicker1').on('click', function(e) {
    e.preventDefault();
    $datePicker1.datetimepicker('show');
  });
  $datePicker2.datetimepicker({
    format: 'd.m.Y',
    // onShow: function(ct) {
    //   console.log('minDate: ' + $datePicker1.val());
    //   this.setOptions({minDate: $datePicker1.val() ? $datePicker1.val(): false});
    // },
    timepicker: false
  });
  // чекбокс при загрузке страницы выключает календарь обратного вылета
  function changeDisabledDatetime() {
    $datePicker2.prop('disabled', function(i, v) {
      return !v;
    });
    $datePicker2.offsetParent().toggleClass('disabled');
  }

  if (!$('.roundtrip__custom-checkbox-real').prop('checked')) {
    changeDisabledDatetime();
  }

  $('.roundtrip__custom-checkbox-real').on('click', function(e) {
    changeDisabledDatetime();
  });

  $('#button-datetimepicker2').on('click', function(e) {
    if (!$('.roundtrip__custom-checkbox-real').prop('checked')) return false;
    e.preventDefault();
    $datePicker2.datetimepicker('show');
  });
};
