// Move to top of file: preferable
// $(() => { // Short form
$(document).ready(() => {
  // Doesn't work without document.ready. #action does not exist yet
  $("#action").on('click', onButtonClick);
});

const onButtonClick = function() {
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
