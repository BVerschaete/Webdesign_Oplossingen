/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    var koppels=[
        [ "[voornaam]", "Jan" ],
        [ "[familienaam]", "Janssens" ],
        [ "[factuurNummer]", "2334793232" ],
        [ "[schandaligeHerinneringskost]", "5,73Eur" ]
    ];

    var template = "Geachte [voornaam] [familienaam], Gelieve dringend uw factuur met nummer [factuurNummer] te betalen aub. Voor deze herinnering rekenen wij [schandaligeHerinneringskost] aan op uw volgende factuur. Energieke groeten, Uw leverancier";

    vervangAlles(template, koppels);
}

function vervang(template, parameter, data) {
    var begin = template.indexOf(parameter);
    var sizeParameter;
    var cut;
    var vorige;

    while (begin != -1){
        sizeParameter = parameter.length;
        cut = template.slice(0, begin) + data + template.slice(begin + sizeParameter, template.length);
        vorige = begin + sizeParameter;
        template = cut;
        begin = cut.indexOf(parameter, vorige);
    }
    console.log(template);
    return template;
}

function vervangAlles(template, koppels){
    for(var i = 0; i < koppels.length; i++){
        template = vervang(template, koppels[i][0], koppels[i][1]);
    }
    console.log(template);
}

window.addEventListener("load", setup);