const cardGroup = document.getElementsByClassName("cardGroup");

function myFunction(x: any) {
  if (x.matches) {
    // If media query matches
    for (let i = 0; i < cardGroup.length; i++) {
      cardGroup[i].classList.remove("row-cols-2");
      cardGroup[i].classList.add("row-cols-1");
    }
  } else {
    for (let i = 0; i < cardGroup.length; i++) {
      cardGroup[i].classList.add("row-cols-2");
      cardGroup[i].classList.remove("row-cols-1");
    }
  }
}

var x = window.matchMedia("(max-width: 310px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
