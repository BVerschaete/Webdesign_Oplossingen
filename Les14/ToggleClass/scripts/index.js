/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    document.getElementById("colortoggle").addEventListener("click", changeColor);
    document.getElementById("underlinetoggle").addEventListener("click", changeUnderline);
    document.getElementById("boldtoggle").addEventListener("click", changeBold);
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
    if(hasClass(element, className)){
        removeClass(element, className);
    } else {
        addClass(element, className);
    }
}

function changeColor(){
    toggleClass(document.getElementsByTagName("p")[0], "important");
}

function changeUnderline(){
    toggleClass(document.getElementsByTagName("p")[0], "underlined");
}

function changeBold(){
    toggleClass(document.getElementsByTagName("p")[0], "fat");
}

window.addEventListener("load", setup);