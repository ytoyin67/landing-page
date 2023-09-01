

const login = document.querySelector('.btn-login')
const overlay = document.querySelector('.body')
const form = document.querySelector('.form')
const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger')
const menuclose = document.querySelector('.menu-close')
const menu = document.querySelector('.mobile-menu')


//login event
login.addEventListener('click', function(e){
    overlay.classList.add('show')
    form.classList.add('show')
})

  // close event
close.addEventListener('click', function(e){
    overlay.classList.remove('show')
    form.classList.remove('show')
})

//window event
window.addEventListener('click', function(e){
  if(e.target === overlay){
   form.classList.remove('show')
   overlay.classList.remove('show')
  } 
})


//     MOBILE FUNCTIONALITY


hamburger.addEventListener('click', function(e){
  if(menu.classList.contains('show')){
    menu.classList.remove('show')
    form.classList.remove('show')
   overlay.classList.remove('show')
  } else {
    menu.classList.add('show')
    form.classList.remove('show')
   overlay.classList.remove('show')
  }
   
})
menuclose.addEventListener('click', function(e){
 
   menu.classList.remove('show')
    form.classList.remove('show')
   overlay.classList.remove('show')
})


// menuclose.addEventListener('click', function(e){
//     e.target
// })