//here's a basic calculator without any CSS
//I learned about this idea through a YouTube tutorial

var a, b;

function setValues() {
	a = Number(document.getElementByID("a").value) //the reason it's incased in Number(), is because Number() converts the string (userinput) to a number
	b = Number(document.getElementByID("b").value)
}

function sum(a, b) {
	var result = a+b;
	alert("The result is: " + result + "!");
}

function sub(a, b) {
	var result = a-b;
	alert("The result is: " + result + "!");
}

function mult(a, b) {
	var result = a*b;
	alert("The result is: " + result + "!");
}

function div(a, b) {
	var result = a/b;
	alert("The result is: " + result + "!");
}

//returns a by the exponent of b
function expon(a, b) { 
	var count = a;
	for(var i = 0; i < b-1; i++) {
		count = count * a;
	}
	alert("The result is" + count + "!");
}