/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    var student = {
        naam: "bastien",
        achternaam: "verschaete",
        geboortedatum: new Date("1996-12-21")
    };

    console.log(JSON.stringify(student));


    var omgekeerdeStudent = JSON.parse('{"naam":"bastien","achternaam":"verschaete","geboortedatum":"1996-12-21T00:00:00.000Z"}');

    console.log(omgekeerdeStudent.geboortedatum);
}

window.addEventListener("load", setup);