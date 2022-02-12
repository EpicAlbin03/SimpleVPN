"use strict";
const oneMonth = document.getElementById("oneMonth");
const sixMonths = document.getElementById("sixMonths");
const twelveMonths = document.getElementById("twelveMonths");
oneMonth.addEventListener("click", function () {
    localStorage.plan = "oneMonth";
});
sixMonths.addEventListener("click", function () {
    localStorage.plan = "sixMonths";
});
twelveMonths.addEventListener("click", function () {
    localStorage.plan = "twelveMonths";
});
