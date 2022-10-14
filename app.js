//JS EXERCISES

//21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"

let x = "John";
let y = "Doe";
console.log(`${x} ${y}`);

//22) Create an object with properties such name, surname, email

let profilInfo = {
  name: "Louis",
  surname: "Gadza",
  email: "siuolgadza@gmail.com",
};

//23) Delete the email property from the previously created object

delete profilInfo.email;
console.log(profilInfo);

//24) Create an array with 10 strings in it

let arrOfStr = ["L", "o", "u", "i", "s", "G", "a", "d", "z", "a"];

//25) Print in the console every string from the previous array

for (let i = 0; i < arrOfStr.length; i++) {
  console.log(arrOfStr[i]);
}

//26) Create an array with 100 random numbers in it
let arrNums = [];
for (let i = 1; i <= 100; i++) {
  let randomNum = Math.floor(Math.random() * 100);
  arrNums.push(randomNum);
}
console.log(arrNums);

// 27) Write a function to get the maximum and minimum values from the previously created array
function maxNum(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    } else if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return `maximum:${maxNum} 
minimum:${minNum}`;
}
console.log(maxNum(arrNums));

//28) Create an array of arrays, in which every array has 10 random numbers

let arr1 = [];
let arr2 = [];
for (let i = 1; i <= 10; i++) {
  let randomNum = Math.floor(Math.random() * 20);
  arr1.push(randomNum);
}
for (let i = 1; i <= 10; i++) {
  let randomNum = Math.floor(Math.random() * 20);
  arr2.push(randomNum);
}

console.log(arr1);
console.log(arr2);

let arrOfArr = [arr1, arr2];
console.log(arrOfArr);

//29) Create a function that gets 2 arrays as parameters and returns the longest one
function arrConcat(arr1, arr2) {
  console.log(arr1.concat(arr2));
}
arrConcat(arr1, arr2);

//Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

function higherSum(arr1, arr2) {
  let arr1Sum = 0;
  let arr2Sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1Sum += arr1[i];
    arr2Sum += arr2[i];
    if (arr1Sum > arr2Sum) {
      return arr1;
    } else {
      return arr2;
    }
  }
}
console.log(higherSum(arr1, arr2));
