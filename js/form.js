var email = document.getElementById("email-field");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Uhhhh... I need your email haha");
  } else {
    email.setCustomValidity("");
  }
});