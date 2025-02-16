//  cursor
const cursor = document.querySelector(".cursor");
const cursorTrail = document.querySelector(".cursor-trail");




// Smooth follow effect using GSAP
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
  gsap.to(cursorTrail, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "power3.out" });
});



// Click Animation
document.addEventListener("click", () => {
  gsap.to(cursor, { scale: 1.5, duration: 0.1, ease: "power2.out", yoyo: true, repeat: 1 });
  gsap.to(cursorTrail, { scale: 2, duration: 0.3, opacity: 0, ease: "power2.out", yoyo: true, repeat: 1 });
});




/////////   toggle button   /////////////
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', () => {
  if (menuList.style.maxHeight === '0px' || menuList.style.maxHeight === '') {
    menuList.style.maxHeight = '550px';
    console.log(menuIcon);
    console.log(menuList);

  } else {
    menuList.style.maxHeight = '0px';
  }
});




// gsap nav items animation
let tl = gsap.timeline()
tl.from('.logo img', {
  y: -30,
  duration: 1,
  delay: 0.4,
  opacity: 0
})
tl.from('nav li', {
  y: -30,
  duration: 0.4,
  opacity: 0,
  stagger: 0.3,
})
tl.from('.login-sec .login-sign-btn', {
  y: -30,
  duration: 0.6,
  opacity: 0,
  stagger: 0.2,
});

////////////////////////




// swiper card slider
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    centerSlide: 'true',
    loop: true,
    fade: 'true',
    grabCursor: 'ture',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }

    },
  });
});
// swiper card slider close////////////





// logo swiper slider
var swiper = new Swiper(".logo-swiper", {
  slidesPerView: 7,
  spaceBetween: 15,
  loop: true,
  speed: 3000, 
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    480: { slidesPerView: 3, spaceBetween: 15 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    1024: { slidesPerView: 7, spaceBetween: 20 }
  }
});
// logo swiper slider close



var swiper = new Swiper(".Review-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});




//food images slider
var swiper = new Swiper(".food-swiper", {
  slidesPerView: 7, 
  speed: 3000, 
  spaceBetween: 10,
  loop: true, 
  autoplay: {
    delay: 1,  
    disableOnInteraction: false
  },
  breakpoints: {
    576: { slidesPerView: 2, spaceBetween: 20 },
    340: { slidesPerView: 1, spaceBetween: 10 },
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 10 },
    526: { slidesPerView: 2, spaceBetween: 10 },
    710: { slidesPerView: 3, spaceBetween: 10 },
  }
});


// // back to top button
const backToTopButton = document.getElementById("customBackToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



// /////////////////////// gsap hero section /////////////////////////////////////////////////////;;;
gsap.to(' #single-tomato-slice',{
  x:500,
  duration:8,
  rotate:'360deg',
  repeat:-1,
  yoyo:true,
});

gsap.to('#tomato',{
  x:40,
  duration:3,
  repeat:-1,
  yoyo:true
})

