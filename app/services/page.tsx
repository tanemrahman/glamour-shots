"use client";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { services, ui } from "@/lib/site";
import { T } from "@/lib/i18n";

export default function Services() {
  return (
    <>
      <PageHero eyebrow={{ en: "Services", bn: "সার্ভিস" }} title={{ en: "Every celebration, beautifully kept", bn: "প্রতিটি আনন্দ, সুন্দরভাবে সংরক্ষিত" }}
        lead={{ en: "Photo, video and cinema coverage for weddings, holud, engagements, birthdays and events.", bn: "বিয়ে, হলুদ, এনগেজমেন্ট, জন্মদিন ও ইভেন্টের ফটো, ভিডিও ও সিনেমা কভারেজ।" }} />
      <section className="sec"><div className="wrap"><div className="cards">
        {services.map(s => (
          <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-link">
            <div className="ico">{s.icon}</div><h3><T v={s.title} /></h3><p><T v={s.short} /></p>
            <span className="more-l"><T v={ui.common.learn} /> →</span>
          </Link>))}
      </div></div></section>
      <CtaBand />
    </>
  );
}
