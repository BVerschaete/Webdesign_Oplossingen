
function setup() { 
	var btnOptellen=document.getElementById("btnOptellen");
	var btnAftrekken=document.getElementById("btnAftrekken");
	var btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	var btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
} 

function optellen() {
	var txtOutput=document.getElementById("txtOutput");
	var txtLinks=document.getElementById("txtLinks");
	var txtRechts=document.getElementById("txtRechts");
	
	var g1=parseInt(txtLinks.value, 10);
	var g2=parseInt(txtRechts.value, 10);
	var resultaat = g1+g2;

	var resultaatTekst=g1+" + "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

function aftrekken() {
	var txtOutput=document.getElementById("txtOutput");
	var txtLinks=document.getElementById("txtLinks");
	var txtRechts=document.getElementById("txtRechts");

	var g1=parseInt(txtLinks.value, 10);
	var g2=parseInt(txtRechts.value, 10);
	var resultaat = g1-g2;

	var resultaatTekst=g1+" - "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

function vermenigvuldigen() {
	var txtOutput=document.getElementById("txtOutput");
	var txtLinks=document.getElementById("txtLinks");
	var txtRechts=document.getElementById("txtRechts");

	var g1=parseInt(txtLinks.value, 10);
	var g2=parseInt(txtRechts.value, 10);
	var resultaat = g1*g2;

	var resultaatTekst=g1+" * "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

function delen() {
	var txtOutput=document.getElementById("txtOutput");
	var txtLinks=document.getElementById("txtLinks");
	var txtRechts=document.getElementById("txtRechts");

	var g1=parseInt(txtLinks.value, 10);
	var g2=parseInt(txtRechts.value, 10);
	var resultaat = g1/g2;

	var resultaatTekst=g1+" / "+g2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

 
window.addEventListener('load', setup, false);

















