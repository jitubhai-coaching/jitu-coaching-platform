function register(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || []

let newUser = {
name: name,
email: email,
password: password,
admitted: false   // default
}

users.push(newUser)

localStorage.setItem("users", JSON.stringify(users))

alert("Registered Successfully! Please take admission.")

window.location = "admission.html"
}

function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || []

let user = users.find(u => u.email === email && u.password === password)

if(user){

if(user.admitted){

localStorage.setItem("currentUser", email)
window.location = "dashboard.html"

}else{

alert("You are not admitted yet. Please take admission.")
window.location = "admission.html"

}

}else{

alert("Invalid Login")

}
}
