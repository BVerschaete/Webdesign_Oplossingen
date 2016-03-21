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
    console.log(images);
}

function fillScreen(){
    images.shuffle();
    var parent = document.getElementById("container");
    for(var i = 0; i < AANTAL_VERTICAAL; i++){
        for(var j = 0; j < AANTAL_HORIZONTAAL; j++){
            var backgroundDiv = document.createElement('div');
            backgroundDiv.className = 'backgroundDiv';
            var img = document.createElement('img');
            img.setAttribute('data-image', images[4*i+j]);
            //1 = true
            img.setAttribute('src', "img/achterkant.png");
            img.addEventListener('click', switchImg);
            img.addEventListener('click', checkMatching);
            backgroundDiv.appendChild(img);
            parent.appendChild(backgroundDiv);
        }
    }
}

function switchImg(event){
    var src = event.target.dataset.image;
    event.target.dataset.image = "img/achterkant.png";
    event.target.src = src;
    event.target.setAttribute('data-turned', "1");
}

function switchImages(image1, image2){
    switchImg(image1);
    switchImg(image2);
}

function checkMatching(){
    var nodeList = document.getElementById('container').children;
    var turned = [];
    for(var i = 0; i < nodeList.length; i++){
        if(nodeList[i].firstChild.getAttribute("data-turned") == 1) {
            turned.push(nodeList[i].firstChild);
        }
    }

    if(turned[0].src == turned[1].src){
        turned[0].parentNode.style.backgroundColor = "green";
        turned[1].parentNode.style.backgroundColor = "green";
    } else {
        turned[0].parentNode.style.backgroundColor = "red";
        turned[1].parentNode.style.backgroundColor = "red";
        setTimeout(switchImages(turned[0], turned[1]), 200);
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