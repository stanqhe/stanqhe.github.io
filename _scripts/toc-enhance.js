const initializeEnhancedToc = () => {
  const toc = document.querySelector("#TOC");
  const sidebar = document.querySelector("#quarto-margin-sidebar");

  if (!toc || !sidebar) {
    return;
  }

  document.body.classList.add("has-enhanced-toc");
  sidebar.setAttribute("aria-label", "On this page");
  sidebar.setAttribute("aria-expanded", "false");

  const items = Array.from(toc.querySelectorAll("a.nav-link"))
    .map((link) => {
      const hash = new URL(link.href, window.location.href).hash;
      const target = hash
        ? document.getElementById(decodeURIComponent(hash.slice(1)))
        : null;

      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (!items.length) {
    return;
  }

  let currentItem = null;
  let clickLockUntil = 0;
  let frameRequested = false;
  let lastPointerType = null;
  let flashTimer = null;
  let userInteractedWithToc = false;
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const readingLineRatio = 0.3;

  const setExpanded = (expanded) => {
    sidebar.classList.toggle("toc-expanded", expanded);
    sidebar.setAttribute("aria-expanded", String(expanded));
  };

  const setHovered = (hovered) => {
    sidebar.classList.toggle("toc-hovered", hovered && fineHover.matches);
  };

  const updateHoverState = (event) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      setHovered(false);
      return;
    }

    const { left, top, bottom } = sidebar.getBoundingClientRect();
    const isInHoverZone =
      event.clientX >= left &&
      event.clientX <= window.innerWidth &&
      event.clientY >= top &&
      event.clientY <= bottom;

    setHovered(isInHoverZone);
  };

  const clearOpenState = () => {
    setExpanded(false);
    setHovered(false);
  };

  const revealTocOnce = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    try {
      if (window.sessionStorage.getItem("toc-peek-seen")) {
        return;
      }

      window.sessionStorage.setItem("toc-peek-seen", "true");
    } catch {
      return;
    }

    setExpanded(true);
    window.setTimeout(() => {
      const isEngaged =
        userInteractedWithToc ||
        sidebar.classList.contains("toc-hovered") ||
        sidebar.matches(":focus-within");

      if (!isEngaged) {
        setExpanded(false);
      }
    }, 1800);
  };

  const navigateToItem = (item, { collapse = true } = {}) => {
    clickLockUntil = performance.now() + 1800;
    setCurrentItem(item);
    history.pushState(null, "", item.link.hash);
    const readingLine = window.innerHeight * readingLineRatio;
    const targetTop =
      window.scrollY + item.target.getBoundingClientRect().top - readingLine;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    window.clearTimeout(flashTimer);
    items.forEach(({ target }) => target.classList.remove("heading-flash"));
    item.target.classList.add("heading-flash");
    flashTimer = window.setTimeout(() => {
      item.target.classList.remove("heading-flash");
    }, 1100);

    if (collapse) {
      clearOpenState();
    }
  };

  const setCurrentItem = (item) => {
    if (!item || item === currentItem) {
      return;
    }

    items.forEach(({ link }) => {
      const isCurrent = link === item.link;
      link.classList.toggle("is-current", isCurrent);

      if (isCurrent) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    currentItem = item;
  };

  const updateCurrentSection = () => {
    frameRequested = false;

    if (performance.now() < clickLockUntil) {
      return;
    }

    const readingLine = window.innerHeight * readingLineRatio;
    let nextItem = items[0];

    items.forEach((item) => {
      if (item.target.getBoundingClientRect().top <= readingLine) {
        nextItem = item;
      }
    });

    const pageBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2;

    if (pageBottom) {
      const visibleItems = items.filter(({ target }) => {
        const { top, bottom } = target.getBoundingClientRect();
        return top < window.innerHeight && bottom > 0;
      });

      nextItem = visibleItems.at(-1) || nextItem;
    }

    setCurrentItem(nextItem);
  };

  const requestCurrentSectionUpdate = () => {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
  };

  items.forEach((item) => {
    item.link.addEventListener("click", (event) => {
      const pointerType = lastPointerType || "keyboard";
      const isDirectNavigation = pointerType === "mouse";
      lastPointerType = null;

      if (
        !isDirectNavigation &&
        !sidebar.classList.contains("toc-expanded")
      ) {
        event.preventDefault();
        setExpanded(true);
        return;
      }

      event.preventDefault();
      navigateToItem(item, { collapse: !isDirectNavigation });

      if (isDirectNavigation) {
        item.link.blur();
      }
    });
  });

  sidebar.addEventListener("pointerdown", (event) => {
    userInteractedWithToc = true;
    lastPointerType = event.pointerType || "mouse";
  });
  sidebar.addEventListener("focusin", () => {
    userInteractedWithToc = true;
  });

  document.addEventListener("pointermove", updateHoverState, { passive: true });
  document.addEventListener("pointerleave", () => setHovered(false));

  document.addEventListener("pointerdown", (event) => {
    if (!sidebar.contains(event.target)) {
      clearOpenState();
    }
  });

  document.addEventListener("keydown", (event) => {
    lastPointerType = null;

    if (event.key === "Escape") {
      clearOpenState();
      sidebar.blur();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      requestCurrentSectionUpdate();
      setExpanded(false);
    },
    { passive: true },
  );
  window.addEventListener("resize", () => {
    requestCurrentSectionUpdate();
    clearOpenState();
  });

  const hashItem = items.find(
    ({ link }) => new URL(link.href, window.location.href).hash === location.hash,
  );

  setCurrentItem(hashItem || items[0]);
  requestCurrentSectionUpdate();
  revealTocOnce();
};

initializeEnhancedToc();
