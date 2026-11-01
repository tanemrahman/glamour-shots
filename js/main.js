(() => {
const S = window.SITE, C = S.contact, $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- i18n (EN / বাংলা) ---------- */
const BN = {
  nav_services:"সার্ভিস", nav_portfolio:"পোর্টফোলিও", nav_films:"ভিডিও", nav_process:"প্রক্রিয়া", nav_contact:"যোগাযোগ", book:"বুক করুন",
  hero_eyebrow:"ঢাকা · ফটোগ্রাফি · ভিডিওগ্রাফি · সিনেমাটোগ্রাফি",
  hero_title:"আপনার সেরা দিনটি,<br><em>যেন একটি সিনেমা।</em>",
  hero_lead:"বিয়ে, গায়ে হলুদ, এনগেজমেন্ট, জন্মদিনসহ প্রতিটি আয়োজনের আবেগ ধরে রাখি সিনেমাটিক ছোঁয়ায়।",
  cta_quote:"ফ্রি কোটেশন নিন", cta_work:"আমাদের কাজ দেখুন",
  svc_eyebrow:"আমরা যা করি", svc_title:"প্রতিটি আনন্দ, সুন্দরভাবে সংরক্ষিত",
  s1t:"বিয়ে", s1d:"গায়ে হলুদ থেকে রিসেপশন — ক্যান্ডিড ছবি, সিনেমাটিক ফিল্ম ও হাইলাইট রিল।",
  s2t:"গায়ে হলুদ", s2d:"রং, গান আর হাসি — প্রতিটি মুহূর্ত ফ্রেমে।",
  s3t:"এনগেজমেন্ট ও প্রি-ওয়েডিং", s3d:"কাপল পোর্ট্রেট ও আংটি বদলের মুহূর্ত।",
  s4t:"জন্মদিন ও পারিবারিক", s4d:"বার্থডে পার্টি, মাইলস্টোন ও পারিবারিক আয়োজন।",
  s5t:"সিনেমাটোগ্রাফি", s5d:"কালার গ্রেডিংসহ গল্পনির্ভর সিনেমাটিক ফিল্ম।",
  s6t:"কর্পোরেট ও ইভেন্ট", s6d:"লঞ্চ, গালা ও ব্র্যান্ড ইভেন্ট — দ্রুত ডেলিভারি।",
  pf_eyebrow:"পোর্টফোলিও", pf_title:"আমাদের তোলা কিছু মুহূর্ত",
  fl_eyebrow:"ফিল্ম", fl_title:"গল্পটা দেখুন",
  pr_eyebrow:"কীভাবে কাজ করি", pr_title:"প্রথম কথা থেকে ফাইনাল গ্যালারি",
  p1t:"মেসেজ করুন", p1d:"তারিখ, ভেন্যু ও ইভেন্টের ধরন জানিয়ে কল বা হোয়াটসঅ্যাপ করুন।",
  p2t:"প্ল্যান ও কোটেশন", p2d:"কভারেজ, টিম ও প্যাকেজ চূড়ান্ত করি।",
  p3t:"বিশেষ দিন", p3d:"ফটো ও ভিডিও টিম প্রতিটি মুহূর্ত ধরে রাখে।",
  p4t:"এডিট ও কালার", p4d:"যত্ন করে রিটাচ ও সিনেমাটিক গ্রেডিং।",
  p5t:"ডেলিভারি", p5d:"অনলাইন গ্যালারি, ফিল্ম ও চাইলে প্রিন্টেড অ্যালবাম।",
  rv_eyebrow:"ক্লায়েন্টদের কথা", rv_title:"যাঁরা আমাদের ভালোবাসেন", venues:"যেসব ভেন্যুতে কাজ করেছি:",
  ct_eyebrow:"কথা বলি", ct_title:"ইভেন্টের পরিকল্পনা করছেন?", ct_lead:"তারিখ জানান, আমরা অ্যাভেইলেবিলিটি ও কোটেশন জানাব।",
  f_name:"আপনার নাম", f_phone:"ফোন", f_event:"ইভেন্ট", f_date:"তারিখ", f_msg:"বার্তা",
  f_send:"হোয়াটসঅ্যাপে পাঠান", f_hint:"এটি আপনার তথ্যসহ হোয়াটসঅ্যাপ খুলবে।"
};
const EN = {};
document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(el => {
  const k = el.dataset.i18n || el.dataset.i18nHtml;
  EN[k] = el.dataset.i18n ? el.textContent : el.innerHTML;
});
let lang = 'en';
try { lang = localStorage.getItem('gs-lang') || 'en'; } catch {}
function setLang(l){
  lang = l; const d = l === 'bn' ? BN : EN;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (d[el.dataset.i18n]) el.textContent = d[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { if (d[el.dataset.i18nHtml]) el.innerHTML = d[el.dataset.i18nHtml]; });
  $('#lang').textContent = l === 'bn' ? 'English' : 'বাংলা';
  try { localStorage.setItem('gs-lang', l); } catch {}
}
$('#lang').onclick = () => setLang(lang === 'en' ? 'bn' : 'en');
if (lang === 'bn') setLang('bn');

/* ---------- nav ---------- */
const nav = $('#nav'), links = $('#links'), burger = $('#burger');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 30), {passive:true});
burger.onclick = () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
$('#navCall').href = 'tel:' + C.phone; if (matchMedia('(min-width:561px)').matches) $('#navCall').href = '#contact';
$('#yr').textContent = new Date().getFullYear();

