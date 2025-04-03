const calculator = require('./test'); // Import the calculator function

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator Function', () => {
    let promptMock;
    let consoleLogMock;

    beforeEach(() => {
        // Mock prompt-sync and console.log
        promptMock = jest.fn();
        jest.mock('prompt-sync', () => () => promptMock);
        consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.resetModules(); // Reset modules to clear mocks
        jest.restoreAllMocks(); // Restore original implementations
    });

    test('should display welcome message and options', () => {
        promptMock.mockReturnValueOnce('5'); // Simulate exit choice
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Welcome to the Calculator!');
        expect(consoleLogMock).toHaveBeenCalledWith('Options:');
        expect(consoleLogMock).toHaveBeenCalledWith('1. Add');
        expect(consoleLogMock).toHaveBeenCalledWith('2. Subtract');
        expect(consoleLogMock).toHaveBeenCalledWith('3. Multiply');
        expect(consoleLogMock).toHaveBeenCalledWith('4. Divide');
        expect(consoleLogMock).toHaveBeenCalledWith('5. Exit');
    });

    test('should exit when choice is 5', () => {
        promptMock.mockReturnValueOnce('5'); // Simulate exit choice
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Exiting the calculator. Goodbye!');
    });

    test('should handle invalid choice', () => {
        promptMock.mockReturnValueOnce('invalid').mockReturnValueOnce('5'); // Invalid choice, then exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Invalid choice. Please select a valid option.');
    });

    test('should add two numbers', () => {
        promptMock
            .mockReturnValueOnce('1') // Choice: Add
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('20') // Second number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Result: 10 + 20 = 30');
    });

    test('should subtract two numbers', () => {
        promptMock
            .mockReturnValueOnce('2') // Choice: Subtract
            .mockReturnValueOnce('30') // First number
            .mockReturnValueOnce('10') // Second number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Result: 30 - 10 = 20');
    });

    test('should multiply two numbers', () => {
        promptMock
            .mockReturnValueOnce('3') // Choice: Multiply
            .mockReturnValueOnce('5') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Result: 5 * 4 = 20');
    });

    test('should divide two numbers', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('20') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Result: 20 / 4 = 5');
    });

    test('should handle division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Choice: Divide
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('0') // Second number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Error: Division by zero is not allowed.');
    });

    test('should handle invalid number input', () => {
        promptMock
            .mockReturnValueOnce('1') // Choice: Add
            .mockReturnValueOnce('invalid') // Invalid first number
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Invalid input. Please enter valid numbers.');
    });
});