const button = document.getElementById("button");
const submitB = document.getElementById("submit");
let title = document.getElementById("title");
let textbox = document.getElementById("textbox");

submitB.onclick = () => {
  title.innerHTML = textbox.innerHTML;
}

button.onclick = () => {
  console.log("the butt")
}
