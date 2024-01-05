const fs = require('fs');


const spelledDigitsDictionary = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const inputs = fs.readFileSync('2023/day01/input/data.txt', 'utf8').split('\n');

const getInputNumbers = (input) => {
  const initialDigits = input.match(
    new RegExp(
    `(?:${Object.keys(spelledDigitsDictionary).join('|')}|\\d)`,
    'gi'
  )
);

  const digits = initialDigits.map(
    (digit) => spelledDigitsDictionary[digit] || digit
  );

  const inputNumbers = [
    digits[0],
    digits[digits.length - 1],
  ];
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
// The result is 53255, but is wrong
