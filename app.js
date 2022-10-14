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

// DOM EXERCISES

// 31) Get the element with an id of "container" from the page

const elem = document.querySelector("#container");

// 32) Get every <td> element from the page

let tdElems = document.querySelectorAll("td");
console.log(tdElems);

//33) Use a loop for printing the text inside of every <td> element in the page

for (let i = 0; i < tdElems.length; i++) {
  const tdElemContent = tdElems[i].innerText;
  console.log(tdElemContent);
}
//34) Write a function to change the heading of the page

let head = document.querySelector("h1");
const changeHead = () => {
  head.innerText = "Changed Header ";
  head.style.color = "coral";
};
// changeHead();

// 35) Write a function to add an extra row to the table
let table = document.querySelector("table");
let tr = document.createElement("tr");
function addTableRow() {
  for (let i = 0; i < 4; i++) {
    let td = document.createElement("td");
    td.innerText = "added something";
    tr.appendChild(td);
  }
}
table.appendChild(tr);
addTableRow();

//36) Write a function to add a class of "test" to each row in the table
let rowArr = document.querySelectorAll("tr");
function addClass() {
  for (let i = 0; i < rowArr.length; i++) {
    rowArr[i].className = "test";
  }
}
addClass();
// 37) Write a function to add a red background to every link in the page
let links = document.querySelectorAll("a");
function addRedBackground() {
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "lightgreen";
  }
}
addRedBackground();

//38) Console log "Page loaded" when the page is correctly loaded

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
});

// 39) Write a function to add new items to a unordered list
document.querySelector("#myBtn1").onclick = function () {
  let ul = document.querySelector("#ul1");
  let newGame = document.createElement("li");
  newGame.className = "games";
  newGame.innerText = "Need For Speed";
  newGame.style.color = "green";

  ul.appendChild(newGame);
};

document.querySelector("#myBtn2").onclick = function () {
  let ul = document.querySelector("#ul2");
  let newGame = document.createElement("li");
  newGame.innerText = "Ooops no other options";
  newGame.style.backgroundColor = "red";
  newGame.style.color = "white";
  newGame.style.display = "inline";
  newGame.style.padding = "3px";
  ul.appendChild(newGame);
};

// 40) Write a function to empty a list
let gameList = document.querySelectorAll(".games");

document.querySelector("#myBtn11").onclick = function () {
  for (let i = 0; i < gameList.length; i++) {
    // gameList[i].innerText = "";
    gameList[i].style.display = "none";
  }
};

let optionsList = document.querySelectorAll(".options");

document.querySelector("#myBtn22").onclick = function () {
  for (let i = 0; i < optionsList.length; i++) {
    optionsList[i].remove();
    // optionsList[i].innerText = "";
    // gameList[i].style.display = "none";
  }
};

//         EXTRA EXERCISES

//41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
//TODO---1
let alertLink = document.querySelectorAll("a");
function alert(e) {
  e.currentTarget.alert = "https://erli.pl/produkt/";
  console.log(e.currentTarget);
}

for (let i = 0; i < alertLink.length; i++) {
  alertLink[i].addEventListener("mouseover", alert);
}

// function alert() {
//   for (let i = 0; i < alertLink.length; i++) {
//     alertLink[i].addEventListener("onmouseover", function () {
//       // let a=alertLink[i]
//       alert("louis");
//     });
//   }
// }
// alert();
//TODO end
//         42) Create a button that will hide every image on the page when clicked
let img = document.querySelectorAll("img");
document.querySelector("#hideImg").onclick = function () {
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
};
document.querySelector("#displayImg").onclick = function () {
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "block";
  }
};

// let img = document.querySelectorAll("img");
function hideImg(e) {
  e.currentTarget.style.display = "none";
  console.log(e.currentTarget);
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", hideImg);
}
//         43) Create a button that will hide or show the table on the page when clicked
//TODO  ------2
let tableContent = document.querySelector("#table");
let hideDisplayTable = document.querySelector("#hideDisplayTable");

hideDisplayTable.onclick = function () {
  tableContent.style.display = "none";
};
// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)

//TODO -----3
function sum() {
  let sum = 0;
  for (let i = 0; i < tdElems.length; i++) {
    if (typeof (Number(tdElems[i].innerText) === "number")) {
      sum += tdElems[i];
    }
  }
  return sum;
}
console.log(sum());
console.log(Number(tdElems[0].innerText) == "number");
//45) Delete the last letter from the heading each time the user clicks on it
// let h1Content = document.querySelector("h1");
// // let arrOfH1Content=[]
// // h1Content.innerText;
// console.log(h1Content.innerText);

// document.querySelector("h1").onclick = function () {
//   for (let i = 0; h1Content.length; i++) {
//     h1Content.innerText;
//     // h1Content.slice(h1Content.length);
//     h1Content.substr(0, h1Content.length - 1);
//   }
// };

//46) Change the background color of a <td> if the user clicks on it
function backgroundColor(e) {
  e.currentTarget.style.backgroundColor = "lightgreen";
  console.log(e.currentTarget);
}

for (let i = 0; i < tdElems.length; i++) {
  tdElems[i].addEventListener("click", backgroundColor);
}

// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
let deleteTd = document.querySelector("#deleteTd");
deleteTd.addEventListener("click", function deleteCell() {
  tdElems[Math.floor(Math.random() * tdElems.length)].style.display = "none";
});

//  48) Add automatically a pink border to a cell when the mouse hovers it
function pinkBorder(e) {
  e.currentTarget.style.borderColor = "pink";
  console.log(e.currentTarget);
}
function greenBorder(e) {
  e.currentTarget.style.borderColor = "green";
  console.log(e.currentTarget);
}

for (let i = 0; i < tdElems.length; i++) {
  tdElems[i].addEventListener("mouseover", pinkBorder);
  tdElems[i].addEventListener("mouseout", greenBorder);
}

// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
// function createTable(rowNum, colNum) {
//   //for (let i = 1; i <= rowNum; i++) {
//   for (let j = 1; i <= colNum; j++) {
//     let row = document.createElement("tr");
//     let col = document.createElement("td");
//     col.textContent = "something new";
//     row.appendChild(col);
//   }
//   //}
// }
// createTable(4, 3);

// 50) Write a function to remove the last table from the page
