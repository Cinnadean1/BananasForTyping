const button = document.getElementById("button");
let bananas = 0;

const submitB = document.getElementById("submit");
let title = document.getElementById("title");
let textbox = document.getElementById("textbox");
let username = "placeholderuser"

submitB.onclick = () => {
  title.innerHTML = textbox.value;
}

button.onclick = () => {
  console.log("banana");
  bananas = bananas + 1;
}
