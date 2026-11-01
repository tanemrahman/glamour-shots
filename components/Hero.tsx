"use client";
import Link from "next/link";
import { ui } from "@/lib/site";
import { T, useLang } from "@/lib/i18n";
export default function Hero() {
  const { lang } = useLang();
  return (
    <section className="hero dark">
      <div className="wrap hero-grid">
      <div>
        <p className="script">{lang === "en" ? "Capturing your forever" : "আপনার চিরস্মরণীয় মুহূর্ত"}</p>
        <p className="eyebrow">{lang === "en" ? "Dhaka · Photography · Videography · Cinematography" : "ঢাকা · ফটোগ্রাফি · ভিডিওগ্রাফি · সিনেমাটোগ্রাফি"}</p>
        <h1>{lang === "en" ? <>Your biggest day,<br /><em>told like a film.</em></> : <>আপনার সেরা দিনটি,<br /><em>যেন একটি সিনেমা।</em></>}</h1>
        <p className="lead">{lang === "en" ? "Weddings, holud nights, engagements, birthdays and every celebration in between — captured with an eye for emotion and a cinematic touch." : "বিয়ে, গায়ে হলুদ, এনগেজমেন্ট, জন্মদিনসহ প্রতিটি আয়োজনের আবেগ ধরে রাখি সিনেমাটিক ছোঁয়ায়।"}</p>
        <div className="cta">
          <Link className="btn btn-gold" href="/contact/"><T v={ui.common.quote} /></Link>
          <Link className="btn btn-ghost" href="/portfolio/"><T v={ui.common.work} /></Link>
        </div>
        <ul className="hero-meta"><li>📍 Dhaka, Bangladesh</li><li>🎞 Photo + Video + Cinema</li><li>💬 WhatsApp replies fast</li></ul>
      </div>
      <div className="collage" aria-hidden="true">
        <span className="orb o1" /><span className="orb o2" />
        <div className="badge b1">⭐ {lang === "en" ? "Loved by couples" : "দম্পতিদের পছন্দ"}</div>
        <div className="badge b2">🎬 {lang === "en" ? "Photo + Film" : "ফটো + ফিল্ম"}</div>
        <div className="cc cc1">{lang === "en" ? "Wedding" : "বিয়ে"}</div>
        <div className="cc cc2">{lang === "en" ? "Holud" : "গায়ে হলুদ"}</div>
        <div className="cc cc3">{lang === "en" ? "Cinematic" : "সিনেমাটিক"}</div>
      </div>
      </div>
    </section>
  );
}
