window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box'),
        btn = document.querySelector('button');

    let width = box.scrollWidth,
        height = box.scrollHeight;

    console.log(width + ' ' + height);
    console.log(box.getBoundingClientRect().left);
    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);

    btn.addEventListener('click', function () {
       box.style.height = box.scrollHeight + 'px';
    });
});