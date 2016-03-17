/**
 * Created by Bastien on 3/12/2015.
 */

function setup() {
    testLiterals();
    testSlice();
    testConcatenation();
}

function testLiterals(){
    var string1 = "een hond";
    var string2 = "een hond";

    console.log("Met string literals(==) " + (string1 == string2));
    console.log("Met string literals(===) " + (string1 === string2));
}

function testSlice(){
    var string1 = "een hond";
    var string2 = ["een hond1","een hond","een hond2"];

    console.log("Met string literal en slice(==) " + (string1 == string2.slice(1, 2)));
    console.log("Met string literal en slice(=== ) " + (string1 === string2.slice(2, 2)));
}

function testConcatenation(){
    var string1 = "een".concat(" hond");
    var string2 = ["een hond1","een hond","een hond2"];

    console.log("Met concatenate en slice(==) " + (string1 == string2.slice(1, 2)));
    console.log("Met concatenate en slice(===) " + (string1 === string2.slice(1, 3)));
}

window.addEventListener("load", setup);