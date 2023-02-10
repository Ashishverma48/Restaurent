const menuBar = document.getElementById('menu-bar');
const navMenu = document.getElementById('nav-menu');
menuBar.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
})

const nav = document.getElementById('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        nav.classList.add('scroll');
        // nav.style.backgroundColor='red';
    }else{
       nav.classList.remove('scroll')
       nav.style.scrollBehavior='smooth'
    }
});
// nav.addEventListener('click',()=>{
//     nav.style.backgroundColor='red';
    
// })
// console.log(nav);