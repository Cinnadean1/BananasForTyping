const insert = document.getElementById("insert");
const number = document.getElementById("number");

const button = document.getElementById("bananaB");
const count = document.getElementById("count");
let bananas = 0;

const submitB = document.getElementById("submit");
let title = document.getElementById("title");
let textbox = document.getElementById("textbox");
let username = "placeholderuser"

insert.onclick = () => {
  bananas = number.value;
  count.innerHTML = bananas;
}

submitB.onclick = () => {
  title.innerHTML = textbox.value;
}

button.onclick = () => {
  console.log("banana");
  bananas = bananas + 1;
  count.innerHTML = bananas;
}
