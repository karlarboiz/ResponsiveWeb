"use strict";

// staring with scrolling effects: sticky navbar///

const headerNav = document.querySelector('.nav');
const mainSection = document.querySelector('.main-section');

const navCallBack = (entries,observer) => {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        headerNav.classList.add('sticky');
    }
    else {
        headerNav.classList.remove('sticky');
    }
    
} 

const options = {
    root: null,
    threshold: 0
}

const newObserve = new IntersectionObserver(
    navCallBack,options
)

newObserve.observe(mainSection);


//main section animation on scroll//

const offerH1 = document.querySelector('.offer h1');
const offerP = document.querySelector('.offer p');
const mainSectionCallBack = (entries,observer) => {
    const [entry] = entries;
    if(!entry.isIntersecting) {
        offerH1.classList.add('offer-move__h1');
        offerP.classList.add('animation-reusable')
    }

} 

const mainSectionOption = {
    root: null,
    threshold: 1
}

const mainSectionObserve = new IntersectionObserver(
    mainSectionCallBack,mainSectionOption
)

mainSectionObserve.observe(mainSection);

//highlight

const mainHighlight = document.querySelector('.main-highlight');
const highlightContainers = document.querySelectorAll('.highlight-sub__container');

const mainHighlightCallBack = (entries,observer) => {
    const [entry] = entries;
    if(entry.isIntersecting) {

       for (let vb = 0; vb < highlightContainers.length; vb++) {
        highlightContainers[vb].classList.remove('hidden');
       }
    }
} 

const mainHighlightOption = {
    root: null,
    threshold: 0
}

const mainHighlightObserve = new IntersectionObserver(
    mainHighlightCallBack,mainHighlightOption
)

mainHighlightObserve.observe(mainHighlight);
// 
const workSection = document.querySelector('.work');
const formSection = document.querySelector('.form-call');

const formCallBack = (entries,observer) => {
    const [entry] = entries;
    if(entry.isIntersecting) {
        formSection.classList.remove('another-hidden');
        typeNow();
    }
}

const formOption = {
    root: null,
    threshold: 0
}

const attractInfoObserve = new IntersectionObserver(
    formCallBack, formOption
)

attractInfoObserve.observe(workSection);

// ////////
const textAnimationContainer = document.querySelector('.form-call');
const textAnimation = document.querySelector('.text-animation');

let text = "We have an idea!";
const speed = 50;
let s = 0;
const typeNow = () => {
    textAnimation.textContent += text.charAt(s);
    s++;
    setTimeout(typeNow, speed);
    if(s === text.length) {
        setTimeout(()=>{
            textAnimationContainer.insertAdjacentHTML("beforeend",
            '<p class="text-animation__design text-bottom__design">Join Us Now</p>')
        },1000)
    }
}

const addInvite = () => {

}


// section show collectively //

const sectionItems = document.querySelectorAll('.section-item');

const sectionItemsCallBack = (entries,observer) =>{
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
}

const sectionItemsOption = {
    root: null,
    threshold: .4
}

const sectionItemsObserver = new IntersectionObserver(
    sectionItemsCallBack, sectionItemsOption
)

sectionItems.forEach(
    val => {
        sectionItemsObserver.observe(val);
        val.classList.add('hidden');
    }
)