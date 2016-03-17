/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    document.getElementById("submit").addEventListener('click', validate);
}

function validate(){
    checkRoker();
    checkTaal();
    checkBuurland();
    checkBestelling();
}

function checkRoker(){
    var isRoker = document.getElementById("roker").checked;

    if(isRoker){
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }
}

function checkTaal(){
    var taal = document.getElementsByName("moedertaal");

    for(var i = 0; i < taal.length; i++){
        if(taal[i].checked){
            console.log("moedertaal is " + taal[i].value);
        }
    }
}

function checkBuurland(){
    var landen = document.getElementById("buurland");
    var buurland = landen.options[landen.selectedIndex].text;

    console.log("favoriet buurland is " + buurland);
}

function checkBestelling(){
    var bestellingLijst = document.getElementById("bestelling").options;
    var bestelling = "";

    for(var i = 0; i < bestellingLijst.length; i++){
        if(bestellingLijst[i].selected){
            bestelling = bestelling.concat(bestellingLijst[i].text + " ");
        }
    }

    console.log("bestelling bestaat uit " + bestelling);
}

window.addEventListener("load", setup);