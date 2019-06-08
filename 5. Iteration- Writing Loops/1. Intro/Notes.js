//Iterations AKA loops

//While loop
var a = 1;

/*if replaced with*/while (a < 10)
{
	alert(a); //this becomes an infinite loop
}
---------------------------------------------------------------
var a = 1;

/*if replaced with*/while (a < 10)
{
	alert(a);
	a++; //eventually a will not be < 10, jumping out of the loop
}
