
import React from 'react';



function AssignmentN01() {
  //Question no 1
  function squareNumber(number) {
    return number * number;
}
const number = 5;
    
  
    const square = squareNumber(number);


    //Question no 2
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

    var temperatureInCelsius = 20;
var temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);

//Question no 3
function areaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
}
const radius = 5;
const { area, perimeter } = areaOfCircle(radius);
//Question no 4
function LastElement(array) {
    if (array.length === 0) {
        return undefined; 
    }
    return array[array.length - 1]; 
}
const array = [1, 2, 3, 4, 5];
const lastElement = LastElement(array);

//Question no 5
function sumAndproduct(SumProdArray) {
    let sum = 0;
    let product = 1;
    
    
    for (let i = 0; i < SumProdArray.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    
    return { sum, product };
}
const numbers = [1, 2, 3, 4, 5];
const { sum, product } = sumAndproduct(numbers);
//Question no 7
function sumOfArrays(array1, array2) {
    const sumArray = [];
    
   
    for (let i = 0; i < array1.length; i++) {
        const sum = array1[i] + (array2[i] || 0); 
        sumArray.push(sum);
    }
    
    return sumArray;
}
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];


const sumArray = sumOfArrays(array1, array2);

    return (
        <div>
        <hr></hr>
            <h2>Question No 1</h2>
            <p>Square of {number} is {square}</p>
            <hr></hr>
            <h2>Question No 2</h2>
            <p>Temperature in Fahrenheit:, {temperatureInFahrenheit}</p>
            <hr></hr>
            <h2>Question No 3</h2>
            <p>Area of the circle: {area}</p>
            <p>Area of the perimeter: {perimeter}</p>
            <hr></hr>
            <h2>Question No 4</h2>
            <p> Last element of the array: {lastElement}</p>
            <hr></hr>
            <h2>Question No 5</h2>
            <p> Sum of the array: {sum}</p>
            <p> Product of the array: {product}</p>
            <hr></hr>
            <h2>Question No 6</h2>
          <p>Sum of each individual index value: {sumArray}</p>

        </div>
    );
}


export default AssignmentN01;

