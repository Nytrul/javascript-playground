//sometimes you want to ask if the string matches the format

//Two parts:
// - Create expression
// - Apply and ask if it matches

//Create regular expression
var myRE = /hello/;

//or
var myRE = new RegExp("hello");
var myString = "Does this sentence have the word hello in it?";
if ( myRE.test(myString))
{
	alert("Yes");
}

//Creating Pattterns
var myRE = /^hello/; 		 // ^ hello has to be at the start
		   /hello$/; 		 // & hello at the end
		   /hel+o/;  		 // + l has to appear once or more times
		// "helo", "hello", "helllllo"
		   /hel*o/;  		 // * l has to appear zero or more times
		// "helo", "hello", "helllllo"
		   /hel?o/;  		 // ? l has to appear zero or one times
		   /hello|goodbye/;  // either|or
		   /he..o/;			 // . any character
		   /\wello/;		 // \w alphanumeric or _
		   /\bhello/;		 // \b word boundary
		   /[crnld]ope/;	 // [...] range of chars
		   
/^[0-9]{5}(?:-[0-9]{4})?$/
// example of a US zip code with an optional 4-digit extension

/^[a-zA-Z0-9._-]+@9a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/
// example for an email address