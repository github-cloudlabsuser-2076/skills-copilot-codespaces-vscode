// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Main function to operate the calculator
function operateCalculator() {
    const operator = prompt("Enter operator ( either +, -, * or / ): ");
    const number1 = parseFloat(prompt("Enter first number: "));
    const number2 = parseFloat(prompt("Enter second number: "));

    let result;

    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            return alert("Invalid operator");
    }

    alert("Result: " + result);
}

// Run the calculator
operateCalculator();