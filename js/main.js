const mobile_button = document.querySelector(".nav__menu-mobile");
const mobile_menu = document.querySelector(".nav__menu");

mobile_button.addEventListener("click", function(){
    mobile_menu.classList.toggle("active");
    mobile_button.classList.toggle("close");
});