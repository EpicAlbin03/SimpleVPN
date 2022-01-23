window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar")!;
  if (window.scrollY == 0) {
    nav.style.backgroundColor = "";
  } else {
    nav.style.backgroundColor = "white";
  }
});
