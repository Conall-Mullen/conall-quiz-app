console.clear();
console.log("running");

const formMain = document.querySelector('[data-js="form-main"]'); //The main section of the html
const form = document.querySelector('[data-js="form"]'); //The form
const formSubmitButton = document.querySelector(
  '[data-js="form-submit-button"]'
);
const formQuestionInput = document.querySelector('[data-js="question-input"]');
const formAnswerInput = document.querySelector('[data-js="answer-input"]');

const questionCharacterCount = document.querySelector(
  '[data-js="question-character-count"]'
);
const answerCharacterCount = document.querySelector(
  '[data-js="answer-character-count"]'
);
let count = 0;

function addNewQuestion(event) {
  event.preventDefault(); //Prevents page from refreshing when submit is clicked

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData); //get readable data about from the form when submitted
  console.log(data);

  /* All new elements must be declared in the function so that a new card is generated each time*/

  const newCardSection = document.createElement("section");
  newCardSection.classList.add("card-section");

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const newQuestion = document.createElement("p");
  newQuestion.textContent = data["your-question"];
  newQuestion.classList.add("card__question");

  const newAnswerButton = document.createElement("a");
  newAnswerButton.textContent = "Reveal Answer";
  newAnswerButton.classList.add("card__text-button");
  newAnswerButton.id = `new-answer-button-${count}`;

  const newAnswer = document.createElement("p");
  newAnswer.textContent = data["your-answer"];
  newAnswer.classList.add("card__answer");
  newAnswer.id = `new-answer-${count}`;

  const newTags = document.createElement("p");
  newTags.textContent = data["your-tags"];
  newTags.classList.add("card__hashtags");

  const newBookmarkButton = document.createElement("a");
  newBookmarkButton.classList.add("card__pic-button");

  const newBookmarkPic = document.createElement("img");
  newBookmarkPic.classList.add("icon");
  newBookmarkPic.setAttribute("src", "icons/bookmark.svg");
  newBookmarkPic.setAttribute("alt", "a bookmark icon");
  newBookmarkPic.id = `new-bookmark-button-${count}`;

  formMain.append(newCard); //append new card to main section

  newCard.append(
    //append all children of card to card
    newQuestion,
    newAnswerButton,
    newAnswer,
    newTags,
    newBookmarkButton
  );

  newBookmarkButton.append(newBookmarkPic); //appened picture to button
  form.reset();
  questionCharacterCount.textContent = `${formQuestionInput.maxLength} characters remaining`;
  answerCharacterCount.textContent = `${formAnswerInput.maxLength} characters remaining`;

  count++;
}
form.addEventListener("submit", addNewQuestion); //Executes addNewQuestion when submit button is clicked

formQuestionInput.addEventListener("input", (event) => {
  let maxLength = event.target.maxLength;
  let count = event.target.value.length;
  let remainingCharacters = maxLength - count;
  questionCharacterCount.textContent = `${remainingCharacters} characters remaining`;
});

formAnswerInput.addEventListener("input", (event) => {
  let maxLength = event.target.maxLength;
  let count = event.target.value.length;
  let remainingCharacters = maxLength - count;

  answerCharacterCount.textContent = `${remainingCharacters} characters remaining`;
});

formMain.addEventListener("click", (event) => {
  if (event.target.classList.contains("icon")) {
    if (event.target.alt == "a bookmark icon") {
      event.target.setAttribute("src", "icons/bookmark_filled.svg");
      event.target.setAttribute("alt", "a filled bookmark icon");
    } else {
      event.target.setAttribute("src", "icons/bookmark.svg");
      event.target.setAttribute("alt", "a bookmark icon");
    }
  }
});
// function characterCount(event) {
//   let maxLength = event.target.maxLength;
//   let count = event.target.value.length;
//   let remainingCharacters = maxLength - count;

//   console.log(remainingCharacters);
//   return remainingCharacters;
// }

// formQuestionInput.addEventListener("input", characterCount);
// formAnswerInput.addEventListener("input", characterCount);
