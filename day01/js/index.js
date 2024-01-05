const fs = require('fs');

const inputs = fs.readFileSync('../input/data.txt', 'utf8').split('\n');

const getInputNumbers = (input) => {
  const digits = input.match(/\d/g);
  const inputNumbers = [digits[0], digits[digits.length - 1]];
  return parseInt(inputNumbers[0] + inputNumbers[1]);
};

const sumAllNumbersFromCalibrator = (listOfNumbers) => {
  return listOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const manageCalibratorValues = (inputs) => {
  let listOfNumbers = [];
  inputs.map((input) => listOfNumbers.push(getInputNumbers(input)));
  return sumAllNumbersFromCalibrator(listOfNumbers);
};

const result = manageCalibratorValues(inputs);
console.log(result);
// The result is 53080