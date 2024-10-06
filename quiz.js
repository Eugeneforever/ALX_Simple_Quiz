// document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// // Function to handle form submission
// function checkAnswer() {
//   // Function body
//   const correctAnswer = "4";
//   const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
//   if (selectedAnswer == undefined) {
//     alert("Please enter an answer!");
//     return;
//   }
//   const userAnswer = selectedAnswer.value;
//   const feedback = document.getElementById("feedback");
//   if (userAnswer === correctAnswer) {
//     feedback.textContent = "Correct! Well done.";
//     feedback.style.color = "green";
//   } else {
//     feedback.textContent = "That's incorrect. Try again";
//     feedback.style.color = "red";
//   }
//   console.log(userAnswer);
// }

function checkAnswer() {
  // Function body
  const correctAnswer = "4";

  const userAnswer = document.querySelector ('input[name="quiz"]:checked').value;
  const feedback = document.getElementById("feedback");
  //compare the user's answer with the correct answer

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
//   console.log(userAnswer);
}

//Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
