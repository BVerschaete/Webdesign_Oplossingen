/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    var inputs = document.getElementsByTagName("input");

    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = 0;
        inputs[i].addEventListener("change", berekenSubTotaal);
    }

    berekenSubTotaal();
}

var berekenSubTotaal = function(){
    var bodyRows = document.getElementById("tableBody").getElementsByTagName("tr");
    var subtotalen = document.getElementsByClassName("subTotaal");

    for(var i = 0; i < bodyRows.length; i++){
        var prijs = parseFloat(bodyRows[i].getElementsByTagName("td")[1].innerText);
        if(isNaN(prijs)){
            prijs = 0.00;
        }
        var aantal = parseInt(bodyRows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value);
        if(isNaN(aantal)){
            aantal = 0;
        }
        var btw = parseInt(bodyRows[i].getElementsByTagName("td")[3].innerText);
        if(isNaN(btw)){
            btw = 0;
        }

        subtotalen[i].innerText = (prijs * aantal * (1+(btw/100))).toFixed(2);
    }

    berekenTotaal();
};

var berekenTotaal = function(){
    var subtotalen = document.getElementsByClassName("subTotaal");
    var totaal = 0;

    for(var i = 0; i < subtotalen.length; i++){
        totaal += parseFloat(subtotalen[i].innerText);
    }

    document.getElementById("totaal").innerText = totaal.toFixed(2).toString();
};

window.addEventListener("load", setup);