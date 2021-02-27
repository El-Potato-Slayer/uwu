const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const totalSections = document.querySelectorAll('.slide').length

let sliderIndex = 0

rightArrow.addEventListener('click', function() {
  // sliderIndex = (sliderIndex < totalSections - 1) ? sliderIndex + 1 : totalSections - 1;
  if (sliderIndex < totalSections - 1) {
    sliderIndex++ 
    leftArrow.classList.remove('hidden')
  }
  slider.style.transform = `translateX(calc((-100% * ${sliderIndex} )/ ${totalSections}))`
  if (sliderIndex === totalSections - 1) {
    rightArrow.classList.add('hidden')
  }
})

leftArrow.addEventListener('click', function() {
  // sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0;
  if (sliderIndex > 0){
    sliderIndex--;
    rightArrow.classList.remove('hidden')
  }
  slider.style.transform = `translateX(calc((-100% * ${sliderIndex} )/ ${totalSections}))`
  if (sliderIndex === 0) {
    leftArrow.classList.add('hidden')
  }
})