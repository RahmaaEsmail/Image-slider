// reference
const imgBoxEl = document.querySelectorAll('.img-box');
const arrowRightEle = document.querySelector('.arrow-right');
const arrowLeftEle = document.querySelector('.arrow-left');
const arrowDownEle = document.querySelector('.arrow-down');
const arrowUpEle = document.querySelector('.arrow-up');
const bults = document.querySelectorAll('.bults li');
let count = 2;


// show expanding img
const slider = function (img) {
    imgBoxEl.forEach(img => {
        img.classList.remove('choosen__img--grow')
    })
    img.classList.add('choosen__img--grow')
}

imgBoxEl.forEach(img => {
    img.addEventListener('click', function () {
        slider(this)
    })
})


// select bults to show img
const selectBult = function (selectedBult) {
    bults.forEach(bult => {
        bult.classList.remove('active')
    })
    selectedBult.classList.add('active')

    // Get id from data-id in li to show images when clicking on bults
    let imgId = selectedBult.dataset.id
    slider(imgBoxEl[imgId])
}

bults.forEach(bult => {
    bult.addEventListener('click', () => {
        selectBult(bult)
    })
})

// get next slide when click on arrow
const nextSlide = function () {
    count++;
    if (count >= imgBoxEl.length)
        count = 0;

    slider(imgBoxEl[count])

    // get index of img to activate the bult
    let indexOfBults = Array.from(imgBoxEl).indexOf(imgBoxEl[count])
    selectBult(bults[indexOfBults])
}

// get prev slide when click on arrow
const prevSlide = function () {
    count--;
    if (count < 0)
        count = imgBoxEl.length - 1;
    slider(imgBoxEl[count])

    // get index of img to activate the bult
    let indexOfBults = Array.from(imgBoxEl).indexOf(imgBoxEl[count])
    selectBult(bults[indexOfBults])
}


// Handle Events
arrowRightEle.addEventListener('click', nextSlide)
arrowLeftEle.addEventListener('click', prevSlide)
arrowDownEle.addEventListener('click', nextSlide)
arrowUpEle.addEventListener('click', prevSlide)
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight')
        nextSlide()
    if (e.key == 'ArrowLeft')
        prevSlide()
})
