function myFunction1() {
	document.getElementById("header").innerHTML = "JavaScript was run from Head";
	document.getElementById("button").onclick = myFunction2();
	document.getElementById("button").innerHTML = "run script from body";
}
function myFunction2() {
document.getElementById("header").innerHTML = "JavaScript was run from body";
document.getElementById("button").onclick = "myFunction3()";
document.getElementById("button").innerHTML = "run script from local.js";
}
function myFunction3(){
document.getElementById("header").innerHTML = "JavaScript was run from local.js";
document.getElementById("button").onclick = "myFunction4()";
document.getElementById("button").innerHTML = "run script from otherDomain.js";
}
function myFunction4(){
document.getElementById("header").innerHTML = "JavaScript was run from otherDomain.js";
document.getElementById("button").onclick = "myFunction5()";
document.getElementById("button").innerHTML = "run script from otherFolder.js";
}
function myFunction5(){
document.getElementById("header").innerHTML = "JavaScript was run from otherFolder.js";
document.getElementById("button").onclick = "myFunction1()";
document.getElementById("button").innerHTML = "We done run all JS, click to start again";
}

