$(document).ready(function() {
  // popup when they try to log in or signup
  $('#login, #signup, .social-media-icons').click(function() {
    $('#popup')
      .text('Coming Soon!')
      .slideDown()
      .delay(4000)
      .slideUp();
  });

  // email submission
  $('#email-form').submit(function(e) {
    e.preventDefault();

    $('#popup')
          .text('Added to list! Thank you for joining!')
          .slideDown()
          .delay(4000)
          .slideUp();

    $.ajax({
      url: 'https://ucharify-api.herokuapp.com/api/users/landing',
      type: 'post',
      data: $('#email-form').serialize(),
      success: function(data) {
        // whatever you wanna do after the form is successfully submitted
        // $('#popup')
        //   .text('Added to list! Thank you for joining!')
        //   .slideDown()
        //   .delay(4000)
        //   .slideUp();
        console.log('successfully added email');
      },
      error: function(error) {
        // $('#popup')
        //   .text('Email invalid or exists')
        //   .slideDown()
        //   .delay(4000)
        //   .slideUp();
        console.log('invalid or exists email');
      }
    });
  });

  // Countdown
  $('#countdown').countdown('2019/03/15', function(event) {
    $(this).text(event.strftime('%D days %H:%M:%S'));
    var $this = $(this).html(
      event.strftime(`
    <div class="time-factor"><span class="number-text">%w</span><span>weeks</span></div>
    <div class="time-factor"><span class="number-text">%d</span><span>days</span></div>
    <div class="time-factor"><span class="number-text">%H</span><span>hr</span></div>
    <div class="time-factor"><span class="number-text">%M</span><span>min</span></div>
    <div class="time-factor right-most"><span class="number-text">%S</span><span>sec</span></div>
    `)
    );
  });

  // Slideshow main
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName('mySlides');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = 'block';
    setTimeout(carousel, 4000); // Change image every 2 seconds
  }
});
