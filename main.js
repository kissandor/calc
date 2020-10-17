//status
const STATUS_FIRSTNUM = "firstnum",
      STATUS_SECONDNUM = "secondnum",
      STATUS_OPERAND = "operand",
      STATUS_DONE = "done";

//variabale to store the numbers and the variables
let number1 = null,
    number2 = null,
    operand = null,
    status = STATUS_FIRSTNUM,
    isCOmmaCLicked = false;


//select the number buttons
let numberButtons = document.querySelectorAll(".numbers");


//select the operand buttons
let operandButtons = document.querySelectorAll(".operand");

//select the screens
let mainScreen = document.querySelector(".main-screen");
let topScreenNumber = document.querySelector(".top-screen-number");
let topScreenOperand = document.querySelector(".operand-screen");


let onNumberClick = (event)=>{
  let clickNumberButton = event.target;
    let num = parseInt(clickNumberButton.innerText);
    switch (status) {
      case STATUS_FIRSTNUM:
        setNumber1(number1 * 10 + num) ;      
        break;
      case STATUS_OPERAND:
        setNumber2(number2 *10 + num);
        status = STATUS_SECONDNUM;
        break;
      case STATUS_SECONDNUM:
        setNumber2(number2 *10 + num);
        break;
      case STATUS_DONE:
        clear();
        setNumber1(number1 * 10 + num) ;
        break;
    }
  
  console.log(`number1: ${number1}, number2: ${number2}, status: ${status}`);
};

let onOperandClick = (event)=>{
  let clickOperandButton = event.target;
  let op = clickOperandButton.innerText;
  switch (status) {
    case STATUS_FIRSTNUM:
      if (op == "=") {
        break;
      }
      setOperand(op);
      swichNumbers();
      status = STATUS_OPERAND;
      break;
    case STATUS_SECONDNUM:
      let resoult = eval(number1 + operand + number2);
      number1 = resoult;
      number2=null;
      if (op == "=") {
          setOperand(null);
          setNumber1(number1);
          topScreenNumber.innerText = "";
          number2 = null;
          status = STATUS_DONE;        
      } else {
        printResoult(resoult);
        setOperand(op); 
        status = STATUS_OPERAND;     
      }
      break;
    case STATUS_OPERAND:
      if(op == "="){
        break;
      }
      setOperand(op);
      break;
    case STATUS_DONE:
      if(op == "="){
        break;
      }
      setOperand(op);
      swichNumbers();
      status = STATUS_OPERAND;
      break;
    }
    console.log(`number1: ${number1}, number2: ${number2}, status: ${status}`);
  };
  
  
  numberButtons.forEach(button =>{
    button.addEventListener("click", onNumberClick);
  })
  
  operandButtons.forEach(button =>{
    button.addEventListener("click", onOperandClick);
  })

  
//setter functions
let setNumber1 = value =>{
  number1 = value;
  mainScreen.innerText = number1;
}

let setNumber2 = value =>{
  number2 = value;
  mainScreen.innerText = number2;
}
let setOperand = value =>{
  operand = value;
  topScreenOperand.innerText = operand;  
}

let swichNumbers = () =>{
  topScreenNumber.innerText = mainScreen.innerText;
  mainScreen.innerText = "";
}
let printResoult = value=>{
  topScreenNumber.innerText = value;
  mainScreen.innerText = "";  
}

let clear = ()=>{
  status = STATUS_FIRSTNUM;
  number1 = null;
  number2 = null;
  operand = null;
  mainScreen.innerText = 0;
  topScreenNumber.innerText = "";
  topScreenOperand.innerText = "";
}
let ac = document.querySelector(".ac");
ac.addEventListener("click", clear);
