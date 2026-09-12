(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const v="operations.zero.info@gmail.com",y=location.pathname.replace(/\/+$/,"")||"/";document.body.insertAdjacentHTML("afterbegin",'<div class="aurora"></div><div class="grid-fx"></div><div class="cursor-glow" data-glow></div>');const u=document.querySelector("[data-nav]");if(u){u.innerHTML=`
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
  `,u.querySelectorAll("[data-nav-link]").forEach(t=>{const n=t.getAttribute("data-nav-link");(y===n||y.startsWith(`${n}/`))&&t.setAttribute("aria-current","page")});const e=u.querySelector("[data-menu-toggle]");e.addEventListener("click",()=>{const t=u.classList.toggle("is-open");e.setAttribute("aria-expanded",String(t))})}const b=document.querySelector("[data-footer]");b&&(b.innerHTML=`
    <div class="wrap footer-grid">
      <div>
        <strong>Nitish Jeebun</strong>
        <p class="tiny">Independent iOS apps that use the power already on the device. Contact: <a href="mailto:${v}">${v}</a></p>
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
        <a href="mailto:${v}">Email</a>
      </div>
    </div>
  `);const S=document.querySelector("[data-glow]");S&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&window.addEventListener("pointermove",e=>{S.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`},{passive:!0});document.documentElement.classList.add("js-ready");const L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-in"),L.unobserve(t.target))})},{threshold:.08,rootMargin:"0px 0px -8% 0px"});document.querySelectorAll("[data-reveal]").forEach(e=>{e.getBoundingClientRect().top<window.innerHeight*.92?e.classList.add("is-in"):L.observe(e)});document.querySelectorAll("[data-carousel]").forEach(e=>{const t=[...e.querySelectorAll("[data-carousel-slide]")],n=e.querySelector("[data-carousel-dots]"),o=e.querySelector("[data-carousel-prev]"),a=e.querySelector("[data-carousel-next]");if(t.length<2||!n||!o||!a)return;let r=0,c=0;const w=matchMedia("(prefers-reduced-motion: reduce)").matches;t.forEach((i,d)=>{const s=document.createElement("button");s.type="button",s.className="carousel-dot",s.setAttribute("aria-label",`Show iPad screenshot ${d+1}`),s.addEventListener("click",()=>l(d,!0)),n.append(s)});const l=(i,d)=>{r=(i+t.length)%t.length,t.forEach((s,h)=>s.classList.toggle("is-active",h===r)),n.querySelectorAll("button").forEach((s,h)=>{h===r?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}),d&&p()},m=()=>{window.clearInterval(c),c=0},p=()=>{m(),!w&&(c=window.setInterval(()=>l(r+1),4800))};o.addEventListener("click",()=>l(r-1,!0)),a.addEventListener("click",()=>l(r+1,!0)),e.addEventListener("pointerenter",m),e.addEventListener("pointerleave",p),e.addEventListener("focusin",m),e.addEventListener("focusout",i=>{e.contains(i.relatedTarget)||p()});let g=0;e.addEventListener("pointerdown",i=>{g=i.clientX}),e.addEventListener("pointerup",i=>{const d=i.clientX-g;Math.abs(d)>40&&l(r+(d<0?1:-1),!0)}),l(0),p()});const f=document.querySelector("[data-support-form]");f&&f.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(f),n=encodeURIComponent(`[${t.get("app")||"Site"}] ${t.get("subject")||"Support request"}`),o=encodeURIComponent([`App: ${t.get("app")||"Site"}`,`Device: ${t.get("device")||"Not specified"}`,`System: ${t.get("system")||"Not specified"}`,"",t.get("message")||""].join(`
`));window.location.href=`mailto:${v}?subject=${n}&body=${o}`;const a=f.querySelector(".success");a&&(a.style.display="block")});
