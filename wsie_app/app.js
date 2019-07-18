//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {
  const $giphyContainer = $('.giphy-container');

  // form is filled out and submitted
  $('form').on('submit', (event) => {
     event.preventDefault();
     //user input stored in variable
     const userInput = $('input[type="text"]').val();
      //ajax call
       var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=4F8CbsHhFuP1xZW9n4KwCrPEz4uCS9x0&limit=5");
       xhr.done(function(data) {
         for (let i = 0; i < "data".length; i++) {
           const $img = $('<img>').attr({'src': data['data'][i].images.original.url})
           $giphyContainer.append($img);
        }
       });
     $('input[type="text"]').val('')
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
