let sliderBox = document.querySelector(".slider")
let slideElement = document.querySelectorAll(".slider__slide")
let checkIndex = 0
let buttonRight = document.querySelector(".right")
let buttonLeft = document.querySelector(".left")
sliderBox.classList.add("new")

function showSlideElement(index){
    sliderBox.style.transform = `translateX(${index*100}%)`
    /* Ця функція переміщує слайди вліво та вправо, завдяки transform для елементу слайдера, 
    де всередині кожен елемент рухається на 100% ширини слайдера */

}

function goNextSlide(){
    slideElement[checkIndex].classList.remove("new")
    checkIndex = (checkIndex + 1) % slideElement.length
        /* window.location.href="../game/index.html" */
    slideElement[checkIndex].classList.add("new")
    showSlideElement(checkIndex)
}
buttonRight.addEventListener("click", goNextSlide)

function goPrevSlide(){
    slideElement[checkIndex].classList.remove("new")
        checkIndex = (checkIndex - 1 + slideElement.length) % slideElement.length
    slideElement[checkIndex].classList.add("new")
    showSlideElement(checkIndex)
    }
buttonLeft.addEventListener("click", goPrevSlide)

/* Ці функціі змінюють наш checkIndex (0), для того, щоб відобразити 
наступний/попередній слайд */

goNextSlide(checkIndex)
showSlideElement(checkIndex)

/* function upDateSlide(){
    for(let i = 0; i <; i++){

    }
} */