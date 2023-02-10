const menuBar = document.getElementById('menu-bar');
const navMenu = document.getElementById('nav-menu');
menuBar.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
})