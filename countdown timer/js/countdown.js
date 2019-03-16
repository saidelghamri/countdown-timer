
$(document).ready(function(){

    var timer = $('#timer');
    var month     = timer.attr('data-month');
    var monthDay  = timer.attr('data-day');
    var year      = timer.attr('data-year');
    var hour      = timer.attr('data-hour');
    var minute    = timer.attr('data-minute');
    var second    = timer.attr('data-second');

    // Set the date we're counting down to
    var setTime = month +' '+ monthDay +', '+ year +' '+ hour +':'+ minute +':'+ second;

    var countDownDate = new Date(setTime).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      //  timer.text(days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ");

      timer.html('<div id="days">'+days+'<span>Days</span></div>' +
                 '<div id="hours"> '+hours+'<span>Hours</span></div>' +
                 '<div id="minutes">'+minutes+'<span>Min</span></div>' +
                 '<div id="seconds"> '+seconds+'<span>Sec</span></div>'
                )
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        timer.text("EXPIRED");
      }
    }, 1000);//End Timer counter

})
