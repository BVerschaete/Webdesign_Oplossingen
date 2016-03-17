/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    document.getElementById("zoek").addEventListener("click", zoek);
}

function zoek(){
    var zoekText = document.getElementById("zoekText").value
    var instructies = document.getElementsByTagName("p")[0].innerHTML;
    var errorText = document.getElementsByClassName("txtErrorMessage")[0];

    //verwijdert vorige html tags
    var div = document.createElement("div");
    div.innerHTML = instructies;
    instructies = div.textContent || div.innerText || "";

    //kijkt wanneer input geldig is
    if(zoekText.replace(/\s/g, '').length || zoekText != null) {
        errorText.innerHTML = "";

        var begin;
        if (document.getElementById("hoofdletters").checked) {
            begin = instructies.toLowerCase().indexOf(zoekText.toLowerCase());
        } else {
            begin = instructies.indexOf(zoekText);
        }

        while (begin != -1) {
            //plaatst html tags rond gevonden tekst
            instructies = instructies.slice(0, begin) + "<span class='highlight'>" + instructies.slice(begin, begin + zoekText.length) + "</span>" + instructies.slice(begin + zoekText.length, instructies.length);

            //kijkt of we hoofdlettergevoelig moeten zoeken of niet
            if(document.getElementById("hoofdletters").checked){
                begin = instructies.toLowerCase().indexOf(zoekText.toLowerCase(), begin + zoekText.length + 31)
            } else {
                begin = instructies.indexOf(zoekText, begin + zoekText.length + 31);
            }
        }
    } else {
        errorText.innerHTML = "Geen zoektext opgegeven."
    }

    document.getElementsByTagName("p")[0].innerHTML = instructies;
}

window.addEventListener("load", setup);