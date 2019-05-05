'use strict';
 
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple";    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;

// let menuItems = document.querySelectorAll(".menu .menu-item");
// let menu = document.querySelector(".menu");
// menu.appendChild(menuItems[2]);
// menu.appendChild(menuItems[1]);
// menu.appendChild(menuItems[3]);
// let fifthElem = document.createElement("li");
// fifthElem.innerHTML = "<li class=\"menu-item\">Пятый пункт</li>";
// menu.appendChild(fifthElem);
// document.body.style.background = "url(apple_true.jpg) center no-repeat";

// let idHeader = document.getElementById("title");
// idHeader.innerHTML = "Мы продаем только подлинную технику Apple";
// let adv = document.body.querySelector(".adv");
// let column = document.querySelectorAll(".column");
// column[1].removeChild(adv);

// let promptt = document.getElementById("prompt");
// promptt.innerHTML = prompt("Каково ваше отношение к технике apple?"); 