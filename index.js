// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "cornflowerblue";
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
document.body.style.backgroundColor="white"
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
const keyPressDisplay=document.getElementById('keyPressDisplay');
keyPressDisplay.textContent=`You pressed ${event.key}`
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInputDisplay=document.getElementById('textInputDisplay')
  const textInput=document.getElementById('textInput')
  textInputDisplay.textContent=textInput.value
  // Implement the function to display user input
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);
});

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById("resetColorButton")
  .addEventListener("dblclick", resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener("keydown", displayKeyPress);

// Attach event listener to display user input in real-time as they type
document
  .getElementById("textInput")
  .addEventListener("input", displayUserInput);
