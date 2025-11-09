const progress = document.querySelector(".card__progress");
const questionParagraph = document.querySelector(".card__q");
const prev = document.querySelector(".buttons .prev");
const show = document.querySelector(".buttons .show");
const next = document.querySelector(".buttons .next");
const cards = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is the combination of a function and the lexical environment within which that function was declared.",
  },
  {
    id: 2,
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer:
      "'var' is function-scoped, while 'let' and 'const' are block-scoped. 'const' variables cannot be reassigned.",
  },
  {
    id: 3,
    question: "What is the purpose of the 'this' keyword?",
    answer:
      "'this' refers to the object that is currently executing the function.",
  },
  {
    id: 4,
    question: "What is the difference between '==' and '==='?",
    answer:
      "'==' checks for value equality after type coercion, while '===' checks for both value and type equality.",
  },
  {
    id: 5,
    question: "Explain event bubbling in JavaScript.",
    answer:
      "Event bubbling means that an event starts from the deepest element and propagates up through its ancestors.",
  },
  {
    id: 6,
    question: "What is a promise in JavaScript?",
    answer:
      "A promise represents the eventual completion or failure of an asynchronous operation.",
  },
  {
    id: 7,
    question:
      "What are arrow functions and how do they differ from regular functions?",
    answer:
      "Arrow functions are shorter syntax for writing functions and do not have their own 'this' or 'arguments' binding.",
  },
  {
    id: 8,
    question: "What is 'hoisting' in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope before code execution.",
  },
  {
    id: 9,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code runs sequentially, blocking further execution until complete, while asynchronous code allows other operations to continue running.",
  },
  {
    id: 10,
    question: "What is the 'fetch' API used for?",
    answer:
      "The 'fetch' API is used to make network requests and handle responses using promises.",
  },
];
const state = { curr: 0, totalCards: cards.length };
function showAnsewr() {
  const question = cards[state.curr].question;
  const answer = cards[state.curr].answer;

  if (show.dataset.show === "question") {
    questionParagraph.textContent = question;
    show.textContent = "show Answer";
  } else {
    questionParagraph.textContent = answer;
    show.textContent = "show Question";
  }
  progressBar();
}
function progressBar() {
  const total = progress.querySelector(".total");
  const precentage = progress.querySelector(".precentage");
  const background = progress.querySelector(".background");
  const perce = ((state.curr + 1) / state.totalCards) * 100;
  total.textContent = `${state.curr + 1} of ${state.totalCards}`;
  precentage.textContent = `${perce}%`;
  background.style.width = perce + "%";
  precentage.style.left = `${perce >= 80 ? 0 : perce}%`;
}
function toggleButtonText() {
  if (show.dataset.show === "question") {
    show.dataset.show = "answer";
  } else {
    show.dataset.show = "question";
  }
}
function nextCard() {
  if (state.curr >= state.totalCards - 1) return;
  state.curr++;
  showAnsewr();
}
function previousCard() {
  if (state.curr === 0) return;
  state.curr--;
  showAnsewr();
}
prev.addEventListener("click", previousCard);
next.addEventListener("click", nextCard);
show.addEventListener("click", () => {
  toggleButtonText();
  showAnsewr();
});
window.addEventListener("load", showAnsewr);
