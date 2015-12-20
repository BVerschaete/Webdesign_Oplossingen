/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    //alle componenten van de class 'slider' in de variabele sliders steken
    var sliders = document.getElementsByClassName("slider");

    //aan eerste slider de update functie toevoegen, zowel voor slepen (change) als voor loslaten (input)
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);

    //aan tweede slider
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);

    //aan derde slider
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    //voor de startwaarden van de slider moet het kleur al eens ingesteld worden
    update();
}

var update = function(){

    //van iedere slider de waarde halen en in variabele steken
    var red = document.getElementById("sliderRed").value;
    var green = document.getElementById("sliderGreen").value;
    var blue = document.getElementById("sliderBlue").value;

    //de tekst bij rood, groen en blauw aanpassen
    document.getElementById("txtRed").innerHTML = red;
    document.getElementById("txtGreen").innerHTML = green;
    document.getElementById("txtBlue").innerHTML = blue;

    //bij mijn blokje (colorDemo) de style aanpassen met het atribuut background-color en de waarden rgb
    document.getElementById("colorDemo").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

window.addEventListener("load", setup);