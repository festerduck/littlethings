// year divisible by 4 = leap
// year divisible by 100 != leap
// year dvisible by 400 = leap
var year = 0;
function isLeapYear(year) {
  var flag = 0;
  if (year % 4 === 0) {
    flag = 1;
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        flag = 1;
      } else {
        flag = 0;
      }
    }
    if (flag === 1) {
      return "Leap Year";
    } else {
      return "Not a Leap Year";
    }
  } else {
    return "Not a Leap Year";
  }
}
function getVal() {
  // animateButtonClick();
  var input = document.getElementById("input-box");
  var resultElement = document.getElementById("result");
  if (input.value === "") {
    resultElement.innerHTML = "Please Enter a Value!";
    resultElement.style.color = "#EB5E28";
  } else if (input.value === "0" || input.value < 0) {
    resultElement.innerHTML = "Invalid Value!";
    resultElement.style.color = "#EB5E28";
  } else {
    year = input.value;
    var leap = isLeapYear(year);
    resultElement.innerHTML = leap;
    resultElement.style.color = "#252422";
  }
  event.preventDefault();
  return 0;
}
var num;
function rollDice() {
  var num = Math.random();
  num = num * 6;
  num = num + 1;
  num = Math.floor(num);
  return num;
}
// num = rollDice();

var rollText = document.getElementById("roll");
var tempId = "d6";
function showDice() {
  var changeBackgroundColor = document.querySelector("body");
  num = rollDice();
  if (num === 1) {
    document.getElementById("d1").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#355070";
    tempId = "d1";
  } else if (num === 2) {
    document.getElementById("d2").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#6d597a";
    tempId = "d2";
  } else if (num === 3) {
    document.getElementById("d3").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#b56576";
    tempId = "d3";
  } else if (num === 4) {
    document.getElementById("d4").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#e56b6f";
    tempId = "d4";
  } else if (num === 5) {
    document.getElementById("d5").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#eaac8b";
    tempId = "d5";
  } else if (num === 6) {
    document.getElementById("d6").classList.add("show-dice");
    changeBackgroundColor.style.backgroundColor = "#006d77";
    tempId = "d6";
  }
}
function hideDice() {
  document.getElementById(tempId).classList.remove("show-dice");
}
function changeVisibility() {
  // rollText.classList.add("visibility");
  hideDice();
  showDice();
}

let diceImg = document.querySelector(".theDice");
let image = diceImg.querySelector("img");
image.src = "dice-solid.svg";
function theDice() {
  let num = rollDice();
  if (num === 1) {
    image.src = "diceSvgs/Group 4.svg";
  } else if (num === 2) {
    image.src = "diceSvgs/Group 5.svg";
  } else if (num === 3) {
    image.src = "diceSvgs/Group 6.svg";
  } else if (num === 4) {
    image.src = "diceSvgs/Group 7.svg";
  } else if (num === 5) {
    image.src = "diceSvgs/Group 8.svg";
  } else if (num === 6) {
    image.src = "diceSvgs/Group 9.svg";
  }
}
function animateButtonClick() {
  const button = document.querySelector(".animated");
  //   button.classList.add("button-animation");
  image.classList.add("button-animation");
  // After the animation duration, remove the animation class
  setTimeout(() => {
    // button.classList.remove("button-animation");
    image.classList.remove("button-animation");
  }, 1000);
}
function animateButtonClickRoll() {
  const button = document.querySelector(".roll");
  button.classList.add("button-animation-roll");
  // image.classList.add("button-animation");
  // After the animation duration, remove the animation class
  setTimeout(() => {
    button.classList.remove("button-animation-roll");
    // image.classList.remove("button-animation");
  }, 200);
}

function animateRotatek() {
  image.src = "dice-solid.svg";
  image.classList.add("dice-animation");
  setTimeout(() => {
    image.classList.remove("dice-animation");
    theDice();
  }, 400);
}
function changeDice() {
  animateRotatek();
  animateButtonClickRoll();
  animateButtonClick();
}
