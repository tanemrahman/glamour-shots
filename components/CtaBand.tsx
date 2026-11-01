"use client";
import Link from "next/link";
import { site, ui } from "@/lib/site";
import { T } from "@/lib/i18n";
import { waLink } from "@/lib/util";
export default function CtaBand() {
  return (
    <section className="band"><div className="wrap">
      <h2><T v={ui.common.ctaTitle} /></h2><p><T v={ui.common.ctaText} /></p>
      <div className="ctas">
        <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener"><T v={ui.common.wa} /></a>
        <a className="btn btn-ghost" href={`tel:${site.contact.phone}`}><T v={ui.common.call} /> · {site.contact.phoneDisplay}</a>
        <Link className="btn btn-ghost" href="/contact/"><T v={ui.common.quote} /></Link>
      </div>
    </div></section>
  );
}
