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



// Scroll to top button

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}