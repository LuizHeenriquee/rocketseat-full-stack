const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  console.log(amount.value);
});