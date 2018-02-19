/**************************************************************************/
/* This simple prorgam converts Kelvin to Celsius, then to Fahrenheit.*/
/* Coded by: Evense Zetrenne*/
/* Feb 08, 2018 */
/**************************************************************************///

const kelvin = prompt('What is the Kelvin temperature today?'); // Todays forcast

let celsius = kelvin -  273; // Changes kelvin to celsius

let fahrenheit = celsius;

fahrenheit = Math.floor(celsius * (9/5) + 32); //Changes Celsius to Fahrenheit

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)