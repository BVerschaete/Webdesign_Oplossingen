/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    //nieuwe datum maken
    var datum = new Date();

    //datum in console plaatsen, maand heeft waarde 0-11, dus 1 bij optellen en overal '/' tussen plaatsen
    console.log(datum.getDate() + "/" + (datum.getMonth()+1) + "/" + datum.getFullYear());
}

window.addEventListener("load", setup);