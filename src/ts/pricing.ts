const oneMonth = document.getElementById("oneMonth") as HTMLAnchorElement;
const sixMonths = document.getElementById("sixMonths") as HTMLAnchorElement;
const twelveMonths = document.getElementById("twelveMonths") as HTMLAnchorElement;

oneMonth.addEventListener("click", function () {
    localStorage.plan = "oneMonth";
});

sixMonths.addEventListener("click", function () {
    localStorage.plan = "sixMonths";
});

twelveMonths.addEventListener("click", function () {
    localStorage.plan = "twelveMonths";
});