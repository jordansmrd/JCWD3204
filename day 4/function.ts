/** @format */

// function declaration

let angka = 10;
function fn() {
  //instruction
  let number = 3;
  number++; //4
  console.log(number, "ini dari fn");
  console.log(angka, "ini angka");
} //undefined - tidak mengembalikan sebuah nilai

function fn2() {
  //instruction
  let number = 3;
  number++;
  return number; //4
} //4 - mengembalikan nilai dari variable number

console.log(fn());
console.log(fn2() + 3); // 4 + 3

const result = fn2();
console.log(result, "isi result");

//console.log => print sebuah nilai ke dalam terminal

function persegi(angka: number) {
  return angka * angka; //10 * 10
}

console.log("luas persegi =", persegi(10));
console.log(persegi(5));

//parameter = passing value dari luar ke dalam function
//return = mengembalikan sebuah nilai setelah function

function penjumlahan2Angka(a: number, b: number, message: string) {
  return message + Number(a + b);
}

console.log(penjumlahan2Angka(5, 10, "hasil penjumlahan "));

function calculator(a: number, b: number, operator: string) {
  if (operator == "+") return a + b;
  else if (operator == "-") return a - b;
  else if (operator == "*") return a * b;
  else if (operator == "/") return a / b;
  return "invalid operator";
}

console.log(calculator(3, 5, "+")); // 3 + 5 = 8
console.log(calculator(3, 5, "-")); // 3 - 5 = -2
console.log(calculator(3, 5, "*")); // 3 * 5 = 15
console.log(calculator(3, 5, "/")); // 3 / 5 = 0.5
console.log(calculator(3, 5, "ashjdlkasjhdlkasjdlkas")); // invalid operator

//FUNCTION EXPRESSION
const square2 = function (number: number) {
  return number * number;
};

//arrow function
const square3 = (number: number) => number * number;
console.log(square3(20));
console.log(3 == 3 ? "sama" : "tidak sama");

const calculator2 = (a: number, b: number, operator: string) =>
  operator == "+"
    ? a + b
    : operator == "-"
    ? a - b
    : operator == "*"
    ? a * b
    : operator == "/"
    ? a / b
    : "invalid operator";

console.log(calculator2(10, 2, "+"));

const calculator3 = (a: number, b: number, operator: string) => {
  if (operator == "+") return a + b;
  else if (operator == "-") return a - b;
  else if (operator == "*") return a * b;
  else if (operator == "/") return a / b;
  return "invalid operator";
};

const multiply = (a: number, b: number = 3) => a * b; //default parameter

console.log(multiply(10), "multiply"); // 10 * 3

const test = (msg?: string) => msg || "tidak ada parameter"; // optional parameter

console.log(test("ini message")); // ini message
console.log(test()); // tidak ada parameter

//rest parameter
const myFunc = (a: string, b: string, ...manyMore: Array<string>) => {
  console.log(a, "a"); //one
  console.log(b, "b"); //two
  console.log(manyMore, "manyMore"); // ["three", "four", "five", "six", "seven"]
};

console.log("hello", "world", "from", "purwadhika"); // contoh rest parameter yang sering digunakan

myFunc("one", "two", "three", "four", "five", "six", "seven");

//nested function
function getMessage(fName: string) {
  function sayHello() {
    return "Hello " + fName;
  }

  function welcomeMessage() {
    return "welcome to purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}
console.log(getMessage("jordan")); //Hello jordan welcome to purwadhika

//closure
function greeting(name: string) {
  const defMsg: string = "Hello ";
  return function () {
    return defMsg + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid()); //Hello David
console.log(greeting("Arnold")()); //Hello Arnold

//currying
function multiplier(factor: number) {
  return function (number: number) {
    return factor * number;
  };
}

const mul3 = multiplier(3);
const mul5 = mul3(5); // 3*5

console.log(mul5); // 15
console.log(multiplier(3)(5)); //15
// return function dari currying memiliki parameter

const penjumlahan = (a: number) => (b: number) => a + b;

console.log(penjumlahan(20)(10)); // 30

const fullname = (fname: string) => (lname: string) => fname + " " + lname;
console.log(fullname("agus")("handless"));

const msg = (fname: string) => () => "hello " + fname;
console.log(msg("agus")());

//recursive
function countDown(fromNumber: number) {
  console.log(fromNumber); // 3 -> 2 -> 1

  let nextNumber: number = fromNumber - 1; //2 -> 1 -> 0

  if (nextNumber > 0) {
    countDown(nextNumber); // countDown(2) countDown(1)
  }
}

countDown(3);

const factor = (number: number): number =>
  number > 1 ? number + factor(number - 1) : 1;

// tipe data
// method + property setiap tipe data

const str = "Ayam";

console.log(str.split("")); // [ 'a', 'y', 'a', 'm' ]
console.log(str.replace(/a/gi, "z"));
