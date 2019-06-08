if (a==b)
{
	//execute this code
}
//if you use a single equal sign, it will be executed as an assignment
// =  assignment
// == equality
// === strict equality

var a = 123;
var b = "123";

//equality check
if (a == b) // if using "===", the strict equality sign takes into consideration variable types
{
	alert("Yes, they ARE equal");
}
else
{
	alert("No, they're NOT equal");
}

//and/or
if (a === b /*and, which is written as*/ && c === d) //{ ...
if (a === b /*or, which is written as*/ || c === d) //{ ...
//Sometimes things can get complicated so a seperated layout might be necessary for ease, such as:
if (
		( a > b )
			&&
		( c > d )
	)
	//{...