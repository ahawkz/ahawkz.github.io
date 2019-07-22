//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {

  /////////
  // GIFS
  /////////

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
  let totalScore = 0;
  $('.modal').hide();

  //open modal
  const openModal = () => {
    $('.modal').show();
  }

  //pops up after 5 seconds on the site
  setTimeout(openModal, 125000);

  //if user clicks to begin quiz
  $('#take-quiz-button').on('click', () => {
    //hide opening text
    $('.opening-modal-text').remove();
    beginQuiz();
  })

  //begin quiz
  const beginQuiz = () => {
    //replace with new modal text
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
    $('#modal-textbox').append($newQuizText);
    showFirstQuestion();
  };

  //question one
  const showFirstQuestion = () => {
    $question = $('<p>').text('\"Anotha One\" or \"Roger That\"');
    $('#modal-textbox').append($question);
    $questionsDiv = $('<div>').addClass('questions-container');
    $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('Anotha One').attr('id', 'option-1')
    $optionB = $('<button>').text('Roger That').attr('id', 'option-2');
    $questionsDiv.append($optionA);
    $questionsDiv.append($optionB);
    //when option 1 is clicked
    $('#option-1').on('click', () => {
      totalScore++;
      questionTwo();
    })
    //when option 2 is clicked
    $('#option-2').on('click', () => {
        questionTwo();
    })
  };

  //question two
  const questionTwo = () => {
    $('#modal-textbox').empty();
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
      $('#modal-textbox').append($newQuizText);
    $question = $('<p>').text('\"Bless Up\" or \"Bless Down\"');
      $('#modal-textbox').append($question);
    $questionsDiv = $('<div>').addClass('questions-container');
      $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('Bless Up').attr('id', 'option-1')
    $optionB = $('<button>').text('Bless Down').attr('id', 'option-2');
      $questionsDiv.append($optionA);
      $questionsDiv.append($optionB);
    //when option 1 is clicked
    $('#option-1').on('click', () => {
      totalScore++;
      questionThree();
    })
    //when option 2 is clicked
    $('#option-2').on('click', () => {
      questionThree();
    })
  };

  //question three
  const questionThree = () => {
    $('#modal-textbox').empty();
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
      $('#modal-textbox').append($newQuizText);
    $question = $('<p>').text('\"Hakuna Matata\" or \"Major Key\"');
      $('#modal-textbox').append($question);
    $questionsDiv = $('<div>').addClass('questions-container');
      $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('Hakuna Matata').attr('id', 'option-1')
    $optionB = $('<button>').text('Major Key').attr('id', 'option-2');
      $questionsDiv.append($optionA);
      $questionsDiv.append($optionB);
    //when option 1 is clicked
    $('#option-1').on('click', () => {
      questionFour();
    })
    //when option 2 is clicked
    $('#option-2').on('click', () => {
      totalScore++;
      questionFour();
    })
  };

  //question four
  const questionFour = () => {
    $('#modal-textbox').empty();
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
      $('#modal-textbox').append($newQuizText);
    $question = $('<p>').text('\"#WinOrLose\" or \"#WeTheBest\"');
      $('#modal-textbox').append($question);
    $questionsDiv = $('<div>').addClass('questions-container');
      $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('#WinOrLose').attr('id', 'option-1')
    $optionB = $('<button>').text('#WeTheBest').attr('id', 'option-2');
      $questionsDiv.append($optionA);
      $questionsDiv.append($optionB);
    //when option 1 is clicked
    $('#option-1').on('click', () => {
      questionFive();
    })
    //when option 2 is clicked
    $('#option-2').on('click', () => {
      totalScore++;
      questionFive();
    })
  }

  //question five
  const questionFive = () => {
    $('#modal-textbox').empty();
    $newQuizText = $('<h3>').text('Which phrases below are famous DJ Khaled catchphrases?').css('color', 'black');
      $('#modal-textbox').append($newQuizText);
    $question = $('<p>').text('\"Win Win Win No Matter What\" or \"I\'ll Never Change\"');
      $('#modal-textbox').append($question);
    $questionsDiv = $('<div>').addClass('questions-container');
      $('#modal-textbox').append($questionsDiv);
    $optionA = $('<button>').text('Win Win Win No Matter What').attr('id', 'option-1')
    $optionB = $('<button>').text('I\'ll Never Change').attr('id', 'option-2');
      $questionsDiv.append($optionA);
      $questionsDiv.append($optionB);
    //when option 1 is clicked
    $('#option-1').on('click', () => {
      totalScore++;
      finalScore();
    })
    //when option 2 is clicked
    $('#option-2').on('click', () => {
      finalScore();
    })
  }

  //reveals final score of quiz
  const finalScore = () => {
    $('#modal-textbox').empty();
      if(totalScore === 5){
        $newQuizText = $('<h3>').text('All you do is win, win, win!').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 100%, congrats!')
          $('#modal-textbox').append($finalText);
      } else if(totalScore === 4){
        $newQuizText = $('<h3>').text('You almost got it.').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 80%!')
          $('#modal-textbox').append($finalText);
      } else if(totalScore === 3){
        $newQuizText = $('<h3>').text('Better luck next time!').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 60%.')
          $('#modal-textbox').append($finalText);
      } else if(totalScore === 2){
        $newQuizText = $('<h3>').text('Better luck next time!').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 40%.')
          $('#modal-textbox').append($finalText);
      } else if(totalScore === 1){
        $newQuizText = $('<h3>').text('Doesn\'t seem like you know our friend DJ Khaled too well.').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 20%.')
          $('#modal-textbox').append($finalText);
      } else {
        $newQuizText = $('<h3>').text('Try again next time.').css('color', 'black');
          $('#modal-textbox').append($newQuizText);
        $finalText = $('<p>').text('You scored 0%.')
          $('#modal-textbox').append($finalText);
      }
  };

  //to close MODAL
  $('#close').on('click', () => {
    $('.modal').hide();
  })

}); //end window on-load
