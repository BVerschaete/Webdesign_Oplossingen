/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    var txtOutput=document.getElementById("txtOutput");
    console.log( hasClass(txtOutput, "message") );
    console.log( hasClass(txtOutput, "massage") );
    addClass(txtOutput, "important");
    console.log( hasClass(txtOutput, "important") );
    addClass(txtOutput, "invalid");
    removeClass(txtOutput, "important");
    console.log( hasClass(txtOutput, "important") );
    toggleClass(txtOutput, "invalid");
    toggleClass(txtOutput, "invalid");
}

function hasClass(element, className){
    var name = element.className;
    if(typeof name == 'undefined'){
        return false;
    } else {
        if(name.indexOf(className) == -1){
            return false;
        }
    }
    return true;
}

function addClass(element, className){
    element.className += " " + className;
}

function removeClass(element, className){
    element.className = element.className.replace(className, "");
    element.className = element.className.trim();
}

function toggleClass(element, className){
    if(hasClass){
        removeClass(element, className);
    } else {
        addClass(element, className);
    }
}

window.addEventListener("load", setup);