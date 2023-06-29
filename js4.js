// 1-Create array called ages, subtract value of 1st element, add new age to array and repeat step above, use loop to find ave age
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var lastIndex = ages.length - 1;
var ageDiff = ages[lastIndex] - ages[0];
console.log("Age difference: " + ageDiff);
ages.push(42);
lastIndex = ages.length - 1;
ageDiff = ages[lastIndex] - ages[0]; 
console.log("Age difference: " + ageDiff);
var sum = 0;
for (var i = 0; i < ages.length; i++) {
  sum += ages[i];
}
var avgAge = sum / ages.length;
console.log("Average age: " + avgAge);

// 2-Create array called names, use look to iterate and calculate avg letters in names, use loop to concatenate names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var sum = 0;
for (let i = 0; i < names.length; i++) {
  sum += names[i].length;
}
var avgLetters = sum / names.length;
console.log("Average number of letters per name: " + avgLetters);
var allNames = "";
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + " ";
}
console.log("All names: " + allNames);

// 3-How to access last element of array
let answerLastElement = "The index of an array in JavaScript, which is always one less than the array's length, can be used to access the array's final element. To access the element at the index, use the square bracket notation. "
console.log("How does one access the last element of an array? " + answerLastElement);

// 4-How to access first element of array
let answerFirstElement = "In JavaScript, you can use the square bracket syntax and an index of 0 to retrieve the first element of an array."
console.log("How does one access the first element of an array? " + answerFirstElement);

// 5-Create array called namesLength, 6-Iterate over names array and add length of each name to nameLengths array,
// calculate the sum of all elements in nameLengths array

var names = ["Sarah", "Jes", "Lady"];
var nameLengths = [];
for (var i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths); // [5, 3, 4]
var sum = 0;
for (var i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);

// 7-Write function with 2 parameters, word and n, as arguements and concatenates this as a return
function concatenateWord(word, n) {
    var result = "";
    for (let i = 0; i < n; i++) {
      result += word;
    }
    return result;
  }
  console.log(concatenateWord("Meow", 3));

// 8-Create function with 2 parameters of first and last names and returns entire name.
  function getFullName (firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  console.log(getFullName('Olivia', 'Rottweiler'));

// 9-Create function that takes array of nums and returns true if sum is greater then one hundred
function sumGreaterThan100(numbers) {
    var sum = numbers.reduce((total, num) => total + num, 0);
    return sum > 100;
  }
  const numbers = [100, 20, 30, 40];
  const isSumGreaterThan100 = sumGreaterThan100(numbers);
  console.log(isSumGreaterThan100);

  // 10-Create function with array of nums and returns avg of all elements in array
  function findAverage(numbers) {
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  const numbers2 = [12, 15, 3, 9, 33];
  const average = findAverage(numbers2);
  console.log(average);

// 11-Create function that uses 2 arrays of nums that returns true of avg of elements in 1st array are greater than 2nd
  function compareAverages(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
    }
    return (sum1 / arr1.length) > (sum2 / arr2.length);
   }
   
   const arr1 = [122, 230, 330, 450];
   const arr2 = [3, 9, 7, 350];
   const areAveragesHigher = compareAverages(arr1, arr2);
   console.log(areAveragesHigher);

// 14-Create function called willBuyDrink that takes isHotOutside boolean and number moneyInPocket that returns true 
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
   }
   
   const isHotOutside = true;
   const moneyInPocket = 12.33;
   const willBuy = willBuyDrink(isHotOutside, moneyInPocket);
   console.log(willBuy); 

// Create own function that solves problem and write what function does and why created it
function isSpanish(word) {
    const spanishWords = ["caballo", "rodilla", "cebolla"];
    return spanishWords.includes(word.toLowerCase());
  }
  
  const word1 = "rodilla";
  const word2 = "knee";
  console.log(isSpanish(word1));
  console.log(isSpanish(word2));

 // This function was created because I love Spanish. Its function is to see if a word is in Spanish or not as a t/f boolean.