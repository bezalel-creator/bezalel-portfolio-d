document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("input[name='email']");

  const errorMessage = document.createElement("p");
  errorMessage.style.color = "red";
  errorMessage.style.marginTop = "5px";
  errorMessage.style.fontSize = "0.9rem";
  emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);

  form.addEventListener("submit", function (e) {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      e.preventDefault();
      errorMessage.textContent = "Please enter a valid email address.";
      emailInput.style.border = "2px solid red";
    } else {
      errorMessage.textContent = "";
      emailInput.style.border = "2px solid green";
    }
  });
});
