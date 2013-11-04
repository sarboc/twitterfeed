var getTweets = function(search) {
  // event.preventDefault();

  $.ajax({
    url: '/tweets.json',
    data: { search: search },
    type: 'GET'
  }).done(function(data) {
    $('#tweets').children().fadeOut().empty();
    $('body').css('background-image', 'url(' + _.sample(data).user.profile_background_image_url + ')')
    _.each(data, function(t) {
      var $tweet = JST['templates/tweet']({
        text: t.text,
        name: t.user.name,
        id: t.id,
        image: t.user.profile_image_url,
        user: t.user.screen_name
      });
      $('#tweets').prepend($tweet);
    });
  });
};



$(function() {

  getTweets('kittens');

  $('form').submit(function() {
    event.preventDefault();
    var search = $('#search').val()
    getTweets(search);
  });

});