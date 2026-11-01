"use client";
import { site } from "@/lib/site";
import { T } from "@/lib/i18n";
import { waLink } from "@/lib/util";

function Row({ ic, k, children, href }: { ic: string; k: string; children: React.ReactNode; href?: string }) {
  const inner = <><span className="ic">{ic}</span><span><small>{k}</small><b>{children}</b></span></>;
  return <li>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{inner}</a> : inner}</li>;
}
export default function ContactInfo() {
  const c = site.contact;
  const social = [["Facebook", c.facebook], ["Instagram", c.instagram], ["YouTube", c.youtube], ["TikTok", c.tiktok]].filter(x => x[1]);
  return (
    <>
      <ul className="info">
        <Row ic="📞" k="Call" href={`tel:${c.phone}`}>{c.phoneDisplay}</Row>
        <Row ic="💬" k="WhatsApp" href={waLink()}>{c.phoneDisplay}</Row>
        {c.email && <Row ic="✉️" k="Email" href={`mailto:${c.email}`}>{c.email}</Row>}
        <Row ic="📍" k="Address"><T v={site.address.text} /></Row>
        <Row ic="🕘" k="Hours"><T v={site.address.hours} /></Row>
      </ul>
      <div className="social">{social.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener">{n}</a>)}</div>
    </>
  );
}
