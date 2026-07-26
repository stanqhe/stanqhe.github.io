const initializeMegaMenu = () => {
  const menuNames = ["work", "study", "life"];
  const openClasses = menuNames.map((name) => `show-mega-${name}`);
  const desktop = window.matchMedia("(min-width: 721px)");
  const backdrop = document.querySelector("[data-mega-backdrop]");
  const navbar = document.querySelector(".site-navbar");
  const triggerGroup = document.querySelector(".site-navbar-links");
  const closeDelay = 140;
  let activeName = null;
  let closeTimer = null;

  const items = menuNames
    .map((name) => {
      const trigger = document.querySelector(`[data-mega-menu="${name}"]`);
      const panel = document.getElementById(`site-mega-${name}`);

      return trigger && panel ? { name, trigger, panel } : null;
    })
    .filter(Boolean);

  if (!items.length) {
    return;
  }

  const updateMenuTop = () => {
    if (navbar) {
      document.documentElement.style.setProperty(
        "--site-mega-top",
        `${navbar.getBoundingClientRect().bottom}px`,
      );
    }
  };

  updateMenuTop();
  window.addEventListener("resize", updateMenuTop, { passive: true });

  if (navbar && "ResizeObserver" in window) {
    new ResizeObserver(updateMenuTop).observe(navbar);
  }

  const cancelClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  };

  const closeMenu = () => {
    cancelClose();
    document.body.classList.remove(...openClasses);
    items.forEach(({ trigger }) => trigger.setAttribute("aria-expanded", "false"));
    activeName = null;
  };

  const openMenu = (name) => {
    if (!desktop.matches) {
      closeMenu();
      return;
    }

    cancelClose();

    if (activeName === name) {
      return;
    }

    document.body.classList.remove(...openClasses);
    document.body.classList.add(`show-mega-${name}`);
    items.forEach(({ name: itemName, trigger }) => {
      trigger.setAttribute("aria-expanded", String(itemName === name));
    });
    activeName = name;
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer = window.setTimeout(() => {
      const activeItem = items.find(({ name }) => name === activeName);
      const focusWithinMenu = activeItem &&
        (activeItem.trigger.matches(":focus") || activeItem.panel.matches(":focus-within"));

      if (!focusWithinMenu) {
        closeMenu();
      }
    }, closeDelay);
  };

  items.forEach(({ name, trigger, panel }) => {
    trigger.addEventListener("pointerenter", () => openMenu(name));
    trigger.addEventListener("focus", () => openMenu(name));
    trigger.addEventListener("blur", scheduleClose);

    panel.addEventListener("pointerenter", cancelClose);
    panel.addEventListener("pointerleave", scheduleClose);
    panel.addEventListener("focusin", cancelClose);
    panel.addEventListener("focusout", scheduleClose);
  });

  triggerGroup?.addEventListener("pointerenter", cancelClose);
  triggerGroup?.addEventListener("pointerleave", scheduleClose);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeName) {
      closeMenu();
    }
  });

  backdrop?.addEventListener("click", closeMenu);

  desktop.addEventListener("change", ({ matches }) => {
    if (!matches) {
      closeMenu();
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMegaMenu, { once: true });
} else {
  initializeMegaMenu();
}
