const nav = document.querySelector<HTMLElement>("#main-nav");
const menuBtn = nav?.querySelector<HTMLElement>(".nav__menu-btn");

const navEventHandlers = {
  click: () => {
    if (menuBtn) {
      const isMenuExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isMenuExpanded));
    }
  },
  keyup: (event: KeyboardEvent) => {
    if (event.key === "Escape" && menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  },
};

menuBtn?.addEventListener("click", navEventHandlers.click);
nav?.addEventListener("keyup", navEventHandlers.keyup);
