const btnRight = window.document.querySelector('.partner-brand-btn.-right')
const btnLeft = window.document.querySelector('.partner-brand-btn.-left')
const elements = window.document.querySelector('.partner-band-carousel-elements')
let move = 100


btnRight.addEventListener('click', function(){
    move = move + 100;
    elements.style = `transform: translateX(${move}px);`
})

btnLeft.addEventListener('click', function(){
    move = move - 100;
    elements.style = `transform: translateX(${move}px);`
})