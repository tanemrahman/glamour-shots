"use client";
import Link from "next/link";
import { packages } from "@/lib/site";
import { T, useLang } from "@/lib/i18n";
import { waLink } from "@/lib/util";
export default function Packages() {
  const { lang } = useLang();
  return (
    <>
      <div className="pk-grid">{packages.map((p, i) => (
        <div className={"pk" + (p.popular ? " pop" : "")} key={i}>
          {p.popular && <span className="pk-badge">★ {lang === "en" ? "Popular" : "জনপ্রিয়"}</span>}
          <h3><T v={p.name} /></h3><p className="pk-tag"><T v={p.tag} /></p>
          <div className="pk-price">{lang === "en" ? "Custom quote" : "কাস্টম কোটেশন"}</div>
          <ul className="checks">{p.features.map((f, j) => <li key={j}><T v={f} /></li>)}</ul>
          <a className={"btn " + (p.popular ? "btn-gold" : "btn-ghost")} href={waLink(`Hi! I'm interested in the ${p.name.en} package.`)} target="_blank" rel="noopener">{lang === "en" ? "Ask about this" : "জানতে চাই"}</a>
        </div>))}</div>
      <p className="center note"><T v={{ en: "Every event is different — we'll customise coverage and price to fit yours.", bn: "প্রতিটি ইভেন্ট আলাদা — আপনার প্রয়োজন অনুযায়ী কভারেজ ও মূল্য ঠিক করা হবে।" }} /> <Link href="/contact/">→</Link></p>
    </>
  );
}
