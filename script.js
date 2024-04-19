console.clear();
console.log("running");

const textButton = document.querySelector('[data-js="card-text-button"]');
const picButton = document.querySelector('[data-js="card-pic-button"]');
const picButtonImage = document.querySelector(
  '[data-js="card-pic-button-image"]'
);
const answer = document.querySelector('[data-js="card-answer"]');

function toggleAnswerButton() {
  answer.classList.toggle("hidden");
  //   console.log(answer.classList[1]);
  answer.classList[1] == undefined
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