/* ---------- WhatsApp ---------- */
const waLink = (txt = "Hi Glamour Shots! I'd like to know about your photography/videography packages.") =>
  `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(txt)}`;
$('#waFloat').href = waLink();

/* ---------- stats ---------- */
$('#statsGrid').innerHTML = S.stats.map(s => `<div class="stat"><b data-n="${s.value}" data-s="${esc(s.suffix||'')}">0${esc(s.suffix||'')}</b><span>${esc(s.label)}</span></div>`).join('');
const count = el => {
  const n = +el.dataset.n, s = el.dataset.s, t0 = performance.now();
  const f = t => { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + s; if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
};

/* ---------- gallery ---------- */
const GRAD = ['#3b1d2a,#c58b6a','#1d2a3b,#8aa0c5','#2f2a1a,#d4af6a','#3b1d33,#d28bb5','#1f3b2c,#8bc5a1','#3b2a1d,#e0a56a'];
const cats = ['all', ...new Set(S.gallery.map(g => g.category))];
const label = c => c === 'all' ? 'All' : c[0].toUpperCase() + c.slice(1);
$('#filters').innerHTML = cats.map((c,i) => `<button class="chip${i?'':' on'}" data-c="${c}">${label(c)}</button>`).join('');
let shown = [];
function renderGallery(cat = 'all'){
  shown = S.gallery.filter(g => cat === 'all' || g.category === cat);
  $('#gallery').innerHTML = shown.map((g,i) => g.src
    ? `<button class="tile" data-i="${i}" data-t="${esc(g.title)}"><img src="${esc(g.src)}" alt="${esc(g.title)}" loading="lazy"></button>`
    : `<button class="tile" data-i="${i}" data-t="${esc(g.title)}"><div class="ph" style="background:linear-gradient(145deg,${GRAD[i%GRAD.length]})">${esc(g.title)}</div></button>`).join('');
}
renderGallery();
$('#filters').onclick = e => { const b = e.target.closest('.chip'); if (!b) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b)); renderGallery(b.dataset.c); };

/* lightbox */
const lb = $('#lb'); let cur = 0;
function openLb(i){ cur = (i + shown.length) % shown.length; const g = shown[cur];
  $('#lbImg').innerHTML = g.src ? `<img src="${esc(g.src)}" alt="${esc(g.title)}">` : `<div class="ph" style="background:linear-gradient(145deg,${GRAD[cur%GRAD.length]})">${esc(g.title)}</div>`;
  $('#lbCap').textContent = g.title; lb.hidden = false; document.body.style.overflow = 'hidden'; }
