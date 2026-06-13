document.addEventListener("DOMContentLoaded", () => {
  const toc = document.querySelector("#TOC");
  const sidebar = document.querySelector("#quarto-margin-sidebar");

  if (!toc || !sidebar) {
    return;
  }

  document.body.classList.add("has-enhanced-toc");
  sidebar.setAttribute("aria-label", "On this page");

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

    const readingLine = Math.min(120, window.innerHeight * 0.18);
    let nextItem = items[0];

    items.forEach((item) => {
      if (item.target.getBoundingClientRect().top <= readingLine) {
        nextItem = item;
      }
    });

    setCurrentItem(nextItem);
  };

  const requestCurrentSectionUpdate = () => {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
  };

  items.forEach((item) => {
    item.link.addEventListener("click", () => {
      clickLockUntil = performance.now() + 1800;
      setCurrentItem(item);
    });
  });

  window.addEventListener("scroll", requestCurrentSectionUpdate, {
    passive: true,
  });
  window.addEventListener("resize", requestCurrentSectionUpdate);

  const hashItem = items.find(
    ({ link }) => new URL(link.href, window.location.href).hash === location.hash,
  );

  setCurrentItem(hashItem || items[0]);
  requestCurrentSectionUpdate();
});
