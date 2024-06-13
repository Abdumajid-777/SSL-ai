
let overflowBtn = document.querySelectorAll("#arrow")
let overflowBox = document.querySelectorAll("#overflow")
let body = document.querySelector("body")

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


hamburgerMenu.addEventListener('click', function () {
    responsiveBox.classList.add("right-0")
    responsiveBox.classList.remove("-right-full")
    body.classList.add("overflow-hidden")
})
closeMenu.addEventListener('click', function () {
    responsiveBox.classList.add("-right-full")
    responsiveBox.classList.remove("right-0")
    body.classList.remove("overflow-hidden")
})

let arrowBtn = document.querySelectorAll("#arrowBtn")
let shrink = document.querySelectorAll("#shrink")
let shrink1 = document.querySelectorAll("#shrink1")


arrowBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        // shrink[index].classList.remove("flex")
        shrink1[index].classList.toggle('hidden')
        shrink[index].classList.toggle('hidden')
    })
})