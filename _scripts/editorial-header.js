(() => {
  const shareButton = document.querySelector(".editorial-share");

  if (!shareButton) {
    return;
  }

  const shareLabel = shareButton.querySelector("span");
  const status = document.querySelector("#editorial-share-status");
  const fallback = document.querySelector(".editorial-share-fallback");
  const fallbackInput = document.querySelector("#editorial-share-url");
  let restoreLabelTimer;

  const canonicalUrl = () => {
    const canonical = document.querySelector('link[rel="canonical"]');

    if (canonical?.href) {
      return canonical.href;
    }

    return new URL(window.location.pathname, window.location.origin).href;
  };

  const showCopiedState = () => {
    window.clearTimeout(restoreLabelTimer);
    shareLabel.textContent = "Link copied";
    status.textContent = "Article link copied to the clipboard.";
    restoreLabelTimer = window.setTimeout(() => {
      shareLabel.textContent = "Share";
    }, 1800);
  };

  const copyWithSelection = (url) => {
    fallback.hidden = false;
    fallbackInput.value = url;
    fallbackInput.focus();
    fallbackInput.select();

    try {
      const copied = document.execCommand("copy");

      if (copied) {
        fallback.hidden = true;
        showCopiedState();
        return;
      }
    } catch {
      // Keep the selected URL visible for manual copying.
    }

    status.textContent =
      "Automatic copying is unavailable. The article link is selected; press Command+C or Control+C to copy it.";
  };

  shareButton.addEventListener("click", async () => {
    const url = canonicalUrl();
    fallback.hidden = true;

    if (!navigator.clipboard?.writeText) {
      copyWithSelection(url);
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      showCopiedState();
    } catch {
      copyWithSelection(url);
    }
  });
})();
