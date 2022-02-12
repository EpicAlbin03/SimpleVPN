// changing plan and price depending on what button was clicked in pricing.html
const plan = document.getElementById("plan") as HTMLParagraphElement;
const total = document.getElementById("total") as HTMLDivElement;
if (localStorage.plan === "oneMonth") {
  plan.innerHTML = "1-month plan ($12.99/mo)";
  total.innerHTML = "$12.99";
} else if (localStorage.plan === "sixMonths") {
  plan.innerHTML = "6-month plan ($9.99/mo)";
  total.innerHTML = "$9.99";
} else if (localStorage.plan === "twelveMonths") {
  plan.innerHTML = "12-month plan ($7.99/mo)";
  total.innerHTML = "$7.99";
}

// changes chevron-icon on dropdown-show
const chevron = document.getElementsByClassName("bi");
const dropdown = document.getElementsByClassName("dropdown");
for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("show.bs.dropdown", function () {
    chevron[i].className = "bi bi-chevron-down float-end fs-5";
  });

  dropdown[i].addEventListener("hide.bs.dropdown", function () {
    chevron[i].className = "bi bi-chevron-right float-end fs-5";
  });
}

// prevents form from closing on submit button click
const form = document.getElementById("form") as HTMLFormElement;
function handleForm(event: Event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// checks for invalid-feedback
const email = document.getElementById("email") as HTMLInputElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const lastName = document.getElementById("lastName") as HTMLInputElement;
const creditCard = document.getElementById("creditCard") as HTMLInputElement;
const expiryDate = document.getElementById("expiryDate") as HTMLInputElement;
const cvc = document.getElementById("cvc") as HTMLInputElement;
const zip = document.getElementById("zip") as HTMLInputElement;
const country = document.getElementById("country") as HTMLInputElement;
const invalidEmail = document.getElementById("invalidEmail");
const invalidFirstName = document.getElementById("invalidFirstName");
const invalidLastName = document.getElementById("invalidLastName");
const invalidCreditCard = document.getElementById("invalidCreditCard");
const invalidExpiryDate = document.getElementById("invalidExpiryDate");
const invalidCVC = document.getElementById("invalidCVC");
const invalidZip = document.getElementById("invalidZip");
const invalidCountry = document.getElementById("invalidCountry");
const danger = "#DC3545" as string;

// on submit
document.getElementById("btnSubmit")?.addEventListener("click", function () {
  if (email.value === "") {
    invalidEmail!.innerHTML = "Enter email";
    invalidEmail!.style.display = "block";
    email.style.borderColor = danger;
  }
  if (firstName.value === "") {
    invalidFirstName!.style.display = "block";
    firstName.style.borderColor = danger;
  }
  if (lastName.value === "") {
    invalidLastName!.style.display = "block";
    lastName.style.borderColor = danger;
  }
  if (creditCard.value === "") {
    invalidCreditCard!.innerHTML = "Enter a credit card number";
    invalidCreditCard!.style.display = "block";
    creditCard.style.borderColor = danger;
  }
  if (expiryDate.value === "") {
    invalidExpiryDate!.innerHTML = "Enter expiry date";
    invalidExpiryDate!.style.display = "block";
    expiryDate.style.borderColor = danger;
  }
  if (cvc.value === "") {
    invalidCVC!.innerHTML = "Enter CVC";
    invalidCVC!.style.display = "block";
    cvc.style.borderColor = danger;
  }
  if (country.value === "Choose...") {
    invalidCountry!.innerHTML = "Please select a valid country";
    invalidCountry!.style.display = "block";
    country.style.borderColor = danger;
  }
});

// email
let emailChange = false as boolean;
email.addEventListener("focusout", function () {
  if (email.value === "") {
    invalidEmail!.innerHTML = "Enter email";
    invalidEmail!.style.display = "block";
    email.style.borderColor = danger;
  } else if (emailIsValid(email.value)) {
    invalidEmail!.style.display = "none";
    email.style.borderColor = "";
  } else {
    invalidEmail!.innerHTML = "Invalid email adress";
    invalidEmail!.style.display = "block";
    email.style.borderColor = danger;
  }
  emailChange = true;
});

email.addEventListener("input", function () {
  if (emailChange) {
    if (email.value === "") {
      invalidEmail!.innerHTML = "Enter email";
      invalidEmail!.style.display = "block";
      email.style.borderColor = danger;
    } else if (emailIsValid(email.value)) {
      invalidEmail!.style.display = "none";
      email.style.borderColor = "";
    } else {
      invalidEmail!.innerHTML = "Invalid email adress";
      invalidEmail!.style.display = "block";
      email.style.borderColor = danger;
    }
  }
});

function emailIsValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// first name
let firstNameChange = false as boolean;
firstName.addEventListener("focusout", function () {
  if (firstName.value === "") {
    invalidFirstName!.style.display = "block";
    firstName.style.borderColor = danger;
  } else {
    invalidFirstName!.style.display = "none";
    firstName.style.borderColor = "";
  }
  firstNameChange = true;
});

firstName.addEventListener("input", function () {
  if (firstNameChange) {
    if (firstName.value === "") {
      invalidFirstName!.style.display = "block";
      firstName.style.borderColor = danger;
    } else {
      invalidFirstName!.style.display = "none";
      firstName.style.borderColor = "";
    }
  }
});

// last name
let lastNameChange = false as boolean;
lastName.addEventListener("focusout", function () {
  if (lastName.value === "") {
    invalidLastName!.style.display = "block";
    lastName.style.borderColor = danger;
  } else {
    invalidLastName!.style.display = "none";
    lastName.style.borderColor = "";
  }
  firstNameChange = true;
});

lastName.addEventListener("input", function () {
  if (firstNameChange) {
    if (lastName.value === "") {
      invalidLastName!.style.display = "block";
      lastName.style.borderColor = danger;
    } else {
      invalidLastName!.style.display = "none";
      lastName.style.borderColor = "";
    }
  }
});

//credit card
let creditCardChange = false as boolean;
creditCard.addEventListener("focusout", function () {
  if (creditCard.value === "") {
    invalidCreditCard!.innerHTML = "Enter a credit card number";
    invalidCreditCard!.style.display = "block";
    creditCard.style.borderColor = danger;
  } else if (
    americanExpress(creditCard.value) ||
    visa(creditCard.value) ||
    masterCard(creditCard.value) ||
    discoverCard(creditCard.value) ||
    dinersClub(creditCard.value) ||
    jcb(creditCard.value)
  ) {
    invalidCreditCard!.style.display = "none";
    creditCard.style.borderColor = "";
  } else {
    invalidCreditCard!.innerHTML = "Invalid credit card number";
    invalidCreditCard!.style.display = "block";
    creditCard.style.borderColor = danger;
  }
  creditCardChange = true;
});

creditCard.addEventListener("input", function () {
  // adds space every four chars
  creditCard.value = creditCard.value.replace(/\d{4}(?=.)/g, "$& ");

  if (creditCardChange) {
    if (creditCard.value === "") {
      invalidCreditCard!.innerHTML = "Enter a credit card number";
      invalidCreditCard!.style.display = "block";
      creditCard.style.borderColor = danger;
    } else if (
      americanExpress(creditCard.value) ||
      visa(creditCard.value) ||
      masterCard(creditCard.value) ||
      discoverCard(creditCard.value) ||
      dinersClub(creditCard.value) ||
      jcb(creditCard.value)
    ) {
      invalidCreditCard!.style.display = "none";
      creditCard.style.borderColor = "";
    } else {
      invalidCreditCard!.innerHTML = "Invalid credit card number";
      invalidCreditCard!.style.display = "block";
      creditCard.style.borderColor = danger;
    }
  }
});

function americanExpress(creditCard: string) {
  return /^(?:3[47][0-9]{13})$/.test(creditCard);
}

function visa(creditCard: string) {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(creditCard);
}

function masterCard(creditCard: string) {
  return /^(?:5[1-5][0-9]{14})$/.test(creditCard);
}

function discoverCard(creditCard: string) {
  return /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(creditCard);
}

function dinersClub(creditCard: string) {
  return /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(creditCard);
}

function jcb(creditCard: string) {
  return /^(?:(?:2131|1800|35\d{3})\d{11})$/.test(creditCard);
}

// expiry date
let expiryDateChange = false as boolean;
expiryDate.addEventListener("focusout", function () {
  if (expiryDate.value === "") {
    invalidExpiryDate!.innerHTML = "Enter expiry date";
    invalidExpiryDate!.style.display = "block";
    expiryDate.style.borderColor = danger;
  } else if (expiryDateIsValid(expiryDate.value)) {
    invalidExpiryDate!.style.display = "none";
    expiryDate.style.borderColor = "";
  } else {
    invalidExpiryDate!.innerHTML = "Invalid expiry date";
    invalidExpiryDate!.style.display = "block";
    expiryDate.style.borderColor = danger;
  }
  expiryDateChange = true;
});

expiryDate.addEventListener("input", function () {
  // adds slash
  expiryDate.value = expiryDate.value.replace(/\d{2}(?=.)/g, "$& / ");

  if (expiryDateChange) {
    if (expiryDate.value === "") {
      invalidExpiryDate!.innerHTML = "Enter expiry date";
      invalidExpiryDate!.style.display = "block";
      expiryDate.style.borderColor = danger;
    } else if (expiryDateIsValid(expiryDate.value)) {
      invalidExpiryDate!.style.display = "none";
      expiryDate.style.borderColor = "";
    } else {
      invalidExpiryDate!.innerHTML = "Invalid expiry date";
      invalidExpiryDate!.style.display = "block";
      expiryDate.style.borderColor = danger;
    }
  }
});

function expiryDateIsValid(date: string) {
  var today, someday;
  let exMonth = (date[0] + date[1]) as string;
  let exYear = ("20" + date[5] + date[6]) as string;
  today = new Date();
  someday = new Date();
  someday.setFullYear(parseInt(exYear), parseInt(exMonth), 1);
  console.log(today);
  console.log(someday);

  if (someday < today) return false;
  else return true;
}

//cvc
let cvcChange = false as boolean;
cvc.addEventListener("focusout", function () {
  if (cvc.value === "") {
    invalidCVC!.innerHTML = "Enter CVC";
    invalidCVC!.style.display = "block";
    cvc.style.borderColor = danger;
  } else if (cvc.value.length < 3) {
    invalidCVC!.innerHTML = "Invalid CVC";
    invalidCVC!.style.display = "block";
    cvc.style.borderColor = danger;
  } else {
    invalidCVC!.style.display = "none";
    cvc.style.borderColor = "";
  }
  cvcChange = true;
});

cvc.addEventListener("input", function () {
  if (cvcChange) {
    if (cvc.value === "") {
      invalidCVC!.innerHTML = "Enter CVC";
      invalidCVC!.style.display = "block";
      cvc.style.borderColor = danger;
    } else if (cvc.value.length < 3) {
      invalidCVC!.innerHTML = "Invalid CVC";
      invalidCVC!.style.display = "block";
      cvc.style.borderColor = danger;
    } else {
      invalidCVC!.style.display = "none";
      cvc.style.borderColor = "";
    }
  }
});

// zip
let zipChange = false as boolean;
zip.addEventListener("focusout", function () {
  if (zip.value === "" || zip.value.length === 5) {
    invalidZip!.style.display = "none";
    zip.style.borderColor = "";
  } else if (zip.value.length < 5) {
    invalidZip!.innerHTML = "Invalid ZIP / postal code";
    invalidZip!.style.display = "block";
    zip.style.borderColor = danger;
  }
  zipChange = true;
});

zip.addEventListener("input", function () {
  if (zipChange) {
    if (zip.value === "" || zip.value.length === 5) {
      invalidZip!.style.display = "none";
      zip.style.borderColor = "";
    } else if (zip.value.length < 5) {
      invalidZip!.innerHTML = "Invalid ZIP / postal code";
      invalidZip!.style.display = "block";
      zip.style.borderColor = danger;
    }
  }
});

// country
let countryChange = false as boolean;
country.addEventListener("focusout", function () {
  if (country.value === "Choose...") {
    invalidCountry!.innerHTML = "Please select a valid country";
    invalidCountry!.style.display = "block";
    country.style.borderColor = danger;
  } else {
    invalidCountry!.style.display = "none";
    country.style.borderColor = "";
  }
  countryChange = true;
});

country.addEventListener("input", function () {
  if (countryChange) {
    if (country.value === "Choose...") {
      invalidCountry!.innerHTML = "Please select a valid country";
      invalidCountry!.style.display = "block";
      country.style.borderColor = danger;
    } else {
      invalidCountry!.style.display = "none";
      country.style.borderColor = "";
    }
  }
});
