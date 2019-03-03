'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
console.log(wrapper);

box.style.backgroundColor = '#000';
btn[1].style.borderRadius = '100%';
circle[0].style.background = 'red';
circle[1].style.background = 'orange';
circle[2].style.background = 'green';

// for ( let i = 0; i < heart.length; i++) {
//     heart[i].style.background = 'red';
// }
// heart.forEach(function (item) {
//     item.style.background = 'red';
// });

let div = document.createElement('div');

div.classList.add('black');

// document.body.appendChild(div);
div.innerText = 'Hello Word'
wrapper.appendChild(div);
wrapper.insertBefore(div, circle[0]);
wrapper.removeChild(circle[2]);
// document.body.replaceChild(btn[1], wrapper);