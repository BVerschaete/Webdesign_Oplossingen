/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    document.getElementById("submit").addEventListener("click", valideer);
}

function valideer(){
    document.getElementById("error").innerHTML = "";
    valideerVoornaam();
    valideerFamilienaam();
    valideerDatum();
    valideerEmail();
    valideerKinderen();
}

function valideerVoornaam(){

}

function valideerFamilienaam(){

}

function valideerDatum(){

}

function valideerEmail(){
    var email = document.getElementById("email").value;
    if(isEmpty(email)){
        logError("@email, verplicht veld");
    }
}

function valideerKinderen(){
    var kinderen = document.getElementById("kinderen").value;

    if(!isGetal(kinderen)){
        logError("@kinderen, is geen positief getal");
    }

    if(parseInt(kinderen) < 0){
        logError("@kinderen, is geen positief getal");
    }

    if(parseInt(kinderen) > 99){
        logError("@kinderen, is te vruchtbaar");
    }
}

function isEmpty(tekst){
    var valid = false;

    if(!tekst.replace(/\s/g, '').length || tekst == null){
        valid = true;
    }

    return valid;
}

function isGetal(tekst) {
    return !isNaN(tekst);
}


function logError(error){
    var errorField = document.getElementById("error");
    errorField.innerHTML += error + "<br/>";
}

window.addEventListener("load", setup);