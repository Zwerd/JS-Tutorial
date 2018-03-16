function myFunction3(){
document.getElementById("header").innerHTML = "JavaScript was run from local.js";
document.getElementById("button").onclick = myFunction4;
document.getElementById("button").innerHTML = "run script from otherDomain.js";
}
