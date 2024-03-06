const myImage = document.querySelector("img");


myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/firefox-icon.png") {
    myImage.setAttribute("src", "imagens/firefox2.png");
  } else {
    myImage.setAttribute("src", "imagens/firefox-icon.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}


myButton.onclick = () => {
  setUserName();
};

