const nav = document.getElementById("navbar")!;
let navDropdownActive = false as boolean;

// Change background of nav to white when user scrolls for the first time
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.style.backgroundColor = "";
  } else {
    nav.style.backgroundColor = "white";
  }
});

document.getElementById("navDropdown")?.addEventListener("click", () => {
  if (!navDropdownActive) {
    navDropdownActive = true;
    document.body.style.overflowY = "hidden";
    nav.style.backgroundColor = "white";
  } else {
    navDropdownActive = false;
    document.body.style.overflowY = "";
    if (window.scrollY === 0) {
      nav.style.backgroundColor = "";
    } else {
      nav.style.backgroundColor = "white";
    }
  }
});

window.addEventListener("load", () => {
  if (window.scrollY === 0) {
    nav.style.backgroundColor = "";
  } else {
    nav.style.backgroundColor = "white";
  }
});
