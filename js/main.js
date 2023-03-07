$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".reviews-cards").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-button");
const navBtnImg = document.querySelector("#nav-btn-img");
const anchors = document.querySelectorAll('a[href^="#"]');

/*Меню*/
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/header/nav-close.svg";
  } else {
    navBtnImg.src = "./img/header/nav-open.svg";
  }
};
/*Вариант реализации меню №2*/
// navBtn.addEventListener('click', function () {
// 	if (nav.classList.toggle('open')) {
// 		navBtnImg.src = './img/icons/nav-close.svg';
// 	} else {
// 		navBtnImg.src = './img/icons/nav-open.svg';
// 	}
// });

/*Плавная прокрутка к секции*/

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    /*В открытом меню удаляет  класс open и закрываю меню и плавно переносит в определенную секцию*/
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navBtnImg.src = "./img/header/nav-open.svg";
    }
  });
}

/*Подключение анимации*/

AOS.init();
