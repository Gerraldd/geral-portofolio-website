/**
 * Muhammad Geral Herpavy — Portfolio Interactions
 * Minimalist Monochrome Motion & Interactivity Engine
 */

(() => {
  "use strict";

  // 0. INITIALIZE LUCIDE ICONS
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 1. DYNAMIC COPYRIGHT YEAR
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 2. ACTIVE NAVIGATION SPY (INTERSECTION OBSERVER)
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = navLinks
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const setActiveNav = (id) => {
      navLinks.forEach((link) => {
        if (link.dataset.nav === id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveNav(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  // 3. SCROLL REVEAL OBSERVER
  const revealElements = document.querySelectorAll(".reveal-init");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }

  // 4. COPY EMAIL TO CLIPBOARD WITH ACCESSIBILITY
  const copyButton = document.querySelector(".copy-btn");
  const copyStatus = document.querySelector(".copy-status");

  if (copyButton) {
    copyButton.hidden = false;
    const emailToCopy = copyButton.dataset.copy || "muhmmdgeral@gmail.com";
    let statusTimer;
    let buttonResetTimer;

    const announceStatus = (message, isSuccess = true) => {
      if (!copyStatus) return;
      window.clearTimeout(statusTimer);
      copyStatus.textContent = message;
      copyStatus.style.color = isSuccess ? "var(--color-white)" : "var(--color-medium-gray)";

      statusTimer = window.setTimeout(() => {
        copyStatus.textContent = "";
      }, 3500);
    };

    const copyWithFallback = async (text) => {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch {
          // Fall through to execCommand
        }
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "0";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();

      let success = false;
      try {
        success = document.execCommand("copy");
      } catch {
        success = false;
      } finally {
        textarea.remove();
      }

      return success;
    };

    copyButton.addEventListener("click", async () => {
      const originalHTML = copyButton.innerHTML;
      const copied = await copyWithFallback(emailToCopy);

      if (copied) {
        copyButton.innerHTML = `<i data-lucide="check" aria-hidden="true" class="copy-icon"></i> Disalin!`;
        if (typeof lucide !== "undefined") lucide.createIcons({ nodes: [copyButton] });
        announceStatus("✓ Email berhasil disalin ke clipboard.", true);
      } else {
        copyButton.innerHTML = `<i data-lucide="x" aria-hidden="true" class="copy-icon"></i> Gagal`;
        if (typeof lucide !== "undefined") lucide.createIcons({ nodes: [copyButton] });
        announceStatus("Tidak dapat menyalin otomatis. Silakan salin manual.", false);
      }

      window.clearTimeout(buttonResetTimer);
      buttonResetTimer = window.setTimeout(() => {
        copyButton.innerHTML = originalHTML;
        if (typeof lucide !== "undefined") lucide.createIcons({ nodes: [copyButton] });
      }, 2400);
    });
  }

  // 5. HEADER SCROLL SHADOW / BORDER STATE
  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 20) {
        header.style.borderBottomColor = "var(--border-medium)";
      } else {
        header.style.borderBottomColor = "var(--border-subtle)";
      }
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }
})();
