function checkinG() {
  var check = document.getElementById("checkBoxing");
  if (check.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function login() {
  var uname = document.getElementById("textInput").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == "") {
    alert("Please provide a valid e-mail address");
  } else if (!filter.test(uname)) {
    alert("Please provide a valid e-mail address");
  } else if (atpos < 1 || domain != "gmail.com"){ // Second test checks if the user entered a gmail.com domain after @
    alert("Not a valid e-mail address. Please write your gmail address like this: username@gmail.com.");else {
    alert("Thank You for Login & You are Redirecting to Campuslife Website");
  }
}
 
// Reset Inputfield code.
function clearFunc() {
  document.getElementById("textInput").value = "";
}
