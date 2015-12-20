/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    vraagGemeenten();
}

var vraagGemeenten = function(){
    //vraag naam van gemeente
    var gemeente = prompt("Geef een gemeente in, type 'stop' om te stoppen", "Gemeente");

    //als gemeente verschillend is van 'stop'
    if(gemeente.toLowerCase() != "stop"){
        //zoek het dropdown menu met id 'gemeenten'
        var gemeenten = document.getElementById("gemeenten");

        //die code hier ebbek gewoon gegoogled want kwist da nie uit m'n hoofd
        //maak een option element (in een 'select' element zitten enkel 'option' elementen)
        var option = document.createElement("option");

        //verander de tekst van het 'option' element naar de gemeente
        option.text = gemeente;

        //voeg de option toe aan het 'select' element
        gemeenten.add(option);

        //vraag een volgende gemeente op
        vraagGemeenten();
    }
};

window.addEventListener("load", setup);