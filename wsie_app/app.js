//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {
  //global variables
  const $giphyContainer = $('.giphy-container');
  const giphyArray = [];
  let currentGifIndex = 0;

  // form is filled out and submitted
  $('form').on('submit', (event) => {
     event.preventDefault();
     //user input stored in variable
     const userInput = $('input[type="text"]').val();
      //ajax call
       var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=4F8CbsHhFuP1xZW9n4KwCrPEz4uCS9x0&limit=5");
       xhr.done(function(data) {
         for (let i = 0; i < "data".length; i++) {
           const $img = $('<img>').attr({'src': data['data'][i].images.original.url}).addClass('gif');
           giphyArray.push($img)
           // $giphyContainer.append($img);
          }
          showImage();
        });//end ajax

    $('input[type="text"]').val('') //clears input value
  }); //end listener

  //shows first image in result, appends next button
  const showImage = () => {
    let $currentGif = giphyArray[0];
    $giphyContainer.append($currentGif);
    const $nextButton = $('<button>').text('anotha\' one');
    $giphyContainer.append($nextButton);

  }

}); //end window on-load
