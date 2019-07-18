//////////////////
// WINDOW ON-LOAD
//////////////////
$(() => {

  $('form').on('submit', (event) => {
     event.preventDefault();
     const userInput = $('input[type="text"]').val();
       $.ajax({
         type: "GET",
         url: "https://developers.zomato.com/api/v2.1/locations?query=" +userInput,
         headers: {
           "user-key": "cdee9b3e88812b0fe7cb859da0da336c",
         },
       }).then(
         (data) => {
           console.log(data.location_suggestions[0].title);
         },
         (error) => {
           console.log('error');
         }
       );//end ajax
  }); //end listener







}) //end window on-load
