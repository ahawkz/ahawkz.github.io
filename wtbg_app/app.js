//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {
  //global variables
  const $giphyContainer = $('.giphy-container');
  const $buttonContainer = $('.button-container');
  const giphyArray = [];

  // form is filled out and submitted
  $('form').one('submit', (event) => {
    event.preventDefault();
     //user input stored in variable
    let userInput = $('input[type="text"]').val();
    //ajax call
    if (userInput == '') {
      //pulls dj khaled gifs
      var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=DJ+KHALED&api_key=4F8CbsHhFuP1xZW9n4KwCrPEz4uCS9x0&rating=pg13&limit=30");
      xhr.done(function(data) {
        for (let i = 0; i < data.data.length; i++) {
          const $img = $('<img>').attr({'src': data['data'][i].images.original.url}).addClass('gif');
          giphyArray.push($img);
          $giphyContainer.append($img);
          $img.hide(); //hides all images
        } // end for loop
         giphyArray[0].show(); // shows first image
         showImage();
       });//end ajax
    //when user inputs info
    } else {
       var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=4F8CbsHhFuP1xZW9n4KwCrPEz4uCS9x0&rating=pg13&limit=30");
       xhr.done(function(data) {
         for (let i = 0; i < data.data.length; i++) {
           const $img = $('<img>').attr({'src': data['data'][i].images.original.url}).addClass('gif');
           giphyArray.push($img)
           $giphyContainer.append($img);
           $img.hide(); //hides all images
         } // end for loop
          giphyArray[0].show(); // shows first image
          showImage();
        });//end ajax
      $('input[type="text"]').val('') //clears input value
    } // end else statement
  }); //end listener


  //shows first image in result, appends next button
  const showImage = () => {
    let currentGifIndex = 0;
    let $currentGif = giphyArray[currentGifIndex];
    // $giphyContainer.append($currentGif);
    //next button
    const $nextButton = $('<button>').text('anotha\' one').addClass('next-button');
    $buttonContainer.append($nextButton);
    //next button listener
    $('.next-button').on('click', (event) => {
      $currentGif.hide();
      if(currentGifIndex < giphyArray.length-1){
        currentGifIndex++;
      } else {
        currentGifIndex = 0;
      }
      $currentGif = giphyArray[currentGifIndex];
      // // console.log($currentGif);
      // // console.log(giphyArray);
      // // console.log(currentGifIndex);
      $currentGif.show();
    })
  };


}); //end window on-load
