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

var myForm = document.querySelector("form");
var textHeader = document.querySelector(".text-header").offsetHeight;


    myForm.style.height = (window.innerHeight - textHeader - 100) + "px"
    console.log(textHeader)
  
  


// var mediaQueryList = window.matchMedia('(max-width:991px)');
// 
// function screenTest(e) {
//   if (e.matches) {
    // /* the viewport is 600 pixels wide or less */
    //   myForm.style.height = (window.innerHeight - textHeader - 40) + "px"
    //   console.log('yes')
    // 
//   } else {
    // /* the viewport is more than than 600 pixels wide */
    // 
    // myForm.style.height = (window.innerHeight - textHeader)+"px"
    // 
    //  
//   }
// }
// 
// mediaQueryList.addListener(screenTest);