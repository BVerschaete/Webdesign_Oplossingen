/**
 * Created by Bastien on 3/12/2015.
 */

var AANTAL_VERTICAAL = 4;
var AANTAL_HORIZONTAAL = 6;
var aantalKaarten = 12;
var images = [];

function setup() {
    if(AANTAL_VERTICAAL*AANTAL_HORIZONTAAL == aantalKaarten*2) {
        document.getElementById("container").style.width = 192*AANTAL_HORIZONTAAL + "px";
        fillPictures();
        fillScreen();
    } else {
        console.log("Ongeldige configuratie");
    }
}

function fillPictures(){
    var imageSrc;
    for(var i = 0; i < aantalKaarten; i++){
        imageSrc = "img/kaart" + i + ".png";
        //2 versies van iedere kaart
        images.push(imageSrc);
        images.push(imageSrc);
    }
}

function fillScreen(){
    images.shuffle();
    var parent = document.getElementById("container");
    for(var i = 0; i < AANTAL_VERTICAAL; i++){
        for(var j = 0; j < AANTAL_HORIZONTAAL; j++){
            var backgroundDiv = document.createElement('div');
            backgroundDiv.className = 'backgroundDiv';
            var img = document.createElement('img');
            img.setAttribute('data-image', images[AANTAL_HORIZONTAAL*i+j]);
            img.src = "img/achterkant.png";
            img.addEventListener('click', switchImg);
            img.addEventListener('click', checkMatching);
            backgroundDiv.appendChild(img);
            parent.appendChild(backgroundDiv);
        }
    }
}

function switchImg(event){
    switchImgElement(event.target);
}

function switchImgElement(element){
    var placeHolder;
    if(element.src.indexOf("achterkant") == -1){
        placeHolder = element.getAttribute('data-image');
        element.setAttribute('data-image', element.src);
        element.src = placeHolder;
    } else {
        placeHolder = element.getAttribute('data-image');
        element.setAttribute('data-image', element.src);
        element.src = placeHolder;
    }
}

function switchImagesBack(image1, image2){
    image1.parentNode.style.backgroundColor = "black";
    image2.parentNode.style.backgroundColor = "black";
    switchImgElement(image1);
    switchImgElement(image2);
    var nodeList = document.getElementById('container').children;

    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].firstChild.addEventListener('click', switchImg);
        nodeList[i].firstChild.addEventListener('click', checkMatching);
    }
}

var numberClicked = 0;
var found = [];

function checkMatching(){
    numberClicked++;
    if(numberClicked == 2) {
        var nodeList = document.getElementById('container').children;
        var turned = [];

        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i].firstChild.removeEventListener('click', switchImg);
            nodeList[i].firstChild.removeEventListener('click', checkMatching);
            if (nodeList[i].firstChild.src.indexOf("achterkant") == -1) {
                if(found.indexOf(nodeList[i].firstChild) == -1){
                    turned.push(nodeList[i].firstChild);
                }
            }
        }

        if (turned[0].src == turned[1].src) {
            found.push(turned[0], turned[1]);
            turned[0].parentNode.style.backgroundColor = "green";
            turned[0].removeEventListener('click', switchImg);
            turned[0].removeEventListener('click', checkMatching);
            turned[1].parentNode.style.backgroundColor = "green";
            turned[1].removeEventListener('click', switchImg);
            turned[1].removeEventListener('click', checkMatching);
        } else {
            turned[0].parentNode.style.backgroundColor = "red";
            turned[1].parentNode.style.backgroundColor = "red";
            setTimeout(function(){
                switchImagesBack(turned[0], turned[1])
            }, 2000);
        }

        numberClicked = 0;
    }
}

Array.prototype.shuffle = function() {
    var currentIndex = this.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

window.addEventListener("load", setup);