const initializeMegaMenu = () => {
  const menuNames = ["work", "study", "life"];
  const desktop = window.matchMedia("(min-width: 721px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const backdrop = document.querySelector("[data-mega-backdrop]");
  const surface = document.querySelector("[data-mega-surface]");
  const navbar = document.querySelector(".site-navbar");
  const triggerGroup = document.querySelector(".site-navbar-links");
  const closeDelay = 140;
  const switchDuration = 190;
  let activeName = null;
  let closeTimer = null;
  let switchTimer = null;
  let switchFrame = null;

  const items = menuNames
    .map((name) => {
      const trigger = document.querySelector(`[data-mega-menu="${name}"]`);
      const panel = document.getElementById(`site-mega-${name}`);

      return trigger && panel ? { name, trigger, panel } : null;
    })
    .filter(Boolean);

  if (!items.length || !surface) {
    return;
  }

  const activeItem = () => items.find(({ name }) => name === activeName);

  const updateMenuHeight = (item = activeItem()) => {
    if (item) {
      document.documentElement.style.setProperty(
        "--site-mega-height",
        `${item.panel.scrollHeight}px`,
      );
    }
  };

  const updateMenuGeometry = () => {
    if (navbar) {
      document.documentElement.style.setProperty(
        "--site-mega-top",
        `${navbar.getBoundingClientRect().bottom}px`,
      );
    }

    updateMenuHeight();
  };

  updateMenuGeometry();
  window.addEventListener("resize", updateMenuGeometry, { passive: true });

  if (navbar && "ResizeObserver" in window) {
    new ResizeObserver(updateMenuGeometry).observe(navbar);
  }

  const cancelClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  };

  const finishSwitch = () => {
    window.clearTimeout(switchTimer);
    switchTimer = null;

    if (switchFrame !== null) {
      window.cancelAnimationFrame(switchFrame);
      switchFrame = null;
    }

    document.body.classList.remove("is-mega-switching");
    items.forEach(({ panel, name }) => {
      panel.classList.remove("is-entering", "is-leaving");
      panel.classList.toggle("is-active", name === activeName);
    });
  };

  const closeMenu = () => {
    cancelClose();
    finishSwitch();
    document.body.classList.remove("show-mega-menu");
    items.forEach(({ trigger, panel }) => {
      trigger.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-active");
    });
    activeName = null;
  };

  const switchPanel = (nextItem) => {
    const previousItem = activeItem();

    finishSwitch();
    activeName = nextItem.name;
    document.body.classList.add("is-mega-switching");
    nextItem.panel.classList.add("is-entering");
    updateMenuHeight(nextItem);
    previousItem.panel.classList.remove("is-active");
    previousItem.panel.classList.add("is-leaving");

    if (reducedMotion.matches) {
      nextItem.panel.classList.remove("is-entering");
      nextItem.panel.classList.add("is-active");
      finishSwitch();
      return;
    }

    switchFrame = window.requestAnimationFrame(() => {
      switchFrame = null;
      nextItem.panel.classList.remove("is-entering");
      nextItem.panel.classList.add("is-active");
      switchTimer = window.setTimeout(finishSwitch, switchDuration);
    });
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

    const nextItem = items.find(({ name: itemName }) => itemName === name);

    if (!nextItem) {
      return;
    }

    const wasOpen = activeName !== null;

    if (wasOpen) {
      switchPanel(nextItem);
    } else {
      activeName = name;
      updateMenuHeight(nextItem);
      nextItem.panel.classList.add("is-active");
      document.body.classList.add("show-mega-menu");
    }

    items.forEach(({ name: itemName, trigger }) => {
      trigger.setAttribute("aria-expanded", String(itemName === name));
    });
  };

  const navigationRegionContainsFocus = () =>
    Boolean(triggerGroup?.matches(":focus-within") || surface.matches(":focus-within"));

  const navigationRegionContainsPointer = () =>
    Boolean(triggerGroup?.matches(":hover") || surface.matches(":hover"));

  const scheduleClose = () => {
    cancelClose();
    closeTimer = window.setTimeout(() => {
      if (!navigationRegionContainsFocus() && !navigationRegionContainsPointer()) {
        closeMenu();
      }
    }, closeDelay);
  };

  items.forEach(({ name, trigger }) => {
    trigger.addEventListener("pointerenter", () => openMenu(name));
    trigger.addEventListener("focus", () => openMenu(name));
    trigger.addEventListener("blur", scheduleClose);
  });

  triggerGroup?.addEventListener("pointerenter", cancelClose);
  triggerGroup?.addEventListener("pointerleave", scheduleClose);
  triggerGroup?.addEventListener("focusin", cancelClose);
  triggerGroup?.addEventListener("focusout", scheduleClose);

  surface.addEventListener("pointerenter", cancelClose);
  surface.addEventListener("pointerleave", scheduleClose);
  surface.addEventListener("focusin", cancelClose);
  surface.addEventListener("focusout", scheduleClose);

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
