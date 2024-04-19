console.clear();
console.log("running");

const formMain = document.querySelector('[data-js="form-main"]');
const form = document.querySelector('[data-js="form"]');
const formSubmitButton = document.querySelector(
  '[data-js="form-submit-button"]'
);

function addNewQuestion(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

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

  formMain.append(newCard);
  newCard.append(
    newQuestion,
    newAnswerButton,
    newAnswer,
    newTags,
    newBookmarkButton
  );

  newBookmarkButton.append(newBookmarkPic);
}
form.addEventListener("submit", addNewQuestion);
