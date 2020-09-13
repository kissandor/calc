let topScreen = document.querySelector(".top-screen");
let mainScreen = document.querySelector(".main-screen");
let btnNumbers = document.querySelectorAll(".numbers");

//clear Button, clear the top and the main screen.
let ac = () => {
  topScreen.innerHTML = "";
  mainScreen.innerHTML = "0";
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
      //does nothing if screen is 0 and only pressing the 0 button
    } else {
      mainScreen.innerHTML += btn.innerHTML;
    }
  });
};

btnNumbers.forEach(displayNumbers);
//end of displaying the numbers on the main screen
