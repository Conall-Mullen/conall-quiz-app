console.clear();
console.log("running");

const textButton = document.querySelector('[data-js="card-text-button"]');
const picButton = document.querySelector('[data-js="card-pic-button"]');
const picButtonImage = document.querySelector(
  '[data-js="card-pic-button-image"]'
);
const answer = document.querySelector('[data-js="card-answer"]');

function toggleAnswerButton() {
  answer.classList.toggle("hidden"); //toggles the class "hidden" for the answer element which hides/reveals the text
  // console.log(answer.classList);
  answer.classList[1] == undefined //only when the class "hidden" appears in the answer element will the button show "reveal answer"
    ? (textButton.textContent = "Hide answer")
    : (textButton.textContent = "Reveal answer");
}

function togglePicButton() {
  if (picButtonImage.alt == "a bookmark icon") {
    picButtonImage.setAttribute("src", "resources/bookmark_filled.png");
    picButtonImage.setAttribute("alt", "a filled bookmark icon");
  } else {
    picButtonImage.setAttribute("src", "resources/bookmark_transparent.png");
    picButtonImage.setAttribute("alt", "a bookmark icon");
  }
}

textButton.addEventListener("click", toggleAnswerButton);
picButton.addEventListener("click", togglePicButton);
