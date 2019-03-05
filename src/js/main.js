'use strict';
window.onload = function() {
    let start = document.getElementById('start'),
        resultTable = document.querySelector('.result-table'),
        expensesItem = document.getElementsByClassName('expenses-item'),
        buttonT = document.getElementsByClassName('optionalexpenses-btn'),
        ButtonB = document.getElementsByClassName('count-budget-btn'),
        optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
        chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value');
    console.log(expensesItem );
    console.log(resultTable.children.length);
    let colorB;
    for (let i = 0; i < resultTable.children.length; i += 2) {
        console.log(typeof(resultTable.childNodes[i]));
    }


};