const closeLb = () => { lb.hidden = true; document.body.style.overflow = ''; };
$('#gallery').onclick = e => { const t = e.target.closest('.tile'); if (t) openLb(+t.dataset.i); };
$('#lbX').onclick = closeLb; $('#lbP').onclick = () => openLb(cur - 1); $('#lbN').onclick = () => openLb(cur + 1);
lb.onclick = e => { if (e.target === lb) closeLb(); };
addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowLeft') openLb(cur-1); if (e.key === 'ArrowRight') openLb(cur+1); });

/* ---------- videos (lazy YouTube) ---------- */
$('#videos').innerHTML = S.videos.map((v,i) => v.id
  ? `<button class="vid" data-id="${esc(v.id)}" aria-label="Play ${esc(v.title)}"><img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy"><span class="play"><i></i></span><span class="vtitle">${esc(v.title)}</span></button>`
  : `<div class="vid" style="cursor:default;background:linear-gradient(135deg,${GRAD[i%GRAD.length]})"><span class="play"><i></i></span><span class="vtitle">${esc(v.title)}</span></div>`).join('');
$('#videos').onclick = e => { const b = e.target.closest('button.vid'); if (!b) return;
  b.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(b.dataset.id)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>`; };
if (C.youtube) $('#ytMore').innerHTML = `<a href="${esc(C.youtube)}" target="_blank" rel="noopener">More films on YouTube →</a>`;

/* ---------- reviews / venues ---------- */
$('#reviews').innerHTML = S.testimonials.map(t => `<blockquote><span class="stars">★★★★★</span>“${esc(t.text)}”<cite>${esc(t.name)} <small>· ${esc(t.note||'')}</small></cite></blockquote>`).join('');
$('#venueList').innerHTML = S.venues.map(v => `<b>${esc(v)}</b>`).join(' · ');

/* ---------- contact ---------- */
const row = (ic, k, v, href) => `<li>${href?`<a href="${esc(href)}" ${href.startsWith('http')?'target="_blank" rel="noopener"':''}>`:''}<span class="ic">${ic}</span><span><small>${k}</small><b>${esc(v)}</b></span>${href?'</a>':''}</li>`;
$('#info').innerHTML =
  row('📞','Call', C.phoneDisplay, 'tel:' + C.phone) +
  row('💬','WhatsApp', C.phoneDisplay, waLink()) +
  (C.email ? row('✉️','Email', C.email, 'mailto:' + C.email) : '') +
  row('📍','Address', S.address.text, '') ;
$('#social').innerHTML = [['Facebook',C.facebook],['Instagram',C.instagram],['YouTube',C.youtube],['TikTok',C.tiktok]]
  .filter(x => x[1]).map(x => `<a href="${esc(x[1])}" target="_blank" rel="noopener">${x[0]}</a>`).join('');
$('#map').src = S.address.mapEmbed || 'https://maps.google.com/maps?q=' + encodeURIComponent(S.address.text) + '&output=embed';

$('#form').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target; let ok = true;
  ['name','phone'].forEach(n => { const bad = !f[n].value.trim(); f[n].classList.toggle('bad', bad); if (bad) ok = false; });
  if (!ok) return;
  const msg = `Hello Glamour Shots!\nName: ${f.name.value}\nPhone: ${f.phone.value}\nEvent: ${f.event.value}` +
    (f.date.value ? `\nDate: ${f.date.value}` : '') + (f.msg.value ? `\nDetails: ${f.msg.value}` : '');
  window.open(waLink(msg), '_blank', 'noopener');
});

/* ---------- reveal on scroll ---------- */
document.querySelectorAll('.card,.steps li,.stat,.reviews blockquote,.vid,.form').forEach(el => el.classList.add('rv'));
const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return;
  e.target.classList.add('in'); const b = e.target.querySelector?.('b[data-n]'); if (b) count(b); io.unobserve(e.target); }), {threshold:.15});
document.querySelectorAll('.rv').forEach(el => io.observe(el));
})();
