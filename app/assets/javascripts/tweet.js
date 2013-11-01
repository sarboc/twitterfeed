var getTweets = function(search) {
  // event.preventDefault();

  $.ajax({
    url: '/tweets.json',
    data: { search: search },
    type: 'GET'
  }).done(function(data) {
    console.log(data[0]);
    _.each(data, function(t) {
      var $tweet = JST['templates/tweet']({
        text: t.text,
        user: t.from_user,
        id: t.id,
        image: t.user.profile_image_url
      });
      $('.list').prepend($tweet);
    });
  });
};



$(function() {

  getTweets('kittenz');

  $('form').submit(function() {
    event.preventDefault();
    var search = $('#search').val()
    getTweets(search);
  });

});