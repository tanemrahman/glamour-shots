"use client";
import Link from "next/link";
import { T } from "@/lib/i18n";
import type { L } from "@/lib/site";
export default function PageHero({ eyebrow, title, lead, crumb }: { eyebrow: L; title: L; lead?: L; crumb?: { href: string; label: L } }) {
  return (
    <section className="page-hero dark"><div className="wrap">
      {crumb && <p className="crumbs"><Link href="/">Home</Link> / <Link href={crumb.href}><T v={crumb.label} /></Link></p>}
      <p className="eyebrow"><T v={eyebrow} /></p>
      <h1 style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)" }}><T v={title} /></h1>
      {lead && <p className="lead"><T v={lead} /></p>}
    </div></section>
  );
}
