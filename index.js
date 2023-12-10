// Move to top of file: preferable
// $(() => { // Short form
$(document).ready(() => {
  // Doesn't work without document.ready. #action does not exist yet
  $("#action").on('click', onButtonClick);
});

const onButtonClickTheOldWay = function() {
  console.log("Clicked");

  // The really old way
  $.ajax({
    url: "about.json",
    type: "GET",
    success: function(data) {
      console.log(data);
      $('#about').text(data.text);
    },
    error: function(error) {
      console.log(error.statusText);
    },
  });

};

const onButtonClickTheHardWay = function() {
  console.log("Clicked");

  // The hard way. Still old
  $.ajax({
    url: "about.json",
    type: "GET",
  }).done(data => {
    console.log(data);
    $('#about').text(data.text);
  }).fail(error => {
    console.log(error.statusText);
  });

};

const onButtonClickPromises = function() {
  console.log("Clicked");

  // The Better way. Still a bit hard
  $.ajax({
    url: "about.json",
    type: "GET",
  })
    .then(data => {
      console.log(data);
      $('#about').text(data.text);
    })
    .catch(error => {
      console.log(error.statusText);
    });

};

// The better way
const onButtonClick = function() {
  console.log("Clicked");

  // The Better. Still a bit hard
  $.get("about.json")
    .then(data => {
      console.log(data);
      $('#about').text(data.text);
    })
    .catch(error => {
      console.log(error.statusText);
    });

};
