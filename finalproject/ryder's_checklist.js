document.addEventListener("DOMContentLoaded", function () {

// Variables
let points = 0; // Keeps track of total points
let pointsDisplay = document.getElementById("points"); // Points display element
let currentTimeDisplay = document.getElementById("current-time") // Shows current time of day

// POINT TRACKING FUNCTIONS
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

// HELPER FUNCTIONS
// Function to get current time of day
function getTimeOfDay(){
  var hour = new Date().getHours(); // Gets current hour

  if (hour >= 5 && hour < 12) {
    return "Morning"; // 5am to 11:59am
  } else if (hour >= 12 && hour < 18) {
    return "Afternoon"; // 12pm to 5:59pm
  }else{
    return "Evening"; // 6pm to 4:59am
  }
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

let time = getTimeOfDay();

// Grabs all three containers from the HTML
let morningContainer = document.querySelector(".container1");
let afternoonContainer = document.querySelector(".container2");
let eveningContainer = document.querySelector(".container3");

// Hides all three containers completely
morningContainer.style.display = "none";
afternoonContainer.style.display = "none";
eveningContainer.style.display = "none";

if (time === "Morning"){
  morningContainer.style.display = "block";
} else if (time === "Afternoon") {
  afternoonContainer.style.display = "block";
} else if (time === "Evening") {
  eveningContainer.style.display = "block";
}

// Function to check for completed tasks in .json
let activites = document.querySelectorAll(".activity"); // Grabs all the activity blocks on the HTML Page 

// Loops through them one by one
activites.forEach(function (activityBlock){
  let activityName = activityBlock.querySelector("h2").textContent.trim(); // Gets the text inside the Heading Tag
  let taskButton = activityBlock.querySelector("button"); // Finds the button inside this block

  // Checks if the python data array includes this activity name
  if (completedTasks.includes(activityName)) {

    //Matches the button type to add the right color
    if (taskButton.classList.contains("btn")) {
      taskButton.classList.add("selected1");
    }else if (taskButton.classList.contains("btn1")) {
      taskButton.classList.add("selected2");
    }else if (taskButton.classList.contains("btn2")){
      taskButton.classList.add("selected3");
    }

    addPoint(); // Adds the point to the score display
  }
})
});