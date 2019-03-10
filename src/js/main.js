'use strict';

    let startBtn = document.getElementById('start'),
        budgetValue = document.getElementsByClassName('budget-value')[0],
        daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
        levelValue = document.getElementsByClassName('level-value')[0],
        expensesValue = document.getElementsByClassName('expenses-value')[0],
        optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
        incomeValue = document.getElementsByClassName('income-value')[0],
        monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
        yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


        expensesItem = document.getElementsByClassName('expenses-item'),
        expensesBtn = document.getElementsByTagName('button')[0],
        optionalexpensesBtn = document.getElementsByTagName('button')[1],
        countBtn = document.getElementsByTagName('button')[2],
        optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
        chooseIncome = document.querySelector('.choose-income'),
        savings = document.querySelector('#savings'),
        sumValue = document.querySelector('.choose-sum'),
        percentValue = document.querySelector('.choose-percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value');


let money, time;


startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '1993-01-26');
    money = +prompt('Ваш бюджет на месяц?', '');


    while ( isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timedata = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date( Date.parse(time) ).getFullYear();
    monthValue.value = new Date( Date.parse(time) ).getMonth() + 1;
    dayValue.value = new Date( Date.parse(time) ).getDate();

    savings.removeAttribute('disabled');


});

expensesBtn.addEventListener('click', function () {
    if ( appData.budget == undefined ) {
        expensesBtn.preventDefault();
    }
    let sum = 0;

    for ( let i = 0; i < expensesItem.length; i++ ) {
        let article = expensesItem[i].value,
            price = expensesItem[++i].value;


        if ( (typeof(article) ) === "string" && ( typeof(article) ) != null && ( typeof(price) ) != null
            && article != '' && price != '' && article.length < 50 ) {
            console.log('done');
            appData.expenses[article] = price;
            sum += +price;
        }else {
            console.log('wrong');
        }

    }
    expensesValue.textContent = sum;

});

optionalexpensesBtn.addEventListener('click',  function () {
    if ( appData.budget == undefined ) {
        optionalexpensesBtn.preventDefault();
    }
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let stateNo = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = stateNo;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});



countBtn.addEventListener('click', function () {
    if ( appData.budget == undefined ) {
        countBtn.preventDefault();
    }
    if (appData.budget != undefined) {
        appData.moneyPerDay = ( (appData.budget - (+expensesValue.textContent))  / 30).toFixed();

        daybudgetValue.textContent = appData.moneyPerDay;

        if ( appData.moneyPerDay < 100 ) {
            levelValue.textContent = 'Минимальный уровень достатка';
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        }else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        }else {
            levelValue.textContent = 'Ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Ошибка';
    }

});

chooseIncome.addEventListener('input', function () {
    if ( appData.budget == undefined ) {
        chooseIncome.preventDefault();
    }
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});



savings.addEventListener('click', function () {
    if ( appData.budget == undefined ) {

        savings.preventDefault();
    }

    if (appData.savings == true) {
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});




sumValue.addEventListener('input', function () {
    if ( appData.budget == undefined ) {
        sumValue.preventDefault();


    }
   if (appData.savings == true ) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

       appData.maothIncome = sum/100/12*percent;
       appData.yearIncome = sum/100*percent;

       monthsavingsValue.textContent = appData.maothIncome.toFixed();
       yearsavingsValue.textContent = appData.yearIncome.toFixed();

   }
});

percentValue.addEventListener('input', function () {
    if ( appData.budget == undefined ) {
        percentValue.preventDefault();
    }
    if (appData.savings == true ) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.maothIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.maothIncome.toFixed();
        yearsavingsValue.textContent = appData.yearIncome.toFixed();
    }
});



let appData = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

};

if (appData.budget == undefined) {
    savings.setAttribute('disabled', 'disabled');
}





