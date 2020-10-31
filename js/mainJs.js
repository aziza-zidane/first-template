// move  navbar with and slyle
$(document).ready(function () {
    "use strict";
    $(".list-unstyledt li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
});

let navbar = document.querySelector(".navbar")
window.onscroll = function () {
    if (document.documentElement.scrollTop > navbar.offsetTop) {
        navbar.classList.remove("bg-dark")
        navbar.classList.add("bg-transparant")
    } else {
        navbar.classList.add("bg-dark")
        navbar.classList.remove("bg-transparant")
        
    }
}
// SWETECH TAB

let allTABS = document.querySelectorAll(".tabs li")
allTABS.forEach(element => {
    
    element.addEventListener("click", function (e) {
    
    
        let tabs = document.querySelector(e.target.getAttribute("data-tab"))
       
         document.querySelectorAll("li").forEach(element => {
             element.classList.remove("active");
             
         })
        document.querySelectorAll(".content-tabs>div").forEach(el => {
            el.classList.remove("d-block")
            el.classList.add("d-none")
        })
        e.target.classList.add("active")
        tabs.classList.remove("d-none")
        tabs.classList.add("d-block")
    })    

     
});
 