"use client";
import { whyUs } from "@/lib/site";
import { T } from "@/lib/i18n";
export default function WhyUs() {
  return (
    <section className="sec why"><div className="wrap">
      <p className="eyebrow center"><T v={{ en: "Why Glamour Shots", bn: "কেন গ্ল্যামার শটস" }} /></p>
      <h2 className="center"><T v={{ en: "Made for unforgettable days", bn: "অবিস্মরণীয় দিনের জন্য" }} /></h2>
      <div className="whys">{whyUs.map((w, i) => (
        <div className="why-i" key={i}><span className="why-ic">{w.i}</span><h3><T v={w.t} /></h3><p><T v={w.d} /></p></div>))}</div>
    </div></section>
  );
}
