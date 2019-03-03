let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    div = document.createElement('li'),
    title  = document.getElementById('title'),
    adv = document.querySelector('.adv');


menu.insertBefore(menuItem[1], menuItem[3]);
div.classList.add('menu-item');
div.innerText = 'пятый элемент';
menu.appendChild(div);
document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
title.innerHTML = title.innerHTML.replace(/только/,'только подлинную');
adv.remove();

let pr,
    promp = document.getElementById('prompt');
    setTimeout(function () {
        pr = prompt('Как вы отночитесь к техники apple', '');
        promp.innerText = pr;
    }, 3000);

