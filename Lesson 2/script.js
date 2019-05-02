'use strict';

let num = 50;

if (num < 49) {
    console.log("Неверно!");
}
else if (num > 100) {
    console.log("Много!");
}
else {
    console.log("Верно!");
}

(num == 50) ? console.log("Верно") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num === 50:
        console.log("Верно!");
        break;        
}

// 1. Какое будет выведено значение: let x = 5; alert( x++ ); ? 5
//    let x = 5; alert( x++ );
// 2. Чему равно такое выражение: [ ] + false - null + true ? NaN
// alert([ ] + false - null);
// 3. Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2
// let y = 1; let x = y = 2; alert(x);
// 4. Чему равна сумма [ ] + 1 + 2? 12
// console.log([ ] + 1 + 2);
// 5. Что выведет этот код: alert( "1"[0] )? 1
// alert( "1"[0] );
// 6. Чему равно 2 && 1 && null && 0 && undefined ? null
// console.log(2 && 1 && null && 0 && undefined);
// 7. Есть ли разница между выражениями? !!( a && b ) и (a && b)? есть, в первом случае false, во втором undefined
// let a;
// let b;
// console.log(!!( a && b ));
// console.log(a && b);
// 8. Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? да
// 9. Что выведет этот код: alert( +"Infinity" ); ?  Infinity
// alert( +"Infinity" );
// 10. Верно ли сравнение: "Ёжик" > "яблоко"? false
// console.log("Ёжик" > "яблоко")
// 11. Чему равно 0 || "" || 2 || undefined || true || falsе ? 2
// console.log(0 || "" || 2 || undefined || true || falsе);