'use strict';

let money, time;

function start() {
     money = +prompt('Ваш бюджет на месяц?', '');
     time = prompt('Введите дату в формате YYYY-MM-DD', '1993-01-26');

     while (isNaN(money) || money == '' || money == null) {
         money = +prompt('Ваш бюджет на месяц?', '');
     }
}
start();

let appData = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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

    }
}
chooseExpenses();


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
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert( 'Ежедневный бюджет ' + appData.moneyPerDay );
}
detectDayBudget();

function detectLevel() {
    if ( appData.moneyPerDay < 100 ) {
        console.log('Минимальный уровень достатка');
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    }else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    }else {
        console.log('Ошибка');
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сума накопления?', ''),
            percent = +prompt('Под какой процент', '');

        appData.maothIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита ' + appData.maothIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let stateNo = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = stateNo;
    }

}
chooseOptExpenses();