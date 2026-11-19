const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  const html = document.documentElement;
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    themeBtn.textContent = "Харанхуй горим";
  } else {
    html.dataset.theme = "dark";
    themeBtn.textContent = "Цайвар горим";
  }
});

const flipCards = document.querySelectorAll(".flip");

flipCards.forEach(function (card) {
  function toggle() {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  }

  card.addEventListener("click", toggle);

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
});
