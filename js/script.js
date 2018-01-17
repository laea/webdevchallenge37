//work wrapper


const diamond1 = document.querySelector('.work__diamond1');
const diamond2 = document.querySelector('.work__diamond2');
const diamond3 = document.querySelector('.work__diamond3');

function WrapIn1(){
  document.getElementsByClassName('work__hidden1')[0].classList.add('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.add('work__diamond--fixed');

}
function WrapIn2(){
  document.getElementsByClassName('work__hidden2')[0].classList.add('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.add('work__diamond--fixed');

}
function WrapIn3(){
  document.getElementsByClassName('work__hidden3')[0].classList.add('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.add('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.add('work__diamond--fixed');

}

diamond1.addEventListener('mouseover', WrapIn1);
diamond2.addEventListener('mouseover', WrapIn2);
diamond3.addEventListener('mouseover', WrapIn3);

function WrapOut1(){
  document.getElementsByClassName('work__hidden1')[0].classList.remove('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.remove('work__diamond--fixed');

}
function WrapOut2(){
  document.getElementsByClassName('work__hidden2')[0].classList.remove('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.remove('work__diamond--fixed');

}
function WrapOut3(){
  document.getElementsByClassName('work__hidden3')[0].classList.remove('work__hidden--fixed');
  document.getElementsByClassName('work__diamond')[0].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[1].classList.remove('work__diamond--fixed');
  document.getElementsByClassName('work__diamond')[2].classList.remove('work__diamond--fixed');

}

diamond1.addEventListener('mouseout', WrapOut1);
diamond2.addEventListener('mouseout', WrapOut2);
diamond3.addEventListener('mouseout', WrapOut3);

//slider
const leftBtn = document.querySelector('.team__button--left');
const rightBtn = document.querySelector('.team__button--right');
const sliderContainer = document.querySelector('.team__diamonds');
let sliderOff = false;

function changeSlide(e) {work

  const sliderItems = document.querySelectorAll('.team__diamond');
  const transitionTime = 800;

  if(sliderOff) return;

  sliderOff = true

  setTimeout(function(){
    sliderOff = false;
  }, transitionTime);

  if(e){

     sliderItems[0].classList.remove('team__diamonds--left');
     sliderItems[0].classList.add('team__diamonds--center');

    sliderItems[1].classList.remove('team__diamonds--center');
    sliderItems[1].classList.add('team__diamonds--right');

    sliderItems[2].classList.remove('team__diamonds--right');
    sliderItems[2].classList.add('team__diamonds--behind');

    sliderItems[sliderItems.length - 1].classList.remove('team__diamonds--behind');
    sliderItems[sliderItems.length - 1].classList.add('team__diamonds--left');

    setTimeout(function(){
    sliderContainer.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]);
        }, transitionTime);
  } else {

    sliderItems[0].classList.remove('team__diamonds--left');
    sliderItems[0].classList.add('team__diamonds--behind');

    sliderItems[1].classList.remove('team__diamonds--center');
    sliderItems[1].classList.add('team__diamonds--left');

    sliderItems[2].classList.remove('team__diamonds--right');
    sliderItems[2].classList.add('team__diamonds--center');

    sliderItems[3].classList.remove('team__diamonds--behind');
    sliderItems[3].classList.add('team__diamonds--right');

    setTimeout(function(){
      sliderContainer.appendChild(sliderItems[0]);
        }, transitionTime);
  }
}

leftBtn.addEventListener('click', () => changeSlide(false));
rightBtn.addEventListener('click', () => changeSlide(true));

//clients clicker

const logo1 = document.querySelector('.clients__logo1');
const logo2 = document.querySelector('.clients__logo2');
const logo3 = document.querySelector('.clients__logo3');

function changeImg1() {
  document.getElementsByClassName("clients__text1")[0].style.display = "block";
  document.getElementsByClassName("clients__text2")[0].style.display = "none";
  document.getElementsByClassName("clients__text3")[0].style.display = "none";
  document.getElementsByClassName("clients__logo1")[0].style.outline = "5px solid #BC2E3A";
  document.getElementsByClassName("clients__logo2")[0].style.outline = "0";
  document.getElementsByClassName("clients__logo3")[0].style.outline = "0";
  document.getElementsByClassName("clients__diamond1")[0].style.display = "block";
  document.getElementsByClassName("clients__diamond2")[0].style.display = "none";
  document.getElementsByClassName("clients__diamond3")[0].style.display = "none";
}
function changeImg2() {
  document.getElementsByClassName("clients__text1")[0].style.display = "none";
  document.getElementsByClassName("clients__text2")[0].style.display = "block";
  document.getElementsByClassName("clients__text3")[0].style.display = "none";
  document.getElementsByClassName("clients__logo1")[0].style.outline = "0";
  document.getElementsByClassName("clients__logo2")[0].style.outline = "5px solid #BC2E3A";
  document.getElementsByClassName("clients__logo3")[0].style.outline = "0";
  document.getElementsByClassName("clients__diamond1")[0].style.display = "none";
  document.getElementsByClassName("clients__diamond2")[0].style.display = "block";
  document.getElementsByClassName("clients__diamond3")[0].style.display = "none";
}
function changeImg3() {
  document.getElementsByClassName("clients__text1")[0].style.display = "none";
  document.getElementsByClassName("clients__text2")[0].style.display = "none";
  document.getElementsByClassName("clients__text3")[0].style.display = "block";
  document.getElementsByClassName("clients__logo1")[0].style.outline = "0";
  document.getElementsByClassName("clients__logo2")[0].style.outline = "0";
  document.getElementsByClassName("clients__logo3")[0].style.outline = "5px solid #BC2E3A";
  document.getElementsByClassName("clients__diamond1")[0].style.display = "none";
  document.getElementsByClassName("clients__diamond2")[0].style.display = "none";
  document.getElementsByClassName("clients__diamond3")[0].style.display = "block";

}
logo1.addEventListener('click', changeImg1);
logo2.addEventListener('click', changeImg2);
logo3.addEventListener('click', changeImg3);

//navbar

window.addEventListener('scroll', trans);
function trans() {
  if (window.scrollY > 100){
    document.querySelector('.nav').classList.add("nav__fixed")}
if (window.scrollY < 100) {
  document.querySelector('.nav').classList.remove("nav__fixed")}
}
//smooth scroll

scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementsByClassName("nav__about")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("about"));
});

document.getElementsByClassName("nav__home")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("header"));
});

document.getElementsByClassName("nav__logo")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("header"));
});

document.getElementsByClassName("nav__team")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("team"));
});

document.getElementsByClassName("nav__services")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("services"));
});

document.getElementsByClassName("nav__progress")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("progress"));
});

document.getElementsByClassName("nav__clients")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("clients"));
});

document.getElementsByClassName("nav__work")[0].addEventListener('click', () => {
  scrollTo(document.getElementById("work"));
});

//hamburger menu
const burger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

function menu() {
  nav.classList.toggle('nav--mobile');
}
function menu1(event) {
  if(event.target != burger && event.target != nav) {
  nav.classList.remove('nav--mobile');
}

}
burger.addEventListener('click', menu);
body.addEventListener('click', menu1);
