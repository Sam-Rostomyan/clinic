import {
  toggleActive,
  dropdown,
  selectArrowActive,
  activeClassDot,
  tabs,
  burgerOpen,
  burgerClose,
  navLinkActive,
  servicesTabOpen,
  servicesTabClose,
  closeModal,
  scrollUp,
} from './module.js';

window.toggleActive = toggleActive;
window.dropdown = dropdown;
window.selectArrowActive = selectArrowActive;
window.activeClassDot = activeClassDot;
window.tabs = tabs;
window.burgerOpen = burgerOpen;
window.burgerClose = burgerClose;
window.navLinkActive = navLinkActive;
window.servicesTabOpen = servicesTabOpen;
window.servicesTabClose = servicesTabClose;
window.closeModal = closeModal;
window.scrollUp = scrollUp;

navLinkActive();
closeModal();
scrollUp();
window.addEventListener("resize", navLinkActive);


new Swiper('#reviews', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '#reviewsNext',
    prevEl: '#reviewsPrev',
  },
});


new Swiper("#accordionSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});





