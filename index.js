// Move to top of file: preferable
// $(() => { // Short form
$(document).ready(() => {
  // Doesn't work without document.ready. #action does not exist yet
  $("#action").on('click', onButtonClick);
});

const onButtonClick = function() {
  console.log("Clicked");
  $.ajax({
    url: "about.json"
  })
};
