let menu_icon = document.querySelector(".menu-icon");
let order_now = document.querySelectorAll(".order-now")
let right_div = document.querySelector(".right-div");
let veg = document.querySelectorAll(".veg");
let home = document.querySelectorAll(".home");
let signup_button = document.querySelector(".signup-button");
let form = document.querySelector(".form");
let form_container = document.querySelector(".form-container");
let head = document.querySelector("header");
let non_veg = document.querySelectorAll(".non-veg")
let veg_menu = document.querySelector(".veg-menu");
let nonveg_menu = document.querySelector(".nonveg-menu");
let signin_part = document.querySelector(".signin-part");
let slider = document.querySelector(".slider");
let faq = document.querySelectorAll(".faq");

// querySelectorAll nodal list deta hai to ek ek kar ke le na padta hai us ke elements

order_now.forEach((item)=>{
    item.addEventListener("click",function(){
        alert("You can pay using QR or UPI.\nAdvanced payment methods (cards, gateway integration) require backend setup.")
    })
})


veg.forEach((item)=>{
item.addEventListener("click",function(){
    veg_menu.scrollIntoView({
        behavior:"smooth"
    });
    form_container.classList.remove("activeform");
    right_div.classList.remove("active");

});
});
non_veg.forEach((item) => {
item.addEventListener("click",function(){
    nonveg_menu.scrollIntoView({
        behavior:"smooth"
    });
    form_container.classList.remove("activeform");
    right_div.classList.remove("active");

});
});
home.forEach((item) =>{
item.addEventListener("click",function(){
    head.scrollIntoView({
        behavior:"smooth"
    });
    form_container.classList.remove("activeform");
    right_div.classList.remove("active");

});

});

menu_icon.addEventListener("click" ,function(){

    right_div.classList.toggle("active");

});
faq.forEach((item) =>{
    item.addEventListener("click",function(){
    item.classList.toggle("hover");
});

});
signup_button.addEventListener("click",function(){
   
    form_container.classList.add("activeform");
});

