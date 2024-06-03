var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
});

let overflowBtn = document.querySelectorAll("#arrow")
let overflowBox = document.querySelectorAll("#overflow")

overflowBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        overflowBox[index].classList.toggle("hidden")
    })
    // overflowBox[index].classList.toggle("hidden")
    // overflowBox[index].classList.remove("flex")
})
