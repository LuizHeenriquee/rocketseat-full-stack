// Cotação de moedas do dia
const USD = 5.94;
const EUR = 6.27;
const GBP = 7.53;

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda
const convertCurrency = (amount, price, symbol) => {
  try {
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;
    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `R$${total}`;

    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter.");
  }
};

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
