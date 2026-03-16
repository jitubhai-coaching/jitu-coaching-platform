function submitTest(){

var answers=document.getElementsByName("q1")

var score=0

for(var i=0;i<answers.length;i++){

if(answers[i].checked && answers[i].value=="10")

score++

}

document.getElementById("result").innerHTML="Score: "+score

}
