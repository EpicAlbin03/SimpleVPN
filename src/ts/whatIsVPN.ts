const reveal = document.getElementsByClassName("reveal");
const revealText = document.getElementsByClassName("revealText");

for (let i = 0; i < reveal.length; i++) {
  reveal[i].addEventListener("click", function () {
    if (revealText[i].classList.contains("d-none")) {
      revealText[i].classList.remove("d-none");
      reveal[i].setAttribute("style", "border-color: #1879c0 !important");
      reveal[i].children[0].setAttribute("style", "color: black !important");
      for (let j = 0; j < revealText.length; j++) {
        if (j !== i) {
          revealText[j].classList.add("d-none");
          reveal[j].setAttribute("style", "border-color: #DEE2E6 !important");
          reveal[j].children[0].setAttribute("style", "color: #6c757d !important");
        }
      }
    } else {
      revealText[i].classList.add("d-none");
      reveal[i].setAttribute("style", "border-color: #DEE2E6 !important");
      reveal[i].children[0].setAttribute("style", "color: #6c757d !important");
    }
  });
}
