let boxShadow = document.querySelectorAll(".box-shadow")
window.addEventListener("mousemove", function(event){
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < boxShadow.length; i++){
        let list = boxShadow[i]
        list.style.transform = `translate(-${x/90}px, -${y/90}px)`
    }
})