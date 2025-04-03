// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // formula to convert
    // celsius to Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // return the result
    return fahrenheit;
}
//Driver Code
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`);