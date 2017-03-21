function register(){
  var us = document.getElementById("user").value;
  var ps = document.getElementById("pass").value;
  alert("Username entered is " + us + " and Password entered is " + ps);
}
function validateUsername(){
  var userEntered = document.getElementById("user").value;
    
  if(userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
    }
    else {
      document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
}}
  
function validatePassword(){
    var passEntered = document.getElementById("pass").value;
  if(passEntered == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
}

else {
document.getElementById("passwordGroup").classList.add("has-success");
}}