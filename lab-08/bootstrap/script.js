const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  const html = document.documentElement;
  if (html.dataset.bsTheme === "dark") {
    html.dataset.bsTheme = "light";
    themeBtn.textContent = "Харанхуй горим";
  } else {
    html.dataset.bsTheme = "dark";
    themeBtn.textContent = "Цайвар горим";
  }
});

const form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});
