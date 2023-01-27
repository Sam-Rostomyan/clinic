import {
   toggleActive,
   dropdown,
   tabs,
   selectArrowActive,
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
window.tabs = tabs;
window.selectArrowActive = selectArrowActive;
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


document.addEventListener("click", function(e) {
   let select = document.querySelectorAll('.select-inner');

   for (let i = 0; i < select.length; i++) {
      if(!select[i].contains(e.target)) {
         select[i].classList.remove('active')
      }   
   }
})
