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

