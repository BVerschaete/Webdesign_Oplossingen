/**
 * Created by basti on 18/02/2016.
 */

function test() {
    var sliders = document.getElementsByClassName("slider");
    for(var i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

function update(){
    console.log("test")
}