const button = document.getElementById("button");

const submitB = document.getElementById("submit");
let title = document.getElementById("title");
let textbox = document.getElementById("textbox");
let username = "placeholderuser"

submitB.onclick = () => {
  title.innerHTML = textbox.value;
}

button.onclick = () => {
  console.log("the butt")
}
