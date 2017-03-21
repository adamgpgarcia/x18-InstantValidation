function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  var txt = userEntered;
  document.getElementById("user").innerHTML = txt.length;
  var ptxt = passEntered;
  document.getElementById("ptext").innerHTML = ptxt.length;

  if ( txt.length >= 6 ) {

    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {

    document.getElementById("usernameError").innerHTML="Must have more then 6 digits.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }


  if((passEntered != "password" && passEntered != "Password" && ptxt.length >= 6 && ptxt.length <= 20 && passEntered != userEntered){

    document.getElementById("passwordGroup").classList.add("has-success");
  }

  else if(passEntered = "password" || passEntered = "Password"){
  //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="The password cannot contain password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(ptxt.length <= 6 || ptxt.length >= 20){
  //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="The password must be between 6 - 20 digits.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
  //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="The password must be between 6 - 20 digits.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

}
