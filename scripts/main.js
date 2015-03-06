$(function () {
  var now = new Date();

  if (now.getDay() === 0) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var mdate = tomorrow.getDate();

    if (mdate % 2 == 0) {
      $('#schedule').text('Tomorrow @ 8 PM');
    } else {
      $('#schedule').text('Tomorrow @ 7 AM');
    }
  } else if (now.getDay() === 1) {
    var mdate = now.getDate();

    if (mdate % 2 == 0) {
      $('#schedule').text('Today @ 8 PM');
    } else {
      $('#schedule').text('Today @ 7 AM');
    }
  } else {

    function getMonday(d) {
      d = new Date(d);
      var day = d.getDay();
      var diff = d.getDate() - day + (day == 0 ? -6 : 1);

      return new Date(d.setDate(diff + 7));
    }

    var monday = getMonday(now);
    var mdate = monday.getDate();

    if (mdate % 2 == 0) {
      $('#schedule').text('Monday @ 8 PM');
    } else {
      $('#schedule').text('Monday @ 7 AM');
    }
  }
});
