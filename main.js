let topScreen = document.querySelector(".top-screen");
let mainScreen = document.querySelector(".main-screen");
let btnNumbers = document.querySelectorAll(".numbers");
let isCommaClicked = false;
let operands = document.querySelectorAll(".operand");

//variables to store the numbers
let firstNumber = undefined;
let secondNumber = 0;
let operandToExecute = undefined;
let resoult = 0;

//clear Button, clear the top and the main screen.
let ac = () => {
  topScreen.innerHTML = "";
  mainScreen.innerHTML = "0";
  isCommaClicked = false;
};

//adding event listener to the clear button to clear the screen
let btnAc = document.querySelector(".ac");
btnAc.addEventListener("click", ac);

//dispay the click numbers on the main screen
let displayNumbers = (btn) => {
  btn.addEventListener("click", () => {
    if (mainScreen.innerHTML == "0" && btn.innerHTML != 0) {
      mainScreen.innerHTML = "";
      mainScreen.innerHTML += btn.innerHTML;
    } else if (mainScreen.innerHTML == "0" && btn.innerHTML == 0) {
      return;
      //does nothing if screen is 0 and only pressing the 0 button
    } else {
      mainScreen.innerHTML += btn.innerHTML;
    }
  });
};

btnNumbers.forEach(displayNumbers);
//end of displaying the numbers on the main screen

//clicking on the comma
let comma = document.querySelector(".comma");
comma.addEventListener("click", () => {
  if (!isCommaClicked) {
    mainScreen.innerHTML += comma.innerHTML;
    isCommaClicked = true;
  }
});

//clicking on the operands
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    if (mainScreen.innerHTML != "") {
      firstNumber = parseInt(mainScreen.innerHTML);
    }
    if (firstNumber != undefined) {
      topScreen.innerHTML = firstNumber + " " + operand.innerHTML;
      operandToExecute = operand.innerHTML;
      mainScreen.innerHTML = "";
    }
    secondNumber = firstNumber;
    firstNumber = undefined;
  });
});

//calculating
let calcButton = document.querySelector(".equal");
calcButton.addEventListener("click", () => {
  switch (operandToExecute) {
    case "+":
      resoult = secondNumber + parseInt(mainScreen.innerHTML);
      mainScreen.innerHTML = resoult;
      topScreen.innerHTML = "";
      break;
    case "-":
      resoult = secondNumber - parseInt(mainScreen.innerHTML);
      mainScreen.innerHTML = resoult;
      topScreen.innerHTML = "";
      break;
    case "x":
      resoult = secondNumber * parseInt(mainScreen.innerHTML);
      mainScreen.innerHTML = resoult;
      topScreen.innerHTML = "";
      break;
    case "/":
      resoult = secondNumber / parseInt(mainScreen.innerHTML);
      mainScreen.innerHTML = resoult;
      topScreen.innerHTML = "";
      break;
  }
});
