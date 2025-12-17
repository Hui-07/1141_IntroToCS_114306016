function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultElement = document.getElementById("result");
    
    var finalResult = 0;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please enter valid numbers.";
        return;
    }

    if (operator === "+") {
        finalResult = add(num1, num2);
    } else if (operator === "-") {
        finalResult = subtract(num1, num2);
    } else if (operator === "*") {
        finalResult = multiply(num1, num2);
    } else if (operator === "/") {
        finalResult = divide(num1, num2);
        if (finalResult === null) { 
            resultElement.innerText = "Error: Div by 0";
            return;
        }
    }

    resultElement.innerText = "Result = " + finalResult.toFixed(2);
}

document.getElementById("operator").addEventListener("change", function() {
    var op = this.value;
    var btn = document.querySelector("button");
    if(op === "+") btn.innerText = "Add";
    else if(op === "-") btn.innerText = "Subtract";
    else if(op === "*") btn.innerText = "Multiply";
    else if(op === "/") btn.innerText = "Divide";
});