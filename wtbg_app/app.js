//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {
  //global variables
  const $giphyContainer = $('.giphy-container');
  const $buttonContainer = $('.button-container');
  let giphyArray = [];
  const $modal = $('.modal');

  // form is filled out and submitted
  $('form').on('submit', (event) => {
    event.preventDefault();
    $('img').remove();
    $buttonContainer.empty();
    giphyArray = [];
    console.log(giphyArray);
    // $giphyContainer.children().eq(0).show();

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

//quiz pop-up -- dj khalid catchphrases
//open modal
  const openModal = () => {
    $modal.show();
  }
  //pops up after 2 seconds on the site -- CHANGE THIS!
  setTimeout(openModal, 1000);

  //close MODAL
  $('#close').on('click', () => {
    $modal.hide();
  })

  // 'seems like you're really enjoying these gifs. and perhaps you know a thing about DJ Khalid. Shall we test your knowledge?'
    //if yes, begin quiz
    //if no, exit modal

}); //end window on-load
