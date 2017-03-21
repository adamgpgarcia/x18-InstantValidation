function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;


  var ltxt;
  var utxt;
  var txt = userEntered;
  document.getElementById("user").innerHTML = txt.length;
  var ptxt = passEntered;
  document.getElementById("pass").innerHTML = ptxt.length;
  var pos = userEntered.indexOf(" ");

  ltxt= userEntered.toLowerCase();

  if ( txt.length >= 6 && pos == -1){

    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else if( txt.length < 6) {

    document.getElementById("usernameError").innerHTML="Must have more then 6 digits.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {

    document.getElementById("usernameError").innerHTML="No spaces are allowed.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  if(userEntered.toLowerCase() != "password" && ptxt.length >= 6 && ptxt.length <= 20 && passEntered != userEntered){

    document.getElementById("passwordGroup").classList.add("has-success");
  }

  else if( ltxt == "password"){

    document.getElementById("passwordError").innerHTML="The password cannot contain password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(ptxt.length < 6 || ptxt.length > 20){

    document.getElementById("passwordError").innerHTML="The password must be between 6 - 20 digits.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="The password must be different then the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

}
