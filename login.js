// var attempt = 3; 

// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "JeniAro" && password == "jeni1234"){
// alert ("Login successfully");
// window.location = "login.html"; // Redirecting to other page.
// return false;
// }
// else{
// -- attempt;//decrement
// alert("You have left "+attempt+" attempt ! so plese enter correct username & password;");

// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }




let form = document.querySelector('#form_id');
function login(e) {
    e.preventDefault();
    let valid = false;
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (name == null || name == '') {
        document.getElementById('dem').innerHTML = 'Name Cannot be blank';
    }
    if (password == null || password == '') {
        document.getElementById('pw').innerHTML = 'Password cannot be blank';
    }
    if (name == 'JeniAro' && password == "1234") {
        document.getElementById('result').innerHTML='login successfull';
        valid = true;

    }  if(name == '' && password == '' ){
        document.getElementById('wel').innerHTML = "Fill the all details";
    }
    if(name != 'JeniAro' && password != "1234"){
        document.getElementById('wel').innerHTML = "Invalid username and password";
    }
    if (valid) {
        form.submit(valid)
    }
}



