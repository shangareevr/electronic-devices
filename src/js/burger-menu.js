function showMenu () {
  const burger = document.querySelector(".nav__menu-burger");
  burger.addEventListener("click", toggleClass);

}
showMenu();

function toggleClass () {
  const burger = document.querySelector(".nav__menu-burger");
  const menu = document.querySelector(".menu__wrapper");
  burger.classList.toggle("open");
  menu.classList.toggle("open");
  document.querySelector('.nav__icon').classList.toggle('transform');
  document.querySelector('.wrapper').classList.toggle("scroll");
  let text =   document.querySelector('.menu-status');
  if(text.innerText === 'Меню'){
    text.innerText = "Закрыть"
  } else{
    text.innerText = 'Меню'
  }
  }

function hideMenu () {
  window.addEventListener("click", e=>{
     const burger = document.querySelector(".nav__menu-burger");
     const menu = document.querySelector(".menu__wrapper");
     if (burger.classList.contains("open") && !e.composedPath().includes(burger)) {
        if (!e.target.classList.contains(burger) || !e.target.classList.contains(menu)) {
           toggleClass()
        }
     }
  })
}
hideMenu();