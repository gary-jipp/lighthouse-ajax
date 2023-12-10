
const onButtonClick = function() {
  console.log("Clicked");

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("action");
      const about = document.getElementById("about");
      about.innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "about.html");
  // xhttp.open("GET", "about.xml"); // Name doesn't matter
  xhttp.send();
};


const button = document.getElementById("action");
button.addEventListener("click", onButtonClick);
