function getNextWorkout() {
  var now = new Date();

  var target = new Date();

  if (now.getDay() === 1 && (((now.getDate() % 2 === 0) && (now.getHours() < 20)) || ((now.getDate() % 2 !== 0) && (now.getHours() < 7)))) {
    // Target date still is today;
  } else {
    // Target date is next Monday
    var d = new Date(now);
    var day = d.getDay();
    var diff = d.getDate() - day + (day == 0 ? -6 : 1);

    target = new Date(d.setDate(diff + 7));
  }

  // Reset mintes and seconds
  target.setMinutes(0);
  target.setSeconds(0);

  // Set the target hour
  var h = (target.getDate() % 2 === 0) ? 20 : 7;
  target.setHours(h);

  return target
}

$(function () {
  $('article h1 span').click(function () {
    $('article h1').toggleClass('alt');
  });

  var nextWorkout = getNextWorkout();
  var workoutTime = (nextWorkout.getDate() % 2 == 0) ? '8 PM' : '7 AM'

  var now = new Date();

  var units = (countdown.DAYS | countdown.HOURS | countdown.MINUTES);
  var max = 11;
  var digits = 0;

  function doCountdown() {
    var ts = countdown(nextWorkout, null, units, max, digits);
    var msg = ts.toString();
    $('#countdown').text(msg);

    requestAnimationFrame(doCountdown, $('#countdown'));
  }

  doCountdown();

  if (now.getDay() === 0) {
    $('#schedule').text('Tomorrow @ ' + workoutTime);
  } else if (now.getDay() === 1) {
    $('#schedule').text('Today @ ' + workoutTime);
  } else {
    $('#schedule').text('Monday @ ' + workoutTime);
  }
});
