window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    function tabModule(tabbAll, headerTab, tabCont) {
        let tab = document.querySelectorAll('.' + tabbAll),
            info = document.querySelector('.' + headerTab),
            tabContent = document.querySelectorAll('.' + tabCont);



        function hideContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideContent(1);

        function showContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.add('show');
                tabContent[b].classList.remove('hide');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains(tabbAll) ) {
                for ( let i = 0; i < tab.length; i++ ) {
                    if (target == tab[i]) {
                        hideContent(0);
                        showContent(i);
                        break;
                    }

                }
            }
        })
    }
    tabModule('info-header-tab', 'info-header', 'info-tabcontent');

    //Timer

    let deadline = '2019-03-18';
    
    function getTimeReaming(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60) );
        if (seconds.toString().length < 2 ) {
            seconds = '0' + seconds;
        }
        if (minutes.toString().length < 2 ) {
            minutes = '0' + seconds;
        }
        if (hours.toString().length < 2 ) {
            hours = '0' + seconds;
        }
        if (seconds < 0  ) {
            seconds = '00';
            minutes = '00';
            hours = '00';
        }

        return {
          'total' : t,
          'hours' : hours,
          'minutes' : minutes,
          'seconds' : seconds
        };
    }
    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeReaming(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }
        
    }
    setClock('timer', deadline);

    //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        cloce = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelector('.description-btn'),
        main = document.querySelector('body');

    main.addEventListener('click', function () {
            let target = event.target;
            if (target == more || target == descriptionBtn) {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            }

    });
    cloce.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


});
// End Modal

class  Option {

    constructor( heightEL, width, bg, fontSize, textAlign) {
         this.blockItem = document.createElement('div');
        this.blockItem.style.height = heightEL;
        this.blockItem.style.width = width;
        this.blockItem.style.background = bg;
        this.blockItem.style.fontSize = fontSize;
        this.blockItem.style.textAlign = textAlign;



    }

    appendEl(text) {
document.body.append(this.blockItem);
this.blockItem.textContent = text;
    }
}
let user = new Option('20px', '30px', 'red', '16px', 'center'),
    login = new Option('50px', '100%', 'yellow', '30px', 'center');
user.appendEl('lalalalalalalal');
login.appendEl('lorem');
