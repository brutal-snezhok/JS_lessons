'use strict';

a = 5;
console.log(a);

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};


console.log(4 / 0);
console.log("string" * 9);

let something;
console.log(something);

let person = {
    name: "Jhon",
    age: 25,
    isMaried: false
}
console.log(person["name"]);

let arr = ["plum.png", "orange.jpeg", "apple.bmp"];
console.log(arr[0])

alert("Hello world!");
let answer = confirm("Are you here?");
console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer));

console.log("arr" + " - object");
console.log(4 + +' - object');

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5 % 2);
console.log("2" == 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || isClose);