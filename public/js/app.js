
let overflowBtn = document.querySelectorAll("#arrow")
let overflowBox = document.querySelectorAll("#overflow")

overflowBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        overflowBox[index].classList.toggle("hidden")
    })
    // overflowBox[index].classList.toggle("hidden")
    // overflowBox[index].classList.remove("flex")
})


let closeMenu = document.querySelector("#closeMenu")
let hamburgerMenu = document.querySelector("#hamburgerMenu")
let responsiveBox = document.querySelector("#responsiveBox")


hamburgerMenu.addEventListener('click' , function(){
    responsiveBox.classList.add("right-0")
    responsiveBox.classList.remove("-right-full")
})
closeMenu.addEventListener('click' , function(){
    responsiveBox.classList.add("-right-full")
    responsiveBox.classList.remove("right-0")
})