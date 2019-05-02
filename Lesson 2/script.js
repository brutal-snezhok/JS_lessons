'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: {},
    timeData: time,
    savings: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?");

    if (typeof (a) === "string" && (typeof (a) != null)
        && (typeof (b) != null)
        && a != "" && b != "" && a.length < 50) {

        appData.expenses[a] = b;
    }
    else {
        console.log ("bad result");
        i--;
    }
}

//1
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?");

//     if (typeof (a) === "string" && (typeof (a) != null)
//         && (typeof (b) != null)
//         && a != "" && b != "" && a.length < 50) {

//         appData.expenses[a] = b;
//     }
//     else {
    // console.log ("bad result");
    // i--;
//     }
// } while (i++ < 2);

//2
// let i = 0;
// while(i++ < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?");

// if (typeof (a) === "string" && (typeof (a) != null)
//     && (typeof (b) != null)
//     && a != "" && b != "" && a.length < 50) {

//     appData.expenses[a] = b;
// }
// else {
    // console.log ("bad result");
    // i--;
// }
// }

appData.moneyPerDAy = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDAy);

if (appData.moneyPerDAy < 100) {
    console.log("Минимальный уровень достатка");
}
else if (appData.moneyPerDAy > 100 && appData.moneyPerDAy < 2000) {
    console.log("Средний уровень достатка");
}
else if (appData.moneyPerDAy > 2000) {
    console.log("Высокий уровень достатка");
}
else {
    console.log("Произошла ошибка");
}