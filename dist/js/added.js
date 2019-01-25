$(document).ready(function() {
  $('#email-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/api/users/landing',
      type: 'post',
      data: $('#email-form').serialize(),
      success: function(data) {
        //whatever you wanna do after the form is successfully submitted
        $('#popup')
          .text('Added to list! Thank you for joining!')
          .slideDown()
          .delay(4000)
          .slideUp();
      },
      error: function(error) {
        $('#popup')
          .text('Email invalid or exists')
          .slideDown()
          .delay(4000)
          .slideUp();
      }
    });
  });
});
