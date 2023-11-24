
//Declaring variables
let minutesInput = document.getElementById('minutesInput');
let secondsOutput = document.getElementById('secondsOutput');
let calButton = document.getElementById('calButton');

calButton.addEventListener('click', 

//Adding function
function minutesToSeconds() {
  let minutes = parseInt(minutesInput.value);

  //Adding validation
  if (!isNaN(minutes)) {
    let seconds = minutes * 60;
    secondsOutput.value = seconds;
  } else {
    alert('PLease enter a number');
  }
});