//                    Whilds't defining variables, they are called parameters
function addTwoNumber(a,b)
{
		var result = a + b;
		return result; //passes information out of the function, ends the function
}
//            When calling, the values put into the placeholders for the variables are called arguments
var x = addTwoNumbers(5,10); //the value brought upon by the function would be stored in x
alert(x); //uses the value stored in the variable acquired when calling the function
//the remaining lines of code would then simply be computed, but nothing is done with the information
addTwoNumbers(500,100);
addTwoNumbers(7,-2323);