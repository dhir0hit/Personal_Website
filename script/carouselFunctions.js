slides = Array.from(document.querySelectorAll(".carousel_container-content"));
slidesNavigator = Array.from(document.querySelectorAll(".carousel_navigator"));
let activeSlideNumber = 0;
let leftButton = document.getElementById("carousel-left_button");
let rightButton = document.getElementById("carousel-right_button");

let autoSlider = setInterval(function () {
    changeSlide(1);
}, 8000);

// console.log(slides[0].classList);

function changeSlideUsingNavbar(Id, direct){
    if (activeSlideNumber===1 && Id===2){
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-left")
    }
    if (activeSlideNumber===1 && Id===0){
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-right")
    }

    if (Id !== activeSlideNumber) {
        slides[Id].classList.add("active-slide");
        slides[activeSlideNumber].classList.remove("active-slide");

        slidesNavigator[Id].classList.add("active-slide");
        slidesNavigator[activeSlideNumber].classList.remove("active-slide");
        activeSlideNumber = Id;
    }

    clearInterval(autoSlider);
    autoSlider = setInterval(function () {
        changeSlide(1);
    }, 8000);
}

function changeSlide(increment) {
    if (activeSlideNumber===1 && increment===1){
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-left")
    }
    if (activeSlideNumber===1 && increment===-1){
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-right")
    }

    if (activeSlideNumber===2 && increment === 1){
        activeSlideNumber=0
        slides[0].classList.add("active-slide");
        slides[2].classList.remove("active-slide");

        slidesNavigator[0].classList.add("active-slide");
        slidesNavigator[2].classList.remove("active-slide");
    }
    else if (activeSlideNumber === 0 && increment == -1) {
        activeSlideNumber=2
        slides[2].classList.add("active-slide");
        slides[0].classList.remove("active-slide");

        slidesNavigator[2].classList.add("active-slide");
        slidesNavigator[0].classList.remove("active-slide");
    }
    else {
        slides[activeSlideNumber + parseInt(increment)].classList.add("active-slide");
        slides[activeSlideNumber].classList.remove("active-slide");

        slidesNavigator[activeSlideNumber + parseInt(increment)].classList.add("active-slide");
        slidesNavigator[activeSlideNumber].classList.remove("active-slide");

        activeSlideNumber += parseInt(increment);
    }


    if (activeSlideNumber===0) {
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-right")
    }
    if (activeSlideNumber===2) {
        slides[1].classList.remove("transition-right")
        slides[1].classList.remove("transition-left")

        slides[1].classList.add("transition-left")
    }

    clearInterval(autoSlider);
    autoSlider = setInterval(function () {
        changeSlide(1);
    }, 8000);
}