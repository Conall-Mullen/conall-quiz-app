console.clear();
console.log("running");

const formMain = document.querySelector('[data-js="formMain"]');
const form = document.querySelector('[data-js="form"]');
const formSubmitButton = document.querySelector(
  '[data-js="form-submit-button"]'
);

const newCard = document.createElement("section");
const newQuestion = document.createElement("p");
const newAnswerButton = document.createElement("section");
const newAnswer = document.createElement("p");
const newTags = document.createElement("p");
const newBookmarkButton = document.createElement("a");
const newBookmarkPic = document.createElement("img");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});
