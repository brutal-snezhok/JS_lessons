'use strict';
//2
let money = prompt("Ваш бюджет на месяц?",  "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

//4
let mandatoryArticly = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch = prompt("Во сколько обойдется?");
//3
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        mandatory: mandatoryArticly,
        how: howMuch
    },
    optionalExpenses: {

    },
    income: {

    },
    savings: false
}

alert(appData.budget / 30);