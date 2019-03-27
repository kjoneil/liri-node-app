// require("dotenv").config();
// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
// function spotify(){

// }

var axios = require("axios")
var action = process.argv[2];

switch (action){
    case "movie-this":
    movie();
    break;
    
    case "concert-this":
    music();
    break;

    case "do-what":
    doWhat();
    break;
}

// BAND IN TOWN FUNCTION
function music(){
var artistSearch = process.argv[3];

var artistName = "";
for (var i = 0; i < artistSearch.length; i++) {
    if (i > 30 && i < artistSearch.length) {
     artistName = artistName + "+" + artistSearch[i];
       } else {
     artistName += artistSearch[i];
   }
}
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    // console.log(queryUrl);
        axios.get(queryUrl).then(function(response){
            console.log("Name of Venue: "+ response.data[0].venue.name);
            console.log("City: "+ response.data[0].venue.city);
            console.log("Date of the Event: "+ response.data[0].datetime);
        }
);
}
// OMDB FUNCTION
function movie(){
var movieSearch = process.argv[3];

var movieName = "";

for (var i = 0; i < movieSearch.length; i++) {
    if (i > 30 && i < movieSearch.length) {
     movieName = movieName + "+" + movieSearch[i];
       } else {
     movieName += movieSearch[i];
   }
}
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        // console.log(queryUrl);
    
        axios.get(queryUrl).then(function(response){
            console.log("Movie: "+response.data.Title);
            console.log("Year: "+response.data.Released);
            console.log("IMBD: "+response.data.imdbRating);
            console.log("Rotten Tomatoes :"+response.data.Ratings[1].Value);
            console.log("Country: "+response.data.Country);
            console.log("Language: "+response.data.Language);
            console.log("Plot: "+response.data.Plot);
            console.log("Actors: "+response.data.Actors);
        }       
    );
}
// DO WHAT LIRI SAYS
function doWhat(){
var fs = require("fs");
fs.readFile("random.txt", "utf8", function(err, data){
    if(err){
        return console.log(err);
    }
    var output = data.split(",");
    console.log(output);
    
});
}

