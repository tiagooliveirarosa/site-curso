const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlider = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function hideSlider() {
    slider[currentSlider].classList.add('on')
} 

function nextSlider() {
    hideSlider()
    if(currentSlider == slider.length -1) {
        currentSlider = 0 
    } else {
        currentSlider++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlider == 0) {
        currentSlider = slider.length -1 
    } else {
        currentSlider--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


console.log(slider)