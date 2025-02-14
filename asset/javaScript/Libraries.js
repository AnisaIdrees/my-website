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
      delay: 3000, // Smallest delay for continuous movement
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
  speed: 3000, // Smooth transition speed
  autoplay: {
      delay: 1, // Smallest delay for continuous movement
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



let index = 0;
        const slides = document.querySelectorAll('.slide');
        const slideContainer = document.getElementById('slideContainer');
        
        function showSlide(i) {
            index = (i + slides.length) % slides.length;
            slideContainer.style.transform = `translateX(${-index * 100}%)`;
        }
        
        function nextSlide() {
            showSlide(index + 1);
        }
        
        function prevSlide() {
            showSlide(index - 1);
        }
        
        setInterval(nextSlide, 3000);


// /////////////////////// gsap hero section;;;
// gsap.from('.child',{
//   stagger:0.4
// })

// gsap.from('.child .text', {
//   x: -100,
//   stagger: 0.2,
//   duration: 2,
// })
// gsap.from('.child img', {
//   x: 100,
//   stagger: 0.2,
//   duration: 2,
// })
// gsap.to(' #single-tomato-slice',{
//   x:500,
//   duration:8,
//   rotate:'360deg',
//   repeat:-1,
//   yoyo:true,
// });

// gsap.to('#tomato',{
//   x:40,
//   duration:3,
//   repeat:-1,
//   yoyo:true
// })

