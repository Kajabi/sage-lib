// ==================================================
// creation wizard payment dropdown
// ==================================================

const paymentDropdownClass = ".creation-payment-dropdown";
const paymentDropdown = document.querySelector(paymentDropdownClass);
const paymentOptions = paymentDropdown.querySelectorAll(".sage-dropdown__panel > .sage-panel__row");

document.addEventListener("DOMContentLoaded", function () {
  let paymentOptionSelected = document.querySelector(".creation-payment-selected.sage-panel__row");
  if (paymentOptionSelected !== null) {
    updateOption(paymentOptionSelected);
  }
});

paymentOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    updateSelected();
    updateOption(option);
  });
});

function updateSelected(option) {
  paymentOptions.forEach(function (option) {
    option.classList.remove("creation-payment-selected");
  });
}

function updateOption(option) {
  let name = option.querySelector(".t-sage-heading-6").innerText;
  let desc = option.querySelector(".t-sage-body > p").innerText;
  let icon = option.querySelector(".sage-icon-background").outerHTML;
  let screen = document.querySelector(".creation-payment-dropdown .sage-dropdown__screen");

  paymentDropdown.querySelector(".t-sage-heading-6").innerText = name;
  paymentDropdown.querySelector(".t-sage-body > p").innerText = desc;
  paymentDropdown.querySelector(".sage-icon-background").outerHTML = icon;

  option.classList.add("creation-payment-selected");
  screen.click();
}
