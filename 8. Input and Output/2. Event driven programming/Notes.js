// Event handlers = function that is waiting to happen
/*
onload
onclick
onmouseover
onblur
onfocus
*/
element.event = 
// example:
window.onload
nameField.onblur

//commmon one
myelement.onclick = function() {
	// your event handler code
	// ...
	// ...
};

//example click on headline changes it
var headline = document.getELementById("mainHeading");

headline.onclick = function() {
		headline.innerHTML = "You clicked the headline.";
};