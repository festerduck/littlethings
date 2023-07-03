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
    }
    else if (input.value === "0" || input.value < 0) {
        resultElement.innerHTML = "Invalid Value!";
    }
    else 
    {
        year = input.value;
        var leap = isLeapYear(year);
        resultElement.innerHTML = leap;
    }
    event.preventDefault();
    return 0;
}




