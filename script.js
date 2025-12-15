let navimg = document.querySelector(".hero nav img")
let nav = document.querySelector("nav")
const cursor = document.querySelector(".cursor")
const buttons = document.querySelectorAll("button, i, .hero nav .right, .hero nav, .right p, .view7 .person, .view9 .icon, .menu .right .icon, .menu .left .menu-item, .close");
const dot = document.querySelector(".dot")
const menuTrigger = document.getElementById("three-lines")
const menu = document.querySelector(".menu")
const menuClose = document.querySelector(".close")
const leftSlide = document.querySelector("#left-slide")
const rightSlide = document.querySelector("#right-slide")
const bar = document.querySelector(".bar")
const C = document.querySelector(".close p")
const scroll = document.querySelector(".scroller")
const slides = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5")
]
let count = 0
let currwidth = 20
menuTrigger.addEventListener("click", function(){
    menu.classList.add("visible")
})
menuClose.addEventListener("click", function(){

    setTimeout(function(){
        C.style.transform = "rotateZ(-90deg)"
    }, 100)

    setTimeout(function(){
        menu.classList.remove("visible")
    }, 600)

    setTimeout(function(){
        C.style.transform = "rotateZ(0deg)"
    }, 1200)
})



window.addEventListener("scroll", function(){
    let scrolled = window.pageYOffset
    const img = document.getElementById("bg-hero")
    img.style.transform = 'translate3d(0%, ' + (scrolled * 0.5) + 'px, 0)';
    const Pscroll = document.querySelectorAll(".glimmer")

    Pscroll.forEach(function(txt){
        txt.style.transform = `translate(${scrolled*0.5 - 500 + "px"}, 0)`;
    })

})

window.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    dot.style.left = dets.x + "px"
    dot.style.top = dets.y + "px"
})

window.addEventListener("scroll", function(){
    let scrolled = window.pageYOffset
    if(scrolled > 200){
        navimg.style.opacity = 1
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
        nav.style.backdropFilter = "blur(5px)"
    }
    else if(scrolled<200){
        navimg.style.opacity = 0
        nav.style.backgroundColor = "rgba(0, 0, 0, 0)"
        nav.style.backdropFilter = "none"
    }
})

buttons.forEach(function(btns){
    btns.addEventListener("mouseenter", function(){
        cursor.classList.add("hover")
        dot.style.backgroundColor = "white"
    })
    btns.addEventListener("mouseleave", function(){
        cursor.classList.remove("hover")
        dot.style.backgroundColor = "transparent"
    })
})



rightSlide.addEventListener("click", function(){

    bar.style.width = (currwidth + (100/slides.length)) + "%"
    currwidth = (currwidth + (100/slides.length))
    count++

    if(count === 1){
        slides.forEach(function(img){
            img.style.transform = "translateX(-90vw) translateY(0px)";
        })
        scroll.style.overflow = "hidden"
    }
    if(count === 2){
        slides.forEach(function(img){
            img.style.transform = "translateX(-185vw) translateY(0px)";
        })
    }
    if(count === 3){
       slides.forEach(function(img){
            img.style.transform = "translateX(-280vw) translateY(0px)";
        })
    }
    if(count === 4){
       slides.forEach(function(img){
            img.style.transform = "translateX(-375vw) translateY(0px)";
        scroll.style.overflow = "auto"
        })
    }


    if(currwidth === 100 || currwidth>100){
        rightSlide.style.pointerEvents = "none"
        rightSlide.style.opacity = 0.5
    }

    if(currwidth>20){
        leftSlide.style.pointerEvents = "auto"
        leftSlide.style.opacity = 1
    }
    
})

leftSlide.addEventListener("click", function(){

    bar.style.width = (currwidth - (100/slides.length)) + "%"
    currwidth = (currwidth - (100/slides.length))
    count--

    if(count === 0){
        slides.forEach(function(img){
            img.style.transform = "translateX(-0vw) translateY(0px)";
        })
        scroll.style.overflow = "auto"
    }
    if(count === 1){
        slides.forEach(function(img){
            img.style.transform = "translateX(-90vw) translateY(0px)";
        })
    }
    if(count === 2){
       slides.forEach(function(img){
            img.style.transform = "translateX(-185vw) translateY(0px)";
        })
    }
    if(count === 3){
       slides.forEach(function(img){
            img.style.transform = "translateX(-280vw) translateY(0px)";
        })
    }

    if(currwidth === 20){
        leftSlide.style.pointerEvents = "none"
        leftSlide.style.opacity = 0.5
    }
    if(currwidth<100){
        rightSlide.style.pointerEvents = "auto"
        rightSlide.style.opacity = 1
    }
    
})


