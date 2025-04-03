def calculator():
    A simple calculator function that performs basic arithmetic operations.

    The function allows the user to select an operation from the following options:

    The user is prompted to input two numerical values, and the function performs the selected operation.
    It includes error handling for invalid inputs and division by zero.

    Usage:
        - Run the function and follow the prompts to select an operation and input numbers.
        - The result of the operation or an appropriate error message will be displayed.

        None: The function outputs the result or an error message directly to the console.
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user is prompted to select an operation from the following options:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function takes two numerical inputs from the user and performs the selected operation.
    It handles invalid inputs and division by zero gracefully.

    Returns:
        None: The function prints the result of the operation or an error message to the console.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    # Take input from the user
    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {num1 + num2}")
        elif choice == '2':
            print(f"The result is: {num1 - num2}")
        elif choice == '3':
            print(f"The result is: {num1 * num2}")
        elif choice == '4':
            if num2 != 0:
                print(f"The result is: {num1 / num2}")
            else:
                print("Error: Division by zero is not allowed.")
        elif choice == '5':
            if num2 != 0:
                print(f"The result is: {(num1 / num2) * 100}%")
            else:
                print("Error: Division by zero is not allowed.")
    else:
        print("Invalid input. Please select a valid operation.")

if __name__ == "__main__":
    calculator()