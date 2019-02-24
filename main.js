'use strict';

// firstlesson
let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1993-01-26');

let appData = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for ( let i = 0; i < 2; i++ ) {
    let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
        price = prompt('Во сколько обойдется?', '');

    if ( (typeof(article) ) === "string" && ( typeof(article) ) != null && ( typeof(price) ) != null
        && article != '' && price != '' && article.length < 50 ) {
        console.log('done');
        appData.expenses[article] = price;
    }else {
        console.log('wrong');
    }

};

// let i = 0;
// while( i < 2 ) {
//     let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         price = prompt('Во сколько обойдется?', '');
//
//     if ( (typeof(article) ) === "string" && ( typeof(article) ) != null && ( typeof(price) ) != null
//         && article != '' && price != '' && article.length < 50 ) {
//         console.log('done');
//         appData.expenses[article] = price;
//     }else {
//        console.log('wrong');
//     }
//     i++;
// };

// let i = 0;
// do {
//     let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         price = prompt('Во сколько обойдется?', '');
//
//     if ( (typeof(article) ) === "string" && ( typeof(article) ) != null && ( typeof(price) ) != null
//         && article != '' && price != '' && article.length < 50 ) {
//         console.log('done');
//         appData.expenses[article] = price;
//     }else {
//         console.log('wrong');
//     }
//     i++;
// }while ( i < 2 );

appData.moneyPerDay = appData.budget / 30;

alert( 'Ежедневный бюджет ' + appData.moneyPerDay );

if ( appData.moneyPerDay < 100 ) {
    console.log('Минимальный уровень достатка');
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
}else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
}else {
    console.log('Ошибка');
}


