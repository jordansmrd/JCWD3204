/** @format */

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

const triangle = (h: number) => {
  let count: number = 1;
  for (let i = 0; i < h; i++) {
    let res = "";
    for (let j = 0; j <= i; j++)
      res += (count < 10 ? "0" + count++ : count++) + " ";
    console.log(res);
  }
};

triangle(4);

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = (n: number) => {
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) res += "FizzBuzz" + " ";
    else if (i % 3 == 0) res += "Fizz" + " ";
    else if (i % 5 == 0) res += "Buzz" + " ";
    else res += i + " ";
  }
  return res;
};

console.log(fizzBuzz(15));

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

const BMI = (w: number, h: number) => {
  const bmi = w / h ** 2;
  if (bmi < 18.5) return "less weight";
  else if (bmi >= 18.5 && bmi <= 24.9) return "ideal";
  else if (bmi >= 25 && bmi <= 29.9) return "overweight";
  else if (bmi >= 30 && bmi <= 39.9) return "very overweight";
  else return "obesity";
};

console.log(BMI(74, 1.74));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const evenNumber = (arr: Array<number>) => arr.filter((_) => _ % 2 == 0);
console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//filter => melakukan menyaring data
//filter => return []
// arr.filter((element) => { return element %2 == 0})
// [2,4,6,8,10]

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const split = (str: string) => str.split(" ");
console.log(split("Hello World"));
