(function () {
  const path = location.pathname.replace(/\/+$/, "") || "/";

  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = `
      <a class="brand" href="/">
        <svg class="mark" viewBox="0 0 28 28" aria-hidden="true">
          <rect width="28" height="28" rx="8" fill="#16130e"/>
          <circle cx="14" cy="14" r="5.5" fill="none" stroke="#f3efe6" stroke-width="1.6"/>
          <circle cx="14" cy="14" r="1.6" fill="#f3efe6"/>
        </svg>
        <span class="brand-name">Nitish Jeebun</span>
      </a>
      <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false">Menu</button>
      <div class="nav-links">
        <a href="/apps/" data-nav-link="/apps">Apps</a>
        <a href="/about/" data-nav-link="/about">About</a>
        <a href="/support/" data-nav-link="/support">Support</a>
        <a href="/privacy/" data-nav-link="/privacy">Privacy</a>
      </div>
      <div class="nav-cta">
        <a class="btn btn-primary" href="/apps/">See the apps</a>
      </div>
    `;

    nav.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("data-nav-link");
      if (path === href || path.startsWith(href + "/")) {
        link.setAttribute("aria-current", "page");
      }
    });

    const toggle = nav.querySelector("[data-menu-toggle]");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="wrap footer-grid">
        <div>
          <strong>Nitish Jeebun</strong>
          <p class="tiny">Independent iOS apps. Private by default. No accounts, no tracking, no public inbox.</p>
        </div>
        <div class="footer-links">
          <a href="/apps/">Apps</a>
          <a href="/snapordina/">SnapOrdina</a>
          <a href="/qrartify/">QRArtify</a>
          <a href="/about/">About</a>
        </div>
        <div class="footer-links">
          <a href="/privacy/">Privacy</a>
          <a href="/support/">Support</a>
          <a href="https://github.com/nitishjeebun">GitHub</a>
        </div>
      </div>
    `;
  }

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector("[data-support-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const title = encodeURIComponent(
        `[${data.get("app") || "Site"}] ${data.get("subject") || "Support request"}`
      );
      const body = encodeURIComponent(
        [
          `App: ${data.get("app") || "Site"}`,
          `Device: ${data.get("device") || "Not specified"}`,
          `System: ${data.get("system") || "Not specified"}`,
          "",
          data.get("message") || ""
        ].join("\n")
      );
      window.open(
        `https://github.com/nitishjeebun/nitishjeebun.github.io/issues/new?title=${title}&body=${body}`,
        "_blank",
        "noopener"
      );
      const done = form.querySelector(".success");
      if (done) done.style.display = "block";
      form.reset();
    });
  }
})();
