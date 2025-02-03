/** @format */
const arr: Array<string> = ["A", "B", "C", "D", "E"];
const arr2: Array<string> = new Array("A", "B", "C", "D", "E"); //cara ke2
// let arr2: string[] = [];

const scores: Array<number> = [10, 20, 30, 40, 50];

console.log(arr, "array of string");
console.log(scores, "array of number");

//accessing and calling property and method in array
console.log(arr.length, "ini length"); // accessing property. cek berapa element di dalam sebuah array
console.log(arr.concat(["F", "G"]), "ini concat"); // calling method/function. concat digunakan untuk menggabungkan array

//accessing array through index number
console.log(arr[0], "nilai index ke 0"); // A
console.log(arr[1], "nilai index ke 1"); // B
console.log(arr[100], "nilai index ke 100"); //undefined

//looping with for of array
for (const element of arr) {
  console.log(element, "looping element");
}

//looping with for in array
for (const index in arr) {
  console.log(index, "looping index");
}

//looping with for
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i], "looping for");
}

// let = tidak bisa re-declare dan bisa re-assign
// const = tidak bisa re-declare dan tidak bisa re-assign
// var = bisa re-declare dan bisa re-assign

const increase = "INCREASE";
const decrease = "DECREASE";

let a = 123;
let type = "DECREASE";

// if (type == increase) a++;
// else if (type == decrease) a--;
// a = a - 1; //reassign a = nilai a - 1
// prefix postfix
console.log(++a);
// print nilai a, baru nilai a ditambah 1

console.log((a += 3));
// a = a + 1

// kegunaan dari array = tipe data non primitive yg digunakan untuk menyimpan koleksi data
// cara access element di dalam array = arr[0]
// cara tau panjang array = arr.length

//built in methods array

const numbers: Array<number> = [1, 2, 3, 4, 5, 6];

//method yang tidak merubah origin
console.log(numbers.toString());
console.log(numbers.toString()); // return sebuah string dari array numbers
console.log(numbers.join("-")); // return mengubah array jadi string, dan merubah separatornya sesuai dengan argument yg kita kirim
console.log(numbers.concat(20, 21, 22), "ini concat"); // return penggabungan array dengan element dari arguments

//method yang merubah origin
console.log(numbers.pop(), "ini pop"); // menghapus element terakhir
console.log(numbers.push(7, 8, 9, 10), "ini push"); //menambahkan element di paling akhir
console.log(numbers.shift(), "ini shift"); // menghapus element pertama
console.log(numbers.unshift(100, 101, 102), "ini unshift"); //menambahkan element di paling awal
console.log(numbers.splice(0, 2, 99, 98), "ini splice"); //menghapus element sebanyak 2 dari index ke 0 dan menyisipkan element ke dalam index 0 (99,98)
numbers.sort(); //mengurutkan berdasarkan ASCII CODE
numbers.sort((a, b) => a - b); //mengurutkan berdasarkan angka ascending
numbers.sort((a, b) => b - a); //mengurutkan berdasarkan angka descending
console.log(numbers);

const ex = [10, 21, 9, 1, 3, 2];
ex.sort(); // [1,10,2,21,3,9]

console.log(ex[1]); //10

// looping
// callback function adalah function yang berada di dalam argument.
// argument adalah value yang dipassing ke dalam parameter sebuah function

//map
//return dari map adalah sebuah array
//return dari callback merupakan element yg disimpan di dalam return map
//length array hasil return map. memiliki length yg sama dengan origin array

const test_1 = [1, 2, 3, 4, 5];
const test_2 = [6, 7, 8, 9, 10];

const maptest3 = test_1.concat(test_2).map((v, i, arr) => {
  return v + 1 + arr.length;
});

const hasil_map = numbers.map((v, i, array) => {
  return v;
});

console.log(hasil_map, "ini hasil map");

//filter
//return dari filter adalah sebuah array
//return dari callback adalah sebuah boolean

const hasil_filter = numbers.filter((value, index, array) => {
  // return true;
  return value % 2 == 0;
});

console.log(hasil_filter, "ini hasil filter");

//foreach
//return dari foreach adalah void (tidak memiliki return)
//return dari callback tidak akan mempengaruhi hasil return dari foreachnya
let sum = 0;
const filtered: Array<number> = [];
const hasil_foreach = numbers.forEach((value, index, array) => {
  // console.log(value, "index ke", index);
  if (value % 2 == 0) filtered.push(value);
  console.log("ini sum", sum, "ini index", index);

  sum += index;
});
console.log(hasil_foreach, "ini hasil foreach");
console.log(sum, "ini hasil sum");
console.log(filtered, "ini filtered");

//findIndex
//return dari findIndex adalah sebuah number (nomor index)
//return dari callbacknya adalah sebuah boolean
//apabila return dari findIndex adalah -1. artinya index tidak ditemukan

const hasil_findIndex = numbers.findIndex((value, index, array) => {
  return value == 5;
});

const kumpulan_sepeda = [
  {
    name: "sepeda gunung",
    price: 500000,
  },
  {
    name: "sepeda roda tiga",
    price: 200000,
  },
  {
    name: "sepeda balap",
    price: 700000,
  },
];

console.log(hasil_findIndex, "ini hasil find index");
console.log(numbers.indexOf(5), "ini menggunakan indexOf");

console.log(
  kumpulan_sepeda.indexOf({
    name: "sepeda roda tiga",
    price: 200000,
  }),
  "ini menggunakan indexOf dari kumpulan sepeda"
);
console.log(
  kumpulan_sepeda.findIndex((v) => v.name == "sepeda roda tiga"),
  "index dari sepeda roda 3"
);

//find
//return dari find sebuah element
//return dari callbacknya adalah boolean
//pada saat hasil callbacknya false untuk semua looping. maka return dari find adalah undefined (element tidak ditemukan)
const hasil_find = numbers.find((value, index, array) => {
  return index == 10000;
});

console.log(hasil_find, "ini hasil find");
