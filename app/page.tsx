import Link from "next/link";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import VideoGrid from "@/components/VideoGrid";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import { services, site, ui } from "@/lib/site";
import { T } from "@/lib/i18n";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="sec"><div className="wrap">
        <p className="eyebrow center"><T v={{ en: "What we shoot", bn: "আমরা যা করি" }} /></p>
        <h2 className="center"><T v={{ en: "Every celebration, beautifully kept", bn: "প্রতিটি আনন্দ, সুন্দরভাবে সংরক্ষিত" }} /></h2>
        <div className="cards">{services.map(s => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-link">
            <div className="ico">{s.icon}</div><h3><T v={s.title} /></h3><p><T v={s.short} /></p>
            <span className="more-l"><T v={ui.common.learn} /> →</span>
          </Link>))}</div>
      </div></section>
      <section className="sec alt"><div className="wrap">
        <p className="eyebrow center"><T v={{ en: "Portfolio", bn: "পোর্টফোলিও" }} /></p>
        <h2 className="center"><T v={{ en: "Moments we've framed", bn: "আমাদের তোলা কিছু মুহূর্ত" }} /></h2>
        <Gallery limit={6} filters={false} />
        <p className="center more"><Link href="/portfolio/" className="btn btn-ghost"><T v={ui.common.viewAll} /></Link></p>
      </div></section>
      <section className="sec"><div className="wrap">
        <p className="eyebrow center"><T v={{ en: "Films", bn: "ফিল্ম" }} /></p>
        <h2 className="center"><T v={{ en: "Watch the story unfold", bn: "গল্পটা দেখুন" }} /></h2>
        <VideoGrid limit={3} />
        <p className="center more"><Link href="/films/" className="btn btn-ghost"><T v={ui.common.viewAll} /></Link></p>
      </div></section>
      <section className="sec alt"><div className="wrap">
        <p className="eyebrow center"><T v={{ en: "How it works", bn: "কীভাবে কাজ করি" }} /></p>
        <h2 className="center"><T v={{ en: "From hello to your final gallery", bn: "প্রথম কথা থেকে ফাইনাল গ্যালারি" }} /></h2>
        <ProcessSteps />
      </div></section>
      <section className="sec"><div className="wrap narrow">
        <p className="eyebrow center"><T v={{ en: "Kind words", bn: "ক্লায়েন্টদের কথা" }} /></p>
        <h2 className="center"><T v={{ en: "Loved by our clients", bn: "যাঁরা আমাদের ভালোবাসেন" }} /></h2>
        <div className="reviews">{site.testimonials.map((t, i) => (
          <blockquote key={i}><span className="stars">★★★★★</span>“{t.text}”<cite>{t.name} <small>· {t.note}</small></cite></blockquote>))}</div>
        <div className="venues"><T v={{ en: "Venues we've shot at:", bn: "যেসব ভেন্যুতে কাজ করেছি:" }} /> {site.venues.map((v, i) => <span key={v}><b>{v}</b>{i < site.venues.length - 1 ? " · " : ""}</span>)}</div>
      </div></section>
      <CtaBand />
    </>
  );
}
