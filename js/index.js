import {
   tabs,
   toggleActive,
   dropdown,
   burgerOpen,
   burgerClose,
   navLinkActive,
   servicesTabOpen,
   servicesTabClose,
   closeModal,
   scrollUp,
} from './module.js';

window.tabs = tabs;
window.toggleActive = toggleActive;
window.dropdown = dropdown;
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

document.querySelector('#defaultService').click();

new Swiper('#stock', {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,
   navigation: {
      nextEl: '#stock__slider_next',
      prevEl: '#stock__slider_prev',
   },
   breakpoints: {
      769: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1170: {
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


window.addEventListener('scroll', function (e) {
   if (window.pageYOffset > 500) {
      document.querySelector('#complex').classList.add('active');
   } else {
      document.querySelector('#complex').classList.remove('active');
      document.querySelector('#complexList').classList.remove('active');
   }
})
