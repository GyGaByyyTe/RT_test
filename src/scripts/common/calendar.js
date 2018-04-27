var datetimepicker = require('datetimepicker');

module.exports = function() {
  const arrayDate = document.getElementsByClassName('form__date');
  for (var i = 0; i < arrayDate.length; i++) {
    arrayDate[i].style.display = 'none';
  }
  $('#datetimepicker1').datetimepicker({
    format: 'd.m.Y',
    // onShow: function(ct) {
    //   console.log('maxDate: ' + jQuery('#datetimepicker2').val());
    //   this.setOptions({
    //     maxDate: jQuery('#datetimepicker2').val()
    //       ? jQuery('#datetimepicker2').val()
    //       : false
    //   });
    // },
    timepicker: false
  });
  $('#datetimepicker2').datetimepicker({
    format: 'd.m.Y',
    // onShow: function(ct) {
    //   console.log('minDate: ' + jQuery('#datetimepicker1').val());
    //   this.setOptions({
    //     minDate: jQuery('#datetimepicker1').val()
    //       ? jQuery('#datetimepicker1').val()
    //       : false
    //   });
    // },
    timepicker: false
  });
};
