// btn pass home
const btnRight = window.document.querySelector('.partner-brand-btn.-right')
const btnLeft = window.document.querySelector('.partner-brand-btn.-left')
const elements = window.document.querySelector('.partner-band-carousel-elements')
let move = 0


btnRight.addEventListener('click', function(){
    move = move + 100;
    elements.style = `transform: translateX(${move}px);`
})

btnLeft.addEventListener('click', function(){
    move = move - 100;
    elements.style = `transform: translateX(${move}px);`
})


// menu mobile
const menu = window.document.querySelector('.menu')
const btnOpen = window.document.querySelector('.menu-hamburguer')
const btnClose = window.document.querySelector('.close')

btnOpen.addEventListener('click', function(){
    menu.classList.add('menu-open'); 
})

btnClose.addEventListener('click', function(){
    menu.classList.remove('menu-open'); 
})
