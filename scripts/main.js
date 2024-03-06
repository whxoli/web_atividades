const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `BT21 É INCRIVEL, ${myName}`;
  }
}


myButton.onclick = () => {
  setUserName();
};

