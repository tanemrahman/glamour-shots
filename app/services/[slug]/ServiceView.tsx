"use client";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { services, ui } from "@/lib/site";
import { T } from "@/lib/i18n";

export default function ServiceView({ slug }: { slug: string }) {
  const s = services.find(x => x.slug === slug)!;
  const others = services.filter(x => x.slug !== slug);
  return (
    <>
      <PageHero eyebrow={{ en: "Service", bn: "সার্ভিস" }} title={s.title} lead={s.short} crumb={{ href: "/services/", label: { en: "Services", bn: "সার্ভিস" } }} />
      <section className="sec"><div className="wrap two">
        <div className="prose">
          <p><T v={s.intro} /></p>
          <h3><T v={ui.common.includes} /></h3>
          <ul className="checks">{s.includes.map((x, i) => <li key={i}><T v={x} /></li>)}</ul>
          <h3><T v={ui.common.ideal} /></h3>
          <p><T v={s.ideal} /></p>
          <div className="ctas" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
            <Link className="btn btn-gold" href="/contact/"><T v={ui.common.quote} /></Link>
          </div>
        </div>
        <div className="ph-box" style={{ background: "linear-gradient(145deg,#2f2a1a,#d4af6a)" }}>{s.title.en}</div>
      </div></section>
      <section className="sec alt"><div className="wrap">
        <h2 className="center"><T v={{ en: "Recent work", bn: "সাম্প্রতিক কাজ" }} /></h2>
        <Gallery filters={false} initial={s.category} limit={6} />
      </div></section>
      <section className="sec"><div className="wrap">
        <h2 className="center"><T v={ui.common.otherServices} /></h2>
        <div className="cards">{others.slice(0, 3).map(o => (
          <Link key={o.slug} href={`/services/${o.slug}/`} className="card card-link"><div className="ico">{o.icon}</div><h3><T v={o.title} /></h3><p><T v={o.short} /></p></Link>))}</div>
      </div></section>
      <CtaBand />
    </>
  );
}
