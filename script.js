const button = document.getElementById("button");
const submitB = document.getElementById("submit");
const title = document.getElementById("title");
const textbox = document.getElementById("textbox");

submitB.onclick = () => {
  title.innerHTML = textbox;
}

button.onclick = () => {
  console.log("the butt")
}
