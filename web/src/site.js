import "./styles.css";

const supportEmail = "operations.zero.info@gmail.com";
const path = location.pathname.replace(/\/+$/, "") || "/";

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="aurora"></div><div class="grid-fx"></div><div class="cursor-glow" data-glow></div>`
);

const nav = document.querySelector("[data-nav]");
if (nav) {
  nav.innerHTML = `
    <a class="brand" href="/">
      <svg class="mark" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="9" fill="#b8ff3c"/>
        <circle cx="15" cy="15" r="6" fill="none" stroke="#10140a" stroke-width="1.8"/>
        <circle cx="15" cy="15" r="1.8" fill="#10140a"/>
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
    if (path === href || path.startsWith(`${href}/`)) {
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
        <p class="tiny">Independent iOS apps. Private by default. Contact: <a href="mailto:${supportEmail}">${supportEmail}</a></p>
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
        <a href="mailto:${supportEmail}">Email</a>
      </div>
    </div>
  `;
}

const glow = document.querySelector("[data-glow]");
if (glow && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  }, { passive: true });
}

document.documentElement.classList.add("js-ready");
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll("[data-reveal]").forEach((node) => {
  const top = node.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.92) node.classList.add("is-in");
  else reveal.observe(node);
});

const form = document.querySelector("[data-support-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(
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
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    const done = form.querySelector(".success");
    if (done) done.style.display = "block";
  });
}
