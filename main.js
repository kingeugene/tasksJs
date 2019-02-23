'use strict'

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1993-01-26');
let article = prompt('Введите обязательную статью расходов в этом месяце', '');
let price = +prompt('Во сколько обойдется?', '');
let appData = {
    budget: money,
    timedata: time,
    expenses: {
        article: price
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};
let moneyDay = money / 30;
alert( moneyDay );

