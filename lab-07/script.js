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

const flipButtons = document.querySelectorAll(".flip__btn");

flipButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".flip");
    const flipped = card.classList.toggle("is-flipped");
    button.setAttribute("aria-pressed", String(flipped));
  });
});
