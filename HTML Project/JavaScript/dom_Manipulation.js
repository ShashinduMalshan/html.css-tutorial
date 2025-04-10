// Select all <h1> elements from the document
var h1_elements = document.getElementsByTagName("h1");

// Log the first <h1> element to the console
console.log(h1_elements[0]);

// Log the inner text of the first <h1> element
console.log(h1_elements[0].innerText); 

// Change the inner text of the first <h1> element
h1_elements[0].innerText = "Hello World.....";

// Change the inner text of the second <h1> element
h1_elements[1].innerText = "Hello Binu.....";

// Trying to change innerText with an HTML tag (won't render as HTML)
h1_elements[0].innerText = "<h2>Hello</h2>"; // Displays as plain text

// Correct way: Use innerHTML to render the HTML content
h1_elements[0].innerHTML = "<h2>Hello</h2>"; // Now the text appears as an <h2> element

// Select elements by ID
document.getElementById("subject1"); // Get the element with ID 'subject1'
document.getElementById("subject2"); // Get the element with ID 'subject2'
document.getElementById("subject3"); // Get the element with ID 'subject3'

// Change the text of the element with ID 'subject1'
subject1.innerText = "HTML brooo"; 

// Select elements by class name
let subject_elements = document.getElementsByClassName('mysub'); 

// Log the first and second elements with class 'mysub'
console.log(subject_elements[0]); 
console.log(subject_elements[1]);

// Change the text of the first element with class 'mysub'
subject_elements[0].innerText = "JS Brooo";

// Change the text and apply italic formatting using innerHTML
subject_elements[0].innerHTML = "<i>JS Brooo</i>";

// Select elements by name attribute
let mynames = document.getElementsByName("myname"); 

// Log the first element with name 'myname'
console.log(mynames[0]); 
console.log(mynames[0].innerText); // Log its text content
console.log(mynames[0].innerHTML); // Log its HTML content

// Change the text of the first element with name 'myname'
mynames[0].innerText = "Typescript";
