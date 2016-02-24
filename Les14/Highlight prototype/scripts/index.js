/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    document.getElementById("zoek").addEventListener("click", zoek);
}

function zoek(){
    var zoekText = document.getElementById("zoekText").value;
    var instructies = document.getElementsByTagName("p")[0].innerHTML;
    //verwijdert vorige html tags
    var div = document.createElement("div");
    div.innerHTML = instructies;
    instructies = div.textContent || div.innerText || "";

    var begin;

    if(document.getElementById("hoofdletters").checked) {
        begin = instructies.toLowerCase().indexOf(zoekText.toLowerCase());
    } else {
        begin = instructies.indexOf(zoekText);
    }

    instructies = instructies.slice(0, begin) + "<span class='highlight'>" + instructies.slice(begin, begin + zoekText.length) + "</span>" + instructies.slice(begin + zoekText.length, instructies.length);


    document.getElementsByTagName("p")[0].innerHTML = instructies;
}

window.addEventListener("load", setup);