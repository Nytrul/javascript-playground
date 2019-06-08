//Variable Scope
function simpleFunction()
{
	//lots of code
	var x = 500; //If var is used to define a variable within a function, that variable is only available within the function
				 //If variable is used outside of the function will be undefined.
				 //Variables defined outside the function can be used inside functions,
				 //but when defining a variable inside a function that has the same name, be careful not to use var
	//lots of code
	alert(x);
}