(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c="operations.zero.info@gmail.com",l=location.pathname.replace(/\/+$/,"")||"/";document.body.insertAdjacentHTML("afterbegin",'<div class="aurora"></div><div class="grid-fx"></div><div class="cursor-glow" data-glow></div>');const s=document.querySelector("[data-nav]");if(s){s.innerHTML=`
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
  `,s.querySelectorAll("[data-nav-link]").forEach(e=>{const o=e.getAttribute("data-nav-link");(l===o||l.startsWith(`${o}/`))&&e.setAttribute("aria-current","page")});const a=s.querySelector("[data-menu-toggle]");a.addEventListener("click",()=>{const e=s.classList.toggle("is-open");a.setAttribute("aria-expanded",String(e))})}const p=document.querySelector("[data-footer]");p&&(p.innerHTML=`
    <div class="wrap footer-grid">
      <div>
        <strong>Nitish Jeebun</strong>
        <p class="tiny">Independent iOS apps. Private by default. Contact: <a href="mailto:${c}">${c}</a></p>
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
        <a href="mailto:${c}">Email</a>
      </div>
    </div>
  `);const u=document.querySelector("[data-glow]");u&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&window.addEventListener("pointermove",a=>{u.style.transform=`translate(${a.clientX}px, ${a.clientY}px)`},{passive:!0});document.documentElement.classList.add("js-ready");const f=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),f.unobserve(e.target))})},{threshold:.08,rootMargin:"0px 0px -8% 0px"});document.querySelectorAll("[data-reveal]").forEach(a=>{a.getBoundingClientRect().top<window.innerHeight*.92?a.classList.add("is-in"):f.observe(a)});const n=document.querySelector("[data-support-form]");n&&n.addEventListener("submit",a=>{a.preventDefault();const e=new FormData(n),o=encodeURIComponent(`[${e.get("app")||"Site"}] ${e.get("subject")||"Support request"}`),i=encodeURIComponent([`App: ${e.get("app")||"Site"}`,`Device: ${e.get("device")||"Not specified"}`,`System: ${e.get("system")||"Not specified"}`,"",e.get("message")||""].join(`
`));window.location.href=`mailto:${c}?subject=${o}&body=${i}`;const t=n.querySelector(".success");t&&(t.style.display="block")});
