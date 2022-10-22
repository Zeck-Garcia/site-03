// menu mobile
const menu = window.document.querySelector('.menu')
const btnOpen = window.document.querySelector('.menu-hamburguer')
const btnClose = window.document.querySelector('.close')

btnOpen.addEventListener('click', function(event){
    event.preventDefault()
    menu.classList.add('menu-open'); 
    console.log('ae');
})

btnClose.addEventListener('click', function(event){
    event.preventDefault()
    menu.classList.remove('menu-open'); 
})