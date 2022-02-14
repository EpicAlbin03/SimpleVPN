"use strict";
const helpText = document.getElementById("helpText");
function myFunction(x) {
    if (x.matches) {
        // If media query matches
        helpText.innerHTML = "How can we help?";
    }
    else {
        helpText.innerHTML = "How can we help you?";
    }
}
var x = window.matchMedia("(max-width: 992px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
