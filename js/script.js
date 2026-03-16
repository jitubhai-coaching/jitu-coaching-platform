function register(){

var email=document.getElementById("email").value
var password=document.getElementById("password").value

localStorage.setItem(email,password)

alert("Registered Successfully")

}

function login(){

var email=document.getElementById("email").value
var password=document.getElementById("password").value

if(localStorage.getItem(email)==password)

window.location="dashboard.html"

else

alert("Invalid login")

}
