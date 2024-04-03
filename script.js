let sliderBox = document.querySelector(".slider")
let slideElement = document.querySelectorAll(".slider__slide")
let checkIndex = 0
let colors = ["#5733FF", "#c23515", "#33FF57", "#13d5a4"]

function showSlideElement(index){
    sliderBox.style.transform = `translateX(-${index*100}%)`
    /* Ця функція переміщує слайди вліво та вправо, завдяки transform для елементу слайдера, 
    де всередині кожен елемент рухається на 100% ширини слайдера */
}

function toSlide(index){
    checkIndex = index
    showSlideElement(checkIndex)
    document.body.style.backgroundColor = colors[index]
}

function goNextSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
    checkIndex = (checkIndex + 1) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSlideElement(checkIndex)
}

function goPrevSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
        checkIndex = (checkIndex - 1 + slideElement.length) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSlideElement(checkIndex)
    }

/* Ці функціі змінюють наш checkIndex (0), для того, щоб відобразити 
наступний/попередній слайд */

showSlideElement(checkIndex)

let firstSlide = document.querySelector(".slider__dots__groop-element-1")
let secondSlide = document.querySelector(".slider__dots__groop-element-2")
let thirdSlide = document.querySelector(".slider__dots__groop-element-3")
let fourSlide = document.querySelector(".slider__dots__groop-element-4")

firstSlide.addEventListener("click", function(){
    toSlide(0)
})

secondSlide.addEventListener("click", function(){
    toSlide(1)
})

thirdSlide.addEventListener("click", function(){
    toSlide(2)
})

fourSlide.addEventListener("click", function(){
    toSlide(3)
})


let hamburgerHeader = document.querySelector(".header__label")
let mobileLine = document.querySelector(".mobile-line")
let menuBlock = document.querySelector(".block-menu")
let cirkelMenu = document.querySelector(".mobile__menu-cirkel")
let textHeader = document.querySelector(".header-list")
let navigationImg = document.querySelector(".Navigation-img")
hamburgerHeader.addEventListener("click", function(){
    if(mobileLine.className === "mobile-line"){
        mobileLine.classList.add("open-hamburger")
        menuBlock.classList.add("Open-block")
        cirkelMenu.classList.add("colour-cirkel")
        textHeader.classList.add("Open-text")
        navigationImg.classList.add("Open-img")
    }
    else{
        mobileLine.classList.remove("open-hamburger")
        menuBlock.classList.remove("Open-block")
        cirkelMenu.classList.remove("colour-cirkel")
        textHeader.classList.remove("Open-text")
        navigationImg.classList.remove("Open-img")
    }
})




let headerEarth = document.querySelector(".header-Earth")
let headerMars = document.querySelector(".header-Mars")
let headerSaturn = document.querySelector(".header-Saturn")
let headerMercury = document.querySelector(".header-Mercury")

let earthImg = document.querySelector(".navigation__Earth-img")
let marsImg = document.querySelector(".navigation__Mars-img")
let saturnImg = document.querySelector(".navigation__Saturn-img")
let mercuryImg = document.querySelector(".navigation__Mercury-img")
let boxImg = document.querySelector(".Navigation-img")

headerMars.addEventListener("mouseenter", function(){
    earthImg.classList.add("novisible-Earth")
    mercuryImg.classList.remove("visible-Mercury")
    saturnImg.classList.remove("visible-Saturn")
    marsImg.classList.add("visible-Mars")
})
headerSaturn.addEventListener("mouseenter", function(){
    marsImg.classList.remove("visible-Mars")
    mercuryImg.classList.remove("visible-Mercury")
    earthImg.classList.add("novisible-Earth")
    saturnImg.classList.add("visible-Saturn")
})
headerMercury.addEventListener("mouseenter", function(){
    saturnImg.classList.remove("visible-Saturn")
    marsImg.classList.remove("visible-Mars")
    earthImg.classList.add("novisible-Earth")
    mercuryImg.classList.add("visible-Mercury")
})
headerEarth.addEventListener("mouseenter", function(){
    mercuryImg.classList.remove("visible-Mercury")
    saturnImg.classList.remove("visible-Saturn")
    marsImg.classList.remove("visible-Mars")
    earthImg.classList.remove("novisible-Earth")
})


let navigationFirst = document.querySelector(".header-Earth")
let navigationSecond = document.querySelector(".header-Mars")
let navigationThird = document.querySelector(".header-Saturn")
let navigationFour = document.querySelector(".header-Mercury")

navigationFirst.addEventListener("click", function(){
    toSlide(0)
    mobileLine.classList.remove("open-hamburger")
    menuBlock.classList.remove("Open-block")
    cirkelMenu.classList.remove("colour-cirkel")
    textHeader.classList.remove("Open-text")
    navigationImg.classList.remove("Open-img")
})

navigationSecond.addEventListener("click", function(){
    toSlide(1)
        mobileLine.classList.remove("open-hamburger")
        menuBlock.classList.remove("Open-block")
        cirkelMenu.classList.remove("colour-cirkel")
        textHeader.classList.remove("Open-text")
        navigationImg.classList.remove("Open-img")
})

navigationThird.addEventListener("click", function(){
    toSlide(2)
        mobileLine.classList.remove("open-hamburger")
        menuBlock.classList.remove("Open-block")
        cirkelMenu.classList.remove("colour-cirkel")
        textHeader.classList.remove("Open-text")
        navigationImg.classList.remove("Open-img")
})

navigationFour.addEventListener("click", function(){
    toSlide(3)
        mobileLine.classList.remove("open-hamburger")
        menuBlock.classList.remove("Open-block")
        cirkelMenu.classList.remove("colour-cirkel")
        textHeader.classList.remove("Open-text")
        navigationImg.classList.remove("Open-img")
})


/* function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        if (i === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    }
} - це другий варіант */


/* function upDateSlide(){
    for(let i = 0; i <; i++){

    }
} */

