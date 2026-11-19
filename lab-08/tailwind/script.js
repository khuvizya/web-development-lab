const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  themeBtn.textContent = isDark ? "Цайвар горим" : "Харанхуй горим";
});

const form = document.getElementById("form");
const fields = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (event) {
  let allValid = true;
  fields.forEach(function (field) {
    const message = field.nextElementSibling;
    if (field.checkValidity()) {
      message.classList.add("hidden");
      field.classList.remove("border-red-500");
    } else {
      message.classList.remove("hidden");
      field.classList.add("border-red-500");
      allValid = false;
    }
  });
  if (!allValid) {
    event.preventDefault();
  }
});
