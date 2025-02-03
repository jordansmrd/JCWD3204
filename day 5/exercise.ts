/** @format */

// /** @format */
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
const LHA = (arr: Array<number>) => {
  arr.sort((a, b) => a - b);
  return {
    lowest: arr[0],
    highest: arr[arr.length - 1],
    avg: Number(arr.reduce((sum, curr) => sum + curr, 0) / arr.length).toFixed(
      4
    ),
  };
};

//reduce return value sesuai dengan parameter pertama dalam callbacknya
//parameter/argument pertama dari reduce adalah callback function
//parameter kedua adalah initial value dari  parameter pertama milik callback
//isi dari parameter pertama dari callback ditentukan dari return callback itu sendiri
console.log(
  [1, 2, 3].reduce((sum: number, curr: number) => {
    return sum + curr;
  }, 0),
  "ini hasil reduce"
);

// sum = 0 , curr= 1
// sum = 1,  curr = 2
// sum = 3, curr = 3
// sum = 6

console.log(LHA([12, 5, 23, 18, 4, 45, 32]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const arr2str = (arr: Array<string>) =>
  arr.map((v, i) => (i == arr.length - 1 ? " and " + v : v)).toString(); //["apple","banana","cherry", "and date"] => "apple,banana,cherry, and date"

console.log(arr2str(["apple", "banana", "cherry", "date"]));

// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const secondSmallest = (arr: Array<number>) => arr.sort((a, b) => a - b)[1];
console.log(secondSmallest([5, 3, 1, 7, 2, 6]), "ini second smallest");

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const calculate = (arr1: Array<number>, arr2: Array<number>) =>
  arr1.map((v, i) => v + arr2[i]);

console.log(
  calculate([1, 2, 3], [3, 2, 1]),
  "[1, 2, 3] + [3, 2, 1] → [4, 4, 4]"
);

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

const addNewElement = (arr: Array<number>, newElement: number) =>
  arr.indexOf(newElement) != -1 ? arr : arr.concat(newElement);

console.log(addNewElement([1, 2, 3, 4], 4), "case 1");
console.log(addNewElement([1, 2, 3, 4], 7), "case 2");

// console.log([3, 4, 5, 6, 7].indexOf(100), "ini dari indexOf");

// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const numbersOnly = (arr: Array<any>) =>
  arr.reduce((sum, curr) => (typeof curr == "number" ? sum + curr : sum), 0);

console.log(
  numbersOnly(["3", 1, "string", null, false, undefined, 2]),
  "sum number only"
);

// const evenOnly = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
//   (arrEven: Array<number>, curr: number) =>
//     curr % 2 == 0 ? arrEven.concat(curr) : arrEven,
//   []
// );

// console.log(evenOnly, "ini khusus genap");

// sum = 0 , curr = "3"
//sum = 0, curr = 1
//sum = 1 , curr = "string"
//sum = 1, curr = null
//sum = 1, curr = false
//sum = 1, curr = undefined
//sum = 1, curr = 2
// sum = 3

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input.
//  (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example :
//               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//               The function will return [5, 10, 24, 3, 6]

const insertMultiple = (maxSize: number, ...numbers: Array<number>) =>
  numbers.filter((v, i) => i + 1 <= maxSize);
console.log(insertMultiple(5, 5, 10, 24, 3, 6, 7, 8), "insert multiple max 5"); // maxSize = 5, numbers = [5, 10, 24, 3, 6, 7, 8]
// 1 <= 5 true [5]
// 2 <= 5 true [5,10]
// 3 <= 5 true [5,10,24]
// 4 <= 5 true [5,10,24,3]
// 5 <= 5 true [5,10,24,3,6]

// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const combine = (arr1: Array<number>, arr2: Array<number>) => arr1.concat(arr2);
console.log(combine([1, 2, 3], [4, 5, 6]), "ini combine");

// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const findDuplicate = (arr: Array<number>) =>
  arr.reduce(
    (temp: Array<number>, curr: number) =>
      arr.filter((v) => v == curr).length > 1 && temp.indexOf(curr) == -1
        ? temp.concat(curr)
        : temp,
    []
  );

console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]), "find duplicate val");

//temp = [2,3,]
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter yg nilainya 1 => [1]
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 2 => [2, 2, 2].length = 3 true
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 2 => [2, 2, 2].length = 3. false
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 2 => [2, 2, 2] false
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 3 => [3, 3] true
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 3 => [3, 3] false
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 4 => [4]
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 5 => [5,5]  true
// [1, 2, 2, 2, 3, 3, 4, 5, 5].filter nilai 5 => [5,5]  false

// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
const findDiff = (arr1: Array<number>, arr2: Array<number>) =>
  arr1
    .concat(arr2)
    .filter(
      (v) =>
        (arr1.indexOf(v) == -1 && arr2.indexOf(v) != -1) ||
        (arr1.indexOf(v) != -1 && arr2.indexOf(v) == -1)
    );

console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), "find diff");
//[1,2,3,4,5,3,4,5,6,7] => [1, 2, 6, 7];

// Based on the array below write a function that will return primitive data types only.
//  let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

const primitiveOnly = (arr: Array<any>) =>
  arr.filter((v) => typeof v != "object");
console.log(primitiveOnly([1, [], undefined, {}, "string", {}, []])); //[ 1, undefined, 'string' ]

// Write a function from the below array of number that will return sum of duplicate values.
//   let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40
const sumDuplicate = (arr: Array<number>) =>
  arr.reduce(
    (sum: number, curr: number) =>
      arr.filter((v) => v == curr).length > 1 ? sum + curr : sum,
    0
  );

console.log(
  sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]),
  "sum duplicate"
); //40

//sum = 40
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [10,10,10,10] 4
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [20] 1
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [40] 1
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [10,10,10,10] 4
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [50] 1
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [30] 1
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [10,10,10,10] 4
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [60] 1
//[10, 20, 40, 10, 50, 30, 10, 60, 10] => [10,10,10,10] 4

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

const rps = (user: "rock" | "paper" | "scissor") => {
  const random = Math.floor(Math.random() * 3) + 1; // random 1-3
  const computer = random == 1 ? "rock" : random == 2 ? "paper" : "scissor";
  if (user == computer) return "draw";
  else if (
    (user == "paper" && computer == "rock") ||
    (user == "rock" && computer == "scissor") ||
    (user == "scissor" && computer == "paper")
  )
    return "you win";
  return "you lose";
};

console.log(rps("rock"));
