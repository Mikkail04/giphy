// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let custom_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=clE6kEGmVN8ScIYWOuZzUkSqW6aVPrMH";

$(".search-button").click(function(){
   fetch(custom_api_url)
  
  .then(function(response) {
        	return response.json();
        })

  .then(function(data) {
        	console.log(data);
        });  

  
});

