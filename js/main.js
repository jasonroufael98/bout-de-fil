(() => {
  // Swap in the bundled artwork if the hero photo hasn't been added yet.
  const hero = document.querySelector(".hero__img");
  const useFallback = () => {
    if (hero.dataset.fallbackUsed) return;
    hero.dataset.fallbackUsed = "true";
    hero.src = hero.dataset.fallback;
  };
  hero.addEventListener("error", useFallback);
  if (hero.complete && hero.naturalWidth === 0) useFallback();

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
})();
