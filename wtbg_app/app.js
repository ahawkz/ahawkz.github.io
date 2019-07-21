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
      $currentGif.show();
    })
  };

  //////////
  // QUIZ
  //////////

  //quiz pop-up -- dj khalid catchphrases
  //open modal
    const openModal = () => {
      $modal.show();
    }
    //pops up after 2 seconds on the site -- CHANGE THIS TO 2 MINUTES!
    setTimeout(openModal, 1000);

    //if user clicks to begin quiz
  $('#take-quiz-button').on('click', () => {
    //hide opening text
    $('.opening-modal-text').remove();
    beginQuiz();
  })

  let totalScore = 0;

  const beginQuiz = () => {
    //replace with new modal text
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
    $('#modal-textbox').append($newQuizText);
    showFirstQuestion();
  };

  const showFirstQuestion = () => {
    $firstQuestion = $('<p>').text('\"Anotha One\" or \"Roger That\"');
    $('#modal-textbox').append($firstQuestion);
    $questionsDiv = $('<div>').addClass('questions-container');
    $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('Anotha One').attr('id', 'option-1-1')
    $optionB = $('<button>').text('Roger That').attr('id', 'option-1-2');
    $questionsDiv.append($optionA);
    $questionsDiv.append($optionB);
    $('#option-1-1').on('click', () => {
      console.log('option 1 clicked');
      totalScore++;
      questionTwo();
    })

    $('#option-1-2').on('click', () => {
      console.log('option 2 clicked');
        questionTwo();
    })
  };

  const questionTwo = () => {
    $('.opening-modal-text').remove();
    console.log('question two')
    console.log(totalScore);
  }



  //to close MODAL
  $('#close').on('click', () => {
    $modal.hide();
  })

  // modal pop-up
    //if user clicks to begin quiz, then
      // clear current text from modal, keep x in top corner
      //replace with the following text:
        // "Which phrases below are famous DJK phrases?"
          // option a
            // if option a is chosen, add one point to final score
          // option b
            // if option b is chosen, add no points to final score
          // repeat this 4 more times
        // if final score = 5, user gets 100%
          // if final score = 4, user gets 80%
          // if final score = 3, user gets 60%
          // if final score = 2, user gets 40%
          // if final score = 1, user gets 20%
          // if final score = 0, sorry, looks like  you don't know a thing about DJ K!
    //if no, click x to exit modal

}); //end window on-load
