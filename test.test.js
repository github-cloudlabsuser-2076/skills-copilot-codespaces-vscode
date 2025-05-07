const Calculator = require('./test.js').Calculator;

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator Main Program', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Addition operation', () => {
        const result = calculator.add(5, 3);
        expect(result).toBe(8);
    });

    test('Subtraction operation', () => {
        const result = calculator.subtract(10, 4);
        expect(result).toBe(6);
    });

    test('Multiplication operation', () => {
        const result = calculator.multiply(7, 6);
        expect(result).toBe(42);
    });

    test('Division operation', () => {
        const result = calculator.divide(20, 4);
        expect(result).toBe(5);
    });

    test('Division by zero throws error', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed.');
    });

    test('Invalid choice in main program', () => {
        const prompt = jest.fn()
            .mockReturnValueOnce('6') // Invalid choice
            .mockReturnValueOnce('5'); // Quit
        const consoleLog = jest.spyOn(console, 'log').mockImplementation();

        jest.mock('prompt-sync', () => () => prompt);

        require('./test.js'); // Run the main program

        expect(consoleLog).toHaveBeenCalledWith('Invalid choice. Please try again.');
        consoleLog.mockRestore();
    });

    test('Quit option in main program', () => {
        const prompt = jest.fn()
            .mockReturnValueOnce('5'); // Quit
        const consoleLog = jest.spyOn(console, 'log').mockImplementation();

        jest.mock('prompt-sync', () => () => prompt);

        require('./test.js'); // Run the main program

        expect(consoleLog).toHaveBeenCalledWith('Thanks for using the calculator. Goodbye!');
        consoleLog.mockRestore();
    });
});