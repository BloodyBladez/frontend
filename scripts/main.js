"use strict";

// const modal = document.querySelector('#modal');
// const btn = document.querySelector('#lunge');
// const close = document.querySelector('.close');

// btn.onclick = function () {
//   modal.style.display = 'block';
// };

// close.onclick = function () {
//   modal.style.display = 'none';
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };

    const close = document.querySelector('.close');
    const modal = document.querySelector('#modal');

    close.onclick = function () {
      modal.style.display = 'none';
      des.style.display = 'none';
      des1.style.display = 'none';
      des2.style.display = 'none';
      des3.style.display = 'none';
      des4.style.display = 'none';
      des5.style.display = 'none';
      des6.style.display = 'none';
      des7.style.display = 'none';
      des8.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        des.style.display = 'none';
        des1.style.display = 'none';
        des2.style.display = 'none';
        des3.style.display = 'none';
        des4.style.display = 'none';
        des5.style.display = 'none';
        des6.style.display = 'none';
        des7.style.display = 'none';
        des8.style.display = 'none';
      }
    };


    const des = document.querySelector('#lungeDescription');
    const des1 = document.querySelector('#fencingDescription');
    const des2 = document.querySelector('#circularStrikeDescription');
    const des3 = document.querySelector('#piercingDescription');
    const des4 = document.querySelector('#krovaPassiveDescription');
    const des5 = document.querySelector('#shadowStrikeDescription');
    const des6 = document.querySelector('#fireStrikeDescription');
    const des7 = document.querySelector('#blessDescription');
    const des8 = document.querySelector('#bloodMoonDescription');


    const btn = document.querySelector('#lunge');
    const btn1 = document.querySelector('#fencing');
    const btn2 = document.querySelector('#circularStrike');
    const btn3 = document.querySelector('#piercing');
    const btn4 = document.querySelector('#krovaPassive');
    const btn5 = document.querySelector('#shadowStrike');
    const btn6 = document.querySelector('#fireStrike');
    const btn7 = document.querySelector('#bless');
    const btn8 = document.querySelector('#bloodMoon');

    btn.onclick = function () {
      modal.style.display = 'block';
      des.style.display = 'block';
    };

    btn1.onclick = function () {
      modal.style.display = 'block';
      des1.style.display = 'block';
    };

    btn2.onclick = function () {
      modal.style.display = 'block';
      des2.style.display = 'block';
    };

    btn3.onclick = function () {
      modal.style.display = 'block';
      des3.style.display = 'block';
    };

    btn4.onclick = function () {
      modal.style.display = 'block';
      des4.style.display = 'block';
    };

    btn5.onclick = function () {
      modal.style.display = 'block';
      des5.style.display = 'block';
    };

    btn6.onclick = function () {
      modal.style.display = 'block';
      des6.style.display = 'block';
    };

    btn7.onclick = function () {
      modal.style.display = 'block';
      des7.style.display = 'block';
    };

    btn8.onclick = function () {
      modal.style.display = 'block';
      des8.style.display = 'block';
    };