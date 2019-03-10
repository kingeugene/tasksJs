'use strict';

let button = document.querySelector('.buttonAn'),
    item = document.querySelector('.item');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 450) {
            clearInterval(id);
        }else {
            pos++;
            item.style.top = pos + 'px';
            item.style.left = pos + 'px';
        }
    }
}
button.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.btn-block'),
    btn = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
   if (event.target && event.target.tagName == 'BUTTON') {
       console.log('Hello');
   }
});
