"use strict";

// Document Selectors

const ratingContainer = document.querySelector(".rating-number-container");
const ratings = document.querySelectorAll(".rating-numbers-ul");
const ratingNumbers = document.querySelectorAll(".rating-numbers");
const thankuRating = document.querySelector(".thanku-selection");
const thankuContainer = document.querySelector(".thanku-container");
const ratingButtonContainer = document.querySelector(
  ".rating-button-container"
);
const ratingButton = document.querySelector(".rating-button");

ratingContainer.addEventListener("click", function (e) {
  // SECTION 1 Below code resets the numbers styles to "" so you can select another number, and deselect the currently selected number (If there is one)
  const items = document.getElementsByClassName("rating-numbers");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "";
    items[i].style.color = "";
  }

  // Section 2 Below code selects the corespondind li that was clicked, and gets the number from the data attribute
  const clicked = e.target.closest(".rating-numbers");
  const number = clicked.dataset.number;

  // Section 3 Below changes the current text content of the thank you card to include the number the user chose
  thankuRating.textContent = `You selected ${number} out of 5`;

  // Section 4 Below  changes the color of the clicked number
  clicked.style.backgroundColor = "#7C8798";
  clicked.style.color = "#FFF";
});

// Below code removes the hidden attribute from the Thank You Card Container allowing it to show on the screen
ratingButton.addEventListener("click", function (e) {
  thankuContainer.classList.remove("hidden");
});
