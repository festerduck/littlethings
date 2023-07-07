// year divisible by 4 = leap
// year divisible by 100 != leap
// year dvisible by 400 = leap
var year = 0;
function isLeapYear(year)
{
    var flag = 0;
    if(year % 4 === 0)
    {
        flag = 1;
        if(year % 100 === 0)
        {
            if(year % 400 === 0)
            {
                flag = 1;
            }
            else
            {
                flag = 0;   
            }
        }
        if(flag === 1)
        {
           return "Leap Year";
        }
        else
        {
            return "Not a Leap Year";
        }
    }
    else
    {
        return "Not a Leap Year";  
    }
}
function getVal()
{
    var input = document.getElementById("input-box");
    var resultElement = document.getElementById("result");
    if(input.value === "")
    {
        resultElement.innerHTML = "Please Enter a Value!";
        resultElement.style.color = '#EB5E28';
    }
    else if (input.value === "0" || input.value < 0) {
        resultElement.innerHTML = "Invalid Value!";
        resultElement.style.color = '#EB5E28';
    }
    else 
    {
        year = input.value;
        var leap = isLeapYear(year);
        resultElement.innerHTML = leap;
        resultElement.style.color = '#252422';

    }
    event.preventDefault();
    return 0;
}
var num;
function rollDice(){
  var  num = Math.random();
    num = num * 6;
    num = num + 1;
    num = Math.floor(num);
    return num;
}
// num = rollDice();

var rollText = document.getElementById("roll");
var tempId = "d6";
function showDice()
{
    num = rollDice();
    if(num === 1)
    {
        document.getElementById("d1").classList.add("show-dice");
        tempId = "d1";
    }
    else if(num === 2)
    {
        document.getElementById("d2").classList.add("show-dice");
        tempId = "d2";
    }
    else if (num ===3) {
        document.getElementById("d3").classList.add("show-dice");
        tempId = "d3";
    }
    else if (num === 4) {
        document.getElementById("d4").classList.add("show-dice");
        tempId = "d4";
    }
    else if (num === 5) {
        document.getElementById("d5").classList.add("show-dice");
        tempId = "d5";
    }
    else if (num === 6) {
        document.getElementById("d6").classList.add("show-dice");  
        tempId = "d6";      
    }
}
function hideDice()
{
    document.getElementById(tempId).classList.remove("show-dice");
}
function changeVisibility()
{
    // rollText.classList.add("visibility");
    hideDice();
    showDice();
}

