'use strict';

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//   alert('Вы нажали перевую кнопку');
// };


// btn[0].addEventListener('mouseenter', function () {
//    alert('Вы навели на кнопку');
// });

// btn[0].addEventListener('click', function (event) {
//     let target = event.target;
//     target.style.background = 'red';
//
//     // console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target );
// });
// link.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target );
// });

btn.forEach(function (item) {
   item.addEventListener('mouseleave', function () {
      item.style.background = 'red';
   });
});