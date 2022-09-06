let swiper = Swiper;
let init = false;

let swiperMode = () => {
   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

    if(mobile.matches) {
         if (!init) {
             init = true;
             swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                    type: 'bullets',
                  },
                on: {
                    init: function () {
                      console.log('swiper initialized');
                    },
                  },
             });
         }
     }
     else if (!mobile.matches && init)  {
         swiper.destroy(true,true);
       init = false;
       console.log("swiper destroyed")
     }
  }

window.onload = function() {
    swiperMode();
}

window.onresize = function() {
    swiperMode();
}



// let buttonOpenPopup = document.querySelector(".repair-menu__show-all");
// let hiddenItemArrTablet = document.querySelectorAll(".repair-menu__item--hidden-tablet");
// let hiddenItemArrDesctop = document.querySelectorAll(".repair-menu__item--hidden-desctop");
// const screenWidth = window.innerWidth;

// if (screenWidth >= 768 && screenWidth < 1121) {
//   for (let itemArr of hiddenItemArrTablet) {
//   console.log(screenWidth);
//   buttonOpenPopup.addEventListener("click", function () {
//     itemArr.classList.toggle("repair-menu__item--visible");
//   });
// }
// } else if (screenWidth >= 1121) {
//   for (let itemArr of hiddenItemArrDesctop) {
//     console.log(screenWidth);
//     itemArr.classList.remove("repair-menu__item--hidden-tablet");
//     buttonOpenPopup.addEventListener("click", function () {

//       itemArr.classList.toggle("repair-menu__item--visible");
//     });
//   }
// }

let buttonOpenFullList = document.querySelector(".repair-menu__show-all"); // кнопка
let list = document.querySelector(".repair-menu__list"); // список


  buttonOpenFullList.addEventListener("click", function () {
    buttonOpenFullList.classList.toggle("repair-menu__show-all--active");
  list.classList.toggle("repair-menu__list--visible-item"); //разворачиваю список


  if (buttonOpenFullList.classList.contains("repair-menu__show-all")) {
    buttonOpenFullList.innerHTML = 'Показать все';
  }

  if (buttonOpenFullList.classList.contains("repair-menu__show-all--active")) {
    buttonOpenFullList.innerHTML = 'Скрыть';
  }


  console.log(buttonOpenFullList.innerHTML)
})





//   if (listItem.length > 4) {
//
//   }
// )}