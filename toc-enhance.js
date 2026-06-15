document.addEventListener("DOMContentLoaded", () => {
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
  let activationPointerType = null;
  let flashTimer = null;
  const readingLineRatio = 0.3;

  const setExpanded = (expanded) => {
    sidebar.classList.toggle("toc-expanded", expanded);
    sidebar.setAttribute("aria-expanded", String(expanded));
  };

  const navigateToItem = (item) => {
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

    setExpanded(false);
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
      const requiresReveal =
        activationPointerType !== null && activationPointerType !== "mouse";
      activationPointerType = null;

      if (
        requiresReveal &&
        !sidebar.classList.contains("toc-expanded")
      ) {
        event.preventDefault();
        setExpanded(true);
        return;
      }

      event.preventDefault();
      navigateToItem(item);
    });
  });

  sidebar.addEventListener("pointerdown", (event) => {
    activationPointerType = event.pointerType || "mouse";
  });

  document.addEventListener("pointerdown", (event) => {
    if (!sidebar.contains(event.target)) {
      setExpanded(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    activationPointerType = null;

    if (event.key === "Escape") {
      setExpanded(false);
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
    setExpanded(false);
  });

  const hashItem = items.find(
    ({ link }) => new URL(link.href, window.location.href).hash === location.hash,
  );

  setCurrentItem(hashItem || items[0]);
  requestCurrentSectionUpdate();
});
