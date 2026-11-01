"use client";
import Link from "next/link";
import { ui } from "@/lib/site";
import { T, useLang } from "@/lib/i18n";
export default function Hero() {
  const { lang } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <p className="eyebrow">{lang === "en" ? "Dhaka · Photography · Videography · Cinematography" : "ঢাকা · ফটোগ্রাফি · ভিডিওগ্রাফি · সিনেমাটোগ্রাফি"}</p>
        <h1>{lang === "en" ? <>Your biggest day,<br /><em>told like a film.</em></> : <>আপনার সেরা দিনটি,<br /><em>যেন একটি সিনেমা।</em></>}</h1>
        <p className="lead">{lang === "en" ? "Weddings, holud nights, engagements, birthdays and every celebration in between — captured with an eye for emotion and a cinematic touch." : "বিয়ে, গায়ে হলুদ, এনগেজমেন্ট, জন্মদিনসহ প্রতিটি আয়োজনের আবেগ ধরে রাখি সিনেমাটিক ছোঁয়ায়।"}</p>
        <div className="cta">
          <Link className="btn btn-gold" href="/contact/"><T v={ui.common.quote} /></Link>
          <Link className="btn btn-ghost" href="/portfolio/"><T v={ui.common.work} /></Link>
        </div>
        <ul className="hero-meta"><li>📍 Dhaka, Bangladesh</li><li>🎞 Photo + Video + Cinema</li><li>💬 WhatsApp replies fast</li></ul>
      </div>
    </section>
  );
}
