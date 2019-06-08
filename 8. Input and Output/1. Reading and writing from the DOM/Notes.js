// Document Object Model (DOM)
//  [Page] [Pieces][agreed-upon set of terms]

// agreed upon set of terms that represent pieces of a webpage or
// whatever material you're working with

id = "mainHeading"
// <h1 id = "mainHeading">Interesting Headline</h1>
// 		This will then define the named element

var headline = document.getElementById("mainHeading");
headline.innterHTML = "Wow, a new headline!";