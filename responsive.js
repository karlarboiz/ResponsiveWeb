"use strict";

const menuHandler = document.querySelector('.menu');
const navOptions = document.querySelector('.nav-options__main');
const overlay = document.querySelector('#overlay');
const hideTab = document.querySelector('.hide-tab');
menuHandler.addEventListener('click',
()=> {
    navOptions.classList.replace('nav-options','nav-options__tab');
    overlay.classList.remove('hide');
})

window.addEventListener('resize',()=>{
    if(window.innerWidth < 670) {
        
        hideTab.classList.remove('hide');
    }

    else{
        overlay.classList.add('hide');
        hideTab.classList.add('hide');
        navOptions.classList.replace('nav-options__tab','nav-options');

    }
})


hideTab.addEventListener('click',()=>{
    navOptions.classList.replace('nav-options__tab','nav-options');
    overlay.classList.add('hide');
})

