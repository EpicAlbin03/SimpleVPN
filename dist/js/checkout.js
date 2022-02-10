"use strict";
const chevron = document.getElementsByClassName("bi");
const dropdown = document.getElementsByClassName("dropdown");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("show.bs.dropdown", function () {
        chevron[i].className = "bi bi-chevron-down float-end";
    });
    dropdown[i].addEventListener("hide.bs.dropdown", function () {
        chevron[i].className = "bi bi-chevron-right float-end";
    });
}
