import {
   toggleActive,
   dropdown,
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