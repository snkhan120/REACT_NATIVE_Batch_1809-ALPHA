// funtion login

function login() {
    
    var email, password;
    
    email       = document.getElementById('email').value;
    password    = document.getElementById('password').value;
    
    if(email == 'ahsan' && password == '123') {
        document.getElementById('response').textContent = "You have successfully logged in."
    } else {
        document.getElementById('response').textContent = "Invalid Login details."
    }
    
}