var foo = 5;
var bar = 5;
alert(foo + bar); //10

var foo = "5";
var bar = "5";
alert(foo + bar); //55

//strings get priority in arguments are number values or number strings(cancatenation)

var foo = 5;
var bar = b;
alert(foo * bar); //NaN (Not a Number), can't multiply a number by a string

var foo = "55";
var myNumber = Number(foo); //make it a number

//checking if it's a number
if(isNaN(myNumber))
{
	alert("It IS a number");
} //will come back false if it is a number

//if you prefer to have the result be true if it's a number have:
if(isNaN(myNumber))
//be instead
if(!isNaN(myNumber))