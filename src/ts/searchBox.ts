function autocomplete(inp : any, arr : any) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus : number;

  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function () {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists(null);
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);

    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          if (inp.value === "Blog") window.location.href = "../html/blog.html";
          else if (inp.value === "Contact Us") window.location.href = "../html/contactUs.html";
          else if (inp.value === "Features") window.location.href = "../html/home.html";
          else if (inp.value === "Plans & Pricing") window.location.href = "../html/pricing.html";
          else if (inp.value === "Refer a Friend") window.location.href = "../html/referFriend.html";
          else if (inp.value === "Support Center") window.location.href = "../html/supportCenter.html";
          else if (inp.value === "What is a VPN?") window.location.href = "../html/whatIsVPN.html";
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists(null);
        });
        a.appendChild(b);
      }
    }
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e : any) {
    var x = document.getElementById(this.id + "autocomplete-list") as any;
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x : any) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x : any) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt : any) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode?.removeChild(x[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

var pages = [
  "About Us",
  "Become a Partner",
  "Blog",
  "Careers",
  "Chrome",
  "Contact Us",
  "Digital Security Lab",
  "DNS Leak Test",
  "Edge",
  "FAQ",
  "Features",
  "Firefox",
  "Free Trial",
  "How-To-Privacy Guides",
  "Linux",
  "Log4j Vulnerability",
  "macOS",
  "Password Generator",
  "Privacy Policy",
  "Plans & Pricing",
  "Press",
  "Refer a Friend",
  "Reviews",
  "Routers",
  "Support Center",
  "Terms of Service",
  "Top 5 VPN Uses",
  "Tutorials",
  "WebRTC Leak Test",
  "What is a VPN?",
  "What is my IP?",
  "Windows",
];

autocomplete(document.getElementById("searchInput"), pages);
