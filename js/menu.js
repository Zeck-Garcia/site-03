// menu mobile
const menu = window.document.querySelector('.menu')
const btnOpen = window.document.querySelector('.menu-hamburguer')
const btnClose = window.document.querySelector('.close')

btnOpen.addEventListener('click', function(){
    menu.classList.add('menu-open'); 
    console.log('ae');
})

btnClose.addEventListener('click', function(){
    menu.classList.remove('menu-open'); 
})