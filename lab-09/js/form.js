const form = document.getElementById("feedbackForm");
const result = document.getElementById("result");

const checks = [
  { id: "name", check: validateName },
  { id: "email", check: validateEmail },
  { id: "password", check: validatePassword },
  { id: "message", check: validateMessage }
];

function showError(id, text) {
  document.getElementById(id + "Error").textContent = text;
  document.getElementById(id).classList.toggle("invalid", text !== "");
}

checks.forEach(function (item) {
  document.getElementById(item.id).addEventListener("blur", function () {
    const answer = item.check(this.value);
    showError(item.id, answer.message);
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let allValid = true;

  checks.forEach(function (item) {
    const value = document.getElementById(item.id).value;
    const answer = item.check(value);
    showError(item.id, answer.message);
    if (!answer.valid) {
      allValid = false;
    }
  });

  if (allValid) {
    result.textContent = "Санал хүсэлт амжилттай илгээгдлээ!";
    result.className = "result ok";
    form.reset();
  } else {
    result.textContent = "Алдааг засаад дахин илгээнэ үү.";
    result.className = "result bad";
  }
});
