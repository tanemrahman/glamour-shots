"use client";
import Link from "next/link";
import { site, ui } from "@/lib/site";
import { T } from "@/lib/i18n";

export default function Footer() {
  const c = site.contact;
  return (
    <footer className="foot dark">
      <div className="wrap">
        <Link href="/" className="brand"><span className="brand-mark">G</span> Glamour <em>Shots</em></Link>
        <p><T v={site.tagline} /></p>
        <div className="sitemap">
          <Link href="/about/"><T v={ui.nav.about} /></Link>
          <Link href="/services/"><T v={ui.nav.services} /></Link>
          <Link href="/portfolio/"><T v={ui.nav.portfolio} /></Link>
          <Link href="/films/"><T v={ui.nav.films} /></Link>
          <Link href="/contact/"><T v={ui.nav.contact} /></Link>
        </div>
        <p><a href={`tel:${c.phone}`}>{c.phoneDisplay}</a> · <a href={c.facebook} target="_blank" rel="noopener">Facebook</a></p>
        <p className="copy">© {new Date().getFullYear()} Glamour Shots. All rights reserved.</p>
      </div>
    </footer>
  );
}
