function validateName(value) {
  const name = value.trim();
  if (name.length === 0) {
    return { valid: false, message: "Нэр хоосон байна." };
  }
  if (name.length < 2 || name.length > 50) {
    return { valid: false, message: "Нэр 2-50 тэмдэгт байна." };
  }
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return { valid: false, message: "Нэр тоо агуулж болохгүй." };
    }
  }
  return { valid: true, message: "" };
}

function validateEmail(value) {
  if (value.length === 0) {
    return { valid: false, message: "Имэйл хоосон байна." };
  }
  if (value.indexOf(" ") !== -1) {
    return { valid: false, message: "Имэйл зай агуулж болохгүй." };
  }
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!pattern.test(value)) {
    return { valid: false, message: "Имэйл нэр@домэйн.өргөтгөл хэлбэртэй байна." };
  }
  return { valid: true, message: "" };
}

function validatePassword(value) {
  if (value.length < 8) {
    return { valid: false, message: "Нууц үг дор хаяж 8 тэмдэгт байна." };
  }
  if (value.indexOf(" ") !== -1) {
    return { valid: false, message: "Нууц үг зай агуулж болохгүй." };
  }
  if (!/[A-Za-zА-Яа-яӨөҮүЁё]/.test(value)) {
    return { valid: false, message: "Нууц үг үсэг агуулна." };
  }
  if (!/[0-9]/.test(value)) {
    return { valid: false, message: "Нууц үг тоо агуулна." };
  }
  return { valid: true, message: "" };
}

function validateMessage(value) {
  const text = value.trim();
  if (text.length < 10 || text.length > 500) {
    return { valid: false, message: "Санал 10-500 тэмдэгт байна." };
  }
  return { valid: true, message: "" };
}

if (typeof module !== "undefined") {
  module.exports = { validateName, validateEmail, validatePassword, validateMessage };
}
