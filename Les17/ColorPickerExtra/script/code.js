function initialize() {
	var sliders = document.getElementsByClassName("slider");
	document.getElementById("save").addEventListener('click', save);
	var i=0;
	for (i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
}

function update() {
	var swatch=document.getElementById("swatch");
	swatch.style.background=getColor();
}

function save(){
    var savedColor = document.getElementById("savedColors");
    var swatch = document.createElement("div");
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.addEventListener('click', removeParent);
    closeButton.className = "closeButton";
    swatch.appendChild(closeButton);

    swatch.className = "swatch savedSwatch";
    swatch.style.background = getColor();
    swatch.addEventListener('click', updateSwatch);
    savedColor.appendChild(swatch);
}

function removeParent(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function getColor(){
    var red=document.getElementById("sldRed").value;
    var green=document.getElementById("sldGreen").value;
    var blue=document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    return "rgb("+red+","+green+","+blue+")";
}

function updateSwatch(event){
    var rgb = event.target.style.background.match(/\d+/g);

    document.getElementById("sldRed").value = rgb[0];
    document.getElementById("sldGreen").value = rgb[1];
    document.getElementById("sldBlue").value = rgb[2];

    document.getElementById("swatch").style.background = event.target.style.background;
}
window.addEventListener("load", initialize, false);