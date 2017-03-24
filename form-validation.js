function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username entered:" + userEntered + "Password entered:" + passEntered);
}
function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var pos = userEntered.indexOf(" ");
  var txt = userEntered;
  document.getElementById("user").innerHTML = txt.length;

  if ( txt.length >= 6 && pos == -1){

    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");

  }
  else if( txt.length < 6) {

    document.getElementById("usernameError").innerHTML="Must have more then 6 digits.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }

  else if( pos != -1) {

    document.getElementById("usernameError").innerHTML="Must contain no spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }

}

function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  var ptxt = passEntered;
  document.getElementById("pass").innerHTML = ptxt.length;

  var ltxt = userEntered.toLowerCase();

  if(userEntered.toLowerCase() != "password" && ptxt.length >= 6 && ptxt.length <= 20 && passEntered != userEntered){

    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }

  else if( ltxt == "password"){

    document.getElementById("passwordError").innerHTML="The password cannot contain password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if(ptxt.length < 6 || ptxt.length > 20){

    document.getElementById("passwordError").innerHTML="The password must be between 6 - 20 digits.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if(passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="The password must be different then the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }

}
