console.clear();
console.log("running");

const formMain = document.querySelector('[data-js="form-main"]'); //The main section of the html
const form = document.querySelector('[data-js="form"]'); //The form
const formSubmitButton = document.querySelector(
  '[data-js="form-submit-button"]'
);

function addNewQuestion(event) {
  event.preventDefault(); //Prevents page from refreshing when submit is clicked

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData); //get readable data about from the form when submitted
  console.log(data);

  /* All new elements must be declared in the function so that a new card is generated each time*/
  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const newQuestion = document.createElement("p");
  newQuestion.textContent = data["your-question"];
  newQuestion.classList.add("card__question");

  const newAnswerButton = document.createElement("section");
  newAnswerButton.textContent = "Reveal Answer";
  newAnswerButton.classList.add("card__text-button");

  const newAnswer = document.createElement("p");
  newAnswer.textContent = data["your-answer"];
  newAnswer.classList.add("card__answer");

  const newTags = document.createElement("p");
  newTags.textContent = data["your-tags"];
  newTags.classList.add("card__hashtags");

  const newBookmarkButton = document.createElement("a");
  newBookmarkButton.classList.add("card__pic-button");

  const newBookmarkPic = document.createElement("img");
  newBookmarkPic.classList.add("icon");
  newBookmarkPic.setAttribute("src", "resources/bookmark_transparent.png");
  newBookmarkPic.setAttribute("alt", "a bookmark icon");

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
}
form.addEventListener("submit", addNewQuestion); //Executes addNewQuestion when submit button is clicked
