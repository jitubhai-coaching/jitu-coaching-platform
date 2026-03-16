function register(){

var name=document.getElementById("name").value
var email=document.getElementById("email").value
var password=document.getElementById("password").value

var user={
name:name,
email:email,
password:password
}

localStorage.setItem(email,JSON.stringify(user))

alert("Registration successful")

}

function login(){

var email=document.getElementById("email").value
var password=document.getElementById("password").value

var user=JSON.parse(localStorage.getItem(email))

if(user && user.password===password){

localStorage.setItem("currentUser",email)

window.location="dashboard.html"

}

else{

alert("Invalid Login")

}

}
