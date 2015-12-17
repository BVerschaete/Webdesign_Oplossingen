// JavaScript Document Frisdrankautomaat
const prijs=0.60;


var setup = function ()
{
    document.getElementById("drpDranken").addEventListener('click', wis, true);
	document.getElementById("btnCent20").addEventListener('click',berekenbedrag,true);	
	document.getElementById("btnCent5").addEventListener('click',berekenbedrag,true);
	document.getElementById("btnOk").addEventListener('click', afrekening, true);


}

var berekenbedrag = function(event)
{
	var totaal;
	totaal=parseFloat(document.getElementById("txtBedrag").value)+parseFloat(event.target.value);
	totaal = Math.round(totaal*100)/100;
	document.getElementById("txtBedrag").value=totaal;
}

 var wis = function()
	{
	document.getElementById("txtBedrag").value=0;
	document.getElementById("txtTerug").value=0;
	document.getElementById("txtFrisdrank").value=" ";
	}
	
var afrekening= function ()
{
	var totaal, teruggave; 
	totaal=document.getElementById("txtBedrag").value;
	if(totaal >= prijs)
	{
	 document.getElementById("txtFrisdrank").value = document.getElementById("drpDranken").value;
	  teruggave=totaal-prijs;
	  teruggave=Math.round(teruggave*100)/100;
	  document.getElementById("txtTerug").value=teruggave;
	}
	else
	{
	  alert("te weinig geld!");
	}
}

window.addEventListener('load', setup, true);