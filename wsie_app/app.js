//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {
  const $giphyContainer = $('.giphy-container');

  $('form').on('submit', (event) => {
     event.preventDefault();
     const userInput = $('input[type="text"]').val();
       var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=4F8CbsHhFuP1xZW9n4KwCrPEz4uCS9x0&limit=1");
       xhr.done(function(data) {
         const $img = $('<img>').attr({'src': data['data'][0].images.original.url})
         $giphyContainer.append($img);
       });
  }); //end listener

}) //end window on-load



//      $.ajax({
//        type: "GET",
//        url: 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2',
//        headers: {
//          'authorization': 'OAuth oauth_consumer_key="consumer-key-for-app"',
//          'oauth_nonce': "generated-nonce",
//          'oauth_signature': "generated-signature",
//          'oauth_signature_method': "HMAC-SHA1",
//          'oauth_timestamp': "generated-timestamp",
//          'oauth_token': "access-token-for-authed-user", 'oauth_version': "1.0"
//        },
//      }).then(
//        (data) => {
//          // console.log(data.location_suggestions[0].title);
//          console.log(data);
//        },
//        (error) => {
//          console.log('error');
//        }
//      );//end ajax
