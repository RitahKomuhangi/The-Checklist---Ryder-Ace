document.addEventListener("DOMContentLoaded", function () {

// Point Groups
let points = 0; // Keeps track of total points
let pointsDisplay = document.getElementById("points");

// Function to add points 
function addPoint() {
  points++; // Increases point by 1
  pointsDisplay.textContent = points; // Updates display
}

// Function to subtract points 
function subPoint() {
  points--; // Decreases point by 1
  pointsDisplay.textContent = points; // Updates display
}

// Button Groups
let btns = document.querySelectorAll(".btn"); // Selects all buttons with class .btn

btns.forEach(function (button) {
  button.onclick = function () {

    // Toggles class and updates points
    if (this.classList.contains("selected1")) {
        this.classList.remove("selected1");  // Deselects
        subPoint(); // Subtracts point
      } else {
        this.classList.add("selected1"); // Selects
        addPoint(); // Adds point
      }
    };
});

let btns1 = document.querySelectorAll(".btn1"); // Selects all buttons with class .btn1

btns1.forEach(function (button) {
  button.onclick = function () {
    // Toggles class and updates points
    if (this.classList.contains("selected2")) { 
        this.classList.remove("selected2");  // Deselects
        subPoint(); // Subtracts point
      } else {
        this.classList.add("selected2"); // Selects
        addPoint(); // Adds point
      }
    };
});

let btns2 = document.querySelectorAll(".btn2"); // Selects all buttons with class .btn2

  btns2.forEach(function (button) {
  button.onclick = function () {
      // Toggles class and updates points
     if (this.classList.contains("selected3")) {
        this.classList.remove("selected3");  // Deselects
        subPoint(); // Subtracts point
      } else {
        this.classList.add("selected3"); // Selects
        addPoint(); // Adds point
      }
    };
});

// RESET BUTTON 
let resetBtn = document.getElementById("reset"); // Gets the reset button by id

resetBtn.onclick = function () {
  points = 0;  // Resets points to zero
  pointsDisplay.textContent = points; // Updates Display

 // Removes selected class from all button groups
 btns.forEach(function (btn) {
    btn.classList.remove("selected1");
  });

  btns1.forEach(function (btn) {
    btn.classList.remove("selected2");
  });

  btns2.forEach(function (btn) {
    btn.classList.remove("selected3");
  });
};
});