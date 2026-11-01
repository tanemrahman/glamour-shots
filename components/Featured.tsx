"use client";
import { featured, site } from "@/lib/site";
import { T } from "@/lib/i18n";
export default function Featured() {
  return (
    <section className="sec"><div className="wrap">
      <div className="feat">
        <div className="feat-art" aria-hidden="true"><span>🌼</span><span>🌼</span><span>🌼</span></div>
        <div className="feat-body">
          <p className="eyebrow" style={{ color: "var(--gold2)" }}><T v={{ en: "Featured event", bn: "ফিচার্ড ইভেন্ট" }} /></p>
          <h2 style={{ color: "#fff", marginBottom: ".6rem" }}><T v={featured.title} /></h2>
          <p className="feat-date">📅 <T v={featured.date} /> · 📍 Dhaka</p>
          <p><T v={featured.text} /></p>
          <a className="btn btn-gold" href={site.contact.facebook} target="_blank" rel="noopener"><T v={{ en: "See more on Facebook", bn: "ফেসবুকে আরও দেখুন" }} /></a>
        </div>
      </div>
    </div></section>
  );
}
