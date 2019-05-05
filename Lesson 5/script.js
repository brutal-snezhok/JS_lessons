let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options){
    console.log("Свойство " + key + " имеет значение " + options[key])
}

console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + "(массив: " + mass + ")");
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass){
//     console.log(key)
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

//String
//1
console.log(typeof(String(4)));
//2
console.log(typeof("ww" + 5));
console.log("http:/vk.com/catalog/" + 5);

//Number
//1
console.log(typeof(Number(4)));
//2
console.log(typeof(5+ +"5"));
//3
console.log(typeof(parseInt("15px", 10)));

let ans = +prompt("Hello?", "");

//Boolean
//always false: 
// 0
// ""
// null
// undefines
// NaN (напр строку разделить на число)


let switcher = null;

if(switcher){
    console.log("Working...");
}

switcher = 1;

if(switcher){
    console.log("Working...");
}

//2
console.log(typeof(Boolean("5")));

//3
console.log(typeof(!!("5")));
