console.clear();
console.log("running");

const textButton = document.querySelector('[data-js="card-text-button"]');
const picButton = document.querySelector('[data-js="card-pic-button"]');
const answer = document.querySelector('[data-js="card-answer"]');

textButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

// picButton.addEventListener("click", toggleBookmarkButton);
