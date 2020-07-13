// FUNCTION TO GENERATE PASSWORD
function generate() {
  // sets password length
  var complexity = document.getElementById("slider").value;
  var displayPassword = document.getElementById("display");
  var previousPasswords = document.getElementById("lastNums");
  // list all possible password value characters
  var values =
    "!#$%&'()*+,-./:;<=>?@[]^_{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  //  create for loop to choose charachters from password values above
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  // show password on display area
  displayPassword.value = password;

  // add password under previously generated section area
  previousPasswords.innerHTML += password + "<br />";
}
// set default lenght display of 25
var defaultPasswordLength = document.getElementById("length");
defaultPasswordLength.innerHTML = "Length: 25";

//FUNCTION TO SET PASSWORD LENGTH BASED ON WHERE THE SLIDER IS MOVED TO
var slider = document.getElementById("slider");
slider.oninput = function () {
  if (slider.value > 0) {
    defaultPasswordLength.innerHTML = "Length: " + slider.value;
  } else {
    defaultPasswordLength.innerHTML = "Length: 1";
  }
};
