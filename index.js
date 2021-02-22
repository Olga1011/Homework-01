// * 		function findMax(arrayOfNumbers)
// Gasiti cel mai mare nr dintr-un masiv M de numere

function findMax(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let maxNumber = newArr[newArr.length - 1];
  console.log(maxNumber);
}

function findMax(arr) {
  let maxNumber = arr.reduce((accum, value) => {
    return accum > value ? accum : value;
  });
  console.log(maxNumber);
}

function findMax(arr) {
  return Math.max(...arr);
}

// function findMin(arrayOfNumbers)
// Gasiti cel mai mic nr dintr-un masiv M de numere

function findMin(arr) {
  let minNumber = arr.reduce((accum, value) => {
    return accum < value ? accum : value;
  });
  console.log(minNumber);
}

function findMax(arr) {
  return Math.min(...arr);
}

// * 		function displayDate(day, month, year); // 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21
// 	Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.

// this will work only if we admitt that the input year always is a 4 digits number

function displayDate(day, month, year) {
  let outputDay = Number(day);
  let outputMonth = Number(month);
  let outputYear = year.toString().slice(2, 4);

  let date = `${outputDay}.${outputMonth}.${outputYear}`;

  if (day <= 9 && month <= 9) {
    date = `0${outputDay}.0${outputMonth}.${outputYear}`;
  } else {
    date = `${outputDay}.${outputMonth}.${outputYear}`;
  }
  return date;
}

// function isPalindrom(string);
// Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).

function isPalindrome(string) {
  let reversedStr = str.split("").reverse().join("");
  return string == reversedStr ? "Is a Palindrome" : "Is not a polindrome";
}

// function isInteger(x)
// 	Verificați dacă parametrul transmis către funcție este un număr întreg.
function isInteger(x) {
  return Number.isInteger(x) ? "Is integer" : "Is not integer";
}

// function isFloat(x)
// 	Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).
function isFloat(x) {
  if (Number(x) === x && x % 1 !== 0) {
    return "Is Float";
  } else {
    return "Is not float";
  }
}
// function convertToRomanNumber(x);
// 	Transformati un număr X întreg în echivalentul scris cu numerale romane.

function convertToRomanNumber(num) {
  if (!num) return false;
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  let item;

  for (item in lookup) {
    while (num >= lookup[item]) {
      roman += item;
      num -= lookup[item];
    }
  }
  return roman;
}
