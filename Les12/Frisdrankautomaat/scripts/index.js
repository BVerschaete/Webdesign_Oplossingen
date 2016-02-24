/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    var buttons = document.getElementsByClassName("prijs");
    document.getElementById("bevestig").addEventListener("click", bevestig)
    buttons[0].addEventListener("click", addPrice);
    buttons[1].addEventListener("click", addPrice);
}

var bevestig = function(){

};

var addPrice = function(event){
    document.getElementById("bedrag").value = document.getElementById("bedrag").value + parseFloat(event.target.value);
};


window.addEventListener("load", setup);