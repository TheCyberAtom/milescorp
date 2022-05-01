const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const nav_links = document.querySelector('.nav_links');

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
    console.log(nav_links);
    nav_links.addEventListener('click', ()=>{
        links.classList.remove("show_nav");
    })
})