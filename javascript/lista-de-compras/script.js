const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");

input.addEventListener("input", () => {
  const inputRegex = /^[A-Za-zçÇ]+$/;

  if (!inputRegex.test(input.value)) {
    input.value = input.value.replace(/[^A-Za-zçÇ]/g, "");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addListItem(input.value);
});

const addListItem = () => {
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.appendChild(newItem);
};
