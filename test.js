// Function to perform basic arithmetic operations
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    const prompt = require('prompt-sync')(); // Import prompt-sync for user input

    while (true) {
        const choice = prompt("Enter your choice (1-5): ");

        if (choice === "5") {
            console.log("Exiting the calculator. Goodbye!");
            break;
        }

        if (!["1", "2", "3", "4"].includes(choice)) {
            console.log("Invalid choice. Please select a valid option.");
            continue;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter valid numbers.");
            continue;
        }

        switch (choice) {
            case "1":
                console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "2":
                console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
                break;
            case "3":
                console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
                break;
            case "4":
                if (num2 === 0) {
                    console.log("Error: Division by zero is not allowed.");
                } else {
                    console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
                }
                break;
        }
    }
}

// Run the calculator
calculator();