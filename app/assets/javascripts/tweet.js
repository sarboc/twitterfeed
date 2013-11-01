var getTweets = function() {
  // event.preventDefault();
  var search = $('#search').val()
  $.ajax({
    url: '/tweets.json',
    data: { search: search },
    type: 'GET'
  }).done(function(data) {
    _.each(data, function(t) {
      var $tweet = JST['templates/tweet']({
        text: t.text,
        user: t.from_user,
        id: t.id
      });
      $('.list').prepend($tweet);
    });
  });
};



$(function() {
  $('form').submit(function() {
    event.preventDefault();
    getTweets();
  });


});