var Trackster = {};
const API_KEY = 'd4e5ac360a653633c15ae37bdffc6acc';

$(function() {
  // method to handle the user clicking on the search button
  $('#search-button').click(function() {
    // select the input box and use the .val() method to access the input text
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    success: function(response) {
      console.log(response);
    }
  });
};
