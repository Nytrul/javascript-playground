//String Properties
var phrase = "This is a simple phrase.";
alert(phrase.length); //access the number of characters of the string
alert(phrase.toUpperCase()); //calling like a function

var str1 = "Hello";
var str2 = "hello";
//str1 != str2

if (str1.toLowerCase() == str2.toLowerCase())
{
	alert("Yes, equal");
}
//compares if the letters are the same by converting both to lower case for this comparison,
//thus ignoring the case sensitivity

var phrase = "We want a groovy keyword.";
var position = phrase.indexOf("groovy"); //10

//it returns -1 if the term is not found
//you can specify an action in case no results are found
if (phrase.index0f("DDDD") === -1)
{
	alert("That word does not occur.");
}

//there is also .lastINdexOf()

//String Methods - Slice
var phrase = "Yet another phrase.";

var segment = phrase.slice(6,11);
//This cuts out a piece of the string.

//Others
.substring()
.substr()

//String Comparison
var str1 = "aardvark";
var str2 = "beluga";

if (str1 < str2)
//{... //true

var str1 = "aardvark";
var str2 = "Beluga";

if (str1 < str2)
//{... //false
//Capitalized letters come first because of the way they're encoded
//Will have to convert toLowerCase to be able to compare alphabetical order.