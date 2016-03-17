/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    vraagGemeenten();
}

var vraagGemeenten = function(){
    //vraag naam van gemeente
    var gemeente = prompt("Geef een gemeente in, type 'stop' om te stoppen", "Gemeente");
    var gemeentes = [];
    //als gemeente verschillend is van 'stop'
    while(gemeente.toLowerCase() != "stop"){
        gemeentes.push(gemeente);
        gemeente = prompt("Geef een gemeente in, type 'stop' om te stoppen", "Gemeente");
    }

    sorteerGemeentes(gemeentes);
};

function sorteerGemeentes(gemeentes){
    gemeentes.sort(sorteer);
    plaatsGemeenten(gemeentes);
}

function sorteer(a,b){
    return a.localeCompare(b);
}

function plaatsGemeenten(gemeentes){
    //zoek het dropdown menu met id 'gemeenten'
    var gemeenten = document.getElementById("gemeenten");

    for(var i = 0; i < gemeentes.length; i++) {
        var option = document.createElement("option");

        //verander de tekst van het 'option' element naar de gemeente
        option.text = gemeentes[i];

        //voeg de option toe aan het 'select' element
        gemeenten.add(option);
    }
}

window.addEventListener("load", setup);