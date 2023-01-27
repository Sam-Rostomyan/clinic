import {
   stepMouseover,
   toggleActive,
   stepsTabs,
   stepDescActive,
   dropdown,
   dropdownTab,
   tabs,
   burgerOpen,
   burgerClose,
   navLinkActive,
   servicesTabOpen,
   servicesTabClose,
   closeModal,
   scrollUp,
   photoZoom,
} from './module.js';

window.stepMouseover = stepMouseover;
window.toggleActive = toggleActive;
window.stepsTabs = stepsTabs;
window.stepDescActive = stepDescActive;
window.dropdown = dropdown;
window.dropdownTab = dropdownTab;
window.tabs = tabs;
window.burgerOpen = burgerOpen;
window.burgerClose = burgerClose;
window.navLinkActive = navLinkActive;
window.servicesTabOpen = servicesTabOpen;
window.servicesTabClose = servicesTabClose;
window.closeModal = closeModal;
window.scrollUp = scrollUp;
window.photoZoom = photoZoom;


stepMouseover();
navLinkActive();
closeModal();
scrollUp();
window.addEventListener("resize", navLinkActive);

new Swiper("#photo", {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,
   navigation: {
      nextEl: "#photo__slider_next",
      prevEl: "#photo__slider_prev",
   },
   pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
   },
   breakpoints: {
      769: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});


new Swiper('#reviews', {
   loop: true,
   slidesPerView: 1,
   navigation: {
      nextEl: '#reviewsNext',
      prevEl: '#reviewsPrev',
   },
});