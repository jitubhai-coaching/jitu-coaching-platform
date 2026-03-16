function upload(){

var link=document.getElementById("note").value

var notes=JSON.parse(localStorage.getItem("notes"))||[]

notes.push(link)

localStorage.setItem("notes",JSON.stringify(notes))

show()

}

function show(){

var notes=JSON.parse(localStorage.getItem("notes"))||[]

var html=""

for(var i=0;i<notes.length;i++){

html+="<li>"+notes[i]+"</li>"

}

document.getElementById("list").innerHTML=html

}

show()
