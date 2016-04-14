/**
 * Created by Bastien on 3/12/2015.
 */

var contacten = [];

function setup() {
    var select = document.getElementsByTagName("select")[0];
    select.selectedIndex = -1;

    document.getElementById("nieuwContact").addEventListener('click', nieuwContact);
    document.getElementById("verwijderContact").addEventListener('click', deleteContact);
    document.getElementById("saveContact").addEventListener('click', saveContact);
}

function nieuwContact(){
    var select = document.getElementsByTagName("select")[0];
    select.selectedIndex = -1;
    document.getElementById("voornaam").value = "";
    document.getElementById("familienaam").value = "";
    document.getElementById("geboortedatum").value = "";
    document.getElementById("email").value = "";
    document.getElementById("aantalkinderen").value = "";
}

function saveContact(){
    var select = document.getElementsByTagName("select")[0];
    if(select.selectedIndex == -1){
        createContact();
    } else {
        editContact(select.selectedIndex);
    }
}

function openContact(){
    var persoon = contacten[document.getElementsByTagName("select")[0].selectedIndex];
    document.getElementById("voornaam").value = persoon.voornaam;
    document.getElementById("familienaam").value = persoon.familienaam;
    document.getElementById("geboortedatum").value = persoon.geboortedatum.getFullYear() + "-" + (persoon.geboortedatum.getMonth()+1) + "-" + persoon.geboortedatum.getDate();
    document.getElementById("email").value = persoon.email;
    document.getElementById("aantalkinderen").value = persoon.aantalkinderen;
}

function createContact(){
    var persoon = {
        voornaam: document.getElementById("voornaam").value,
        familienaam: document.getElementById("familienaam").value,
        geboortedatum: new Date(document.getElementById("geboortedatum").value),
        email: document.getElementById("email").value,
        aantalkinderen: document.getElementById("aantalkinderen").value
    };

    contacten.push(persoon);

    var option = document.createElement('option');
    option.textContent = persoon.voornaam + " " + persoon.familienaam;
    option.addEventListener('click', openContact);

    document.getElementsByTagName("select")[0].appendChild(option);

    nieuwContact();
}

function editContact(index){
    var option = document.getElementsByTagName("select")[0].childNodes[index + 1];
    var persoon = contacten[index];
    persoon.voornaam = document.getElementById("voornaam").value;
    persoon.familienaam = document.getElementById("familienaam").value;
    persoon.geboortedatum = new Date(document.getElementById("geboortedatum").value);
    persoon.email = document.getElementById("email").value;
    persoon.aantalkinderen = document.getElementById("aantalkinderen").value;

    option.textContent = persoon.voornaam + " " + persoon.familienaam;

    document.getElementsByTagName("select")[0].appendChild(option);
}

function deleteContact(){
    var select = document.getElementsByTagName("select")[0];
    if(select.selectedIndex != -1){
        select.removeChild(select.childNodes[select.selectedIndex + 1]);
        contacten.splice(select.selectedIndex, 1);
    }

    nieuwContact();
}

window.addEventListener("load", setup);