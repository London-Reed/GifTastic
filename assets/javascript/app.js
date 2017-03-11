//create an arry of strings of things i like
var topics = ['basketball', 'technology', 'real estate'];


//ajax call
var queryURL = "http://api.giphy.com/v1/gifs/search?q=10" + topics + "&api_key=dc6zaTOxFJmzC"




$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(queryURL);

          console.log(response);

          var results = response.data;


//create a buttons for each topic in html using for loop

for(var i = 0; i < topics.length; i ++){
	var buttons = $('<button>' + topics[i] + '</button>');
	$('#buttons').append(buttons);
	console.log(topics[i]);
}
});
