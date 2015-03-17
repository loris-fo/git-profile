$(document).ready(function() {  // callback function

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val() + '?access_token=' + token;

    var template = $('template').html();

    $.get(url, renderTemplate)
      .fail(userNotFoundMessage)
      .always(clearInput);

    function renderTemplate(info) {
      $('.container').prepend(Mustache.render(template, info));
    }

    function userNotFoundMessage() {
      $('.container').prepend("User not found")
    }

    function clearInput() {
      $('input.username').val('');
      }
  });
});
