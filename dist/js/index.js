"use strict";
const nav = document.getElementById("navbar");
// Change background of nav to white when user scrolls for the first time
window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.backgroundColor = "";
    }
    else {
        nav.style.backgroundColor = "white";
    }
});
document.getElementById("navDropdown")?.addEventListener("click", () => {
    if (nav.style.backgroundColor == "white") {
        nav.style.backgroundColor = "";
        document.body.style.overflowY = "";
    }
    else {
        nav.style.backgroundColor = "white";
        document.body.style.overflowY = "hidden";
    }
});
