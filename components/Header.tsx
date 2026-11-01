"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ui } from "@/lib/site";
import { T, useLang } from "@/lib/i18n";

const items = [
  ["/", ui.nav.home], ["/about/", ui.nav.about], ["/services/", ui.nav.services],
  ["/portfolio/", ui.nav.portfolio], ["/films/", ui.nav.films], ["/contact/", ui.nav.contact],
] as const;

export default function Header() {
  const path = usePathname();
  const { lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(scrollY > 30);
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const isActive = (h: string) => (h === "/" ? path === "/" : path.startsWith(h.replace(/\/$/, "")));
  return (
    <header className={"nav" + (solid ? " solid" : "")}>
      <div className="wrap nav-in">
      <Link href="/" className="brand"><span className="brand-mark">G</span> Glamour <em>Shots</em></Link>
      <nav className={"links" + (open ? " open" : "")} aria-label="Main">
        {items.map(([h, l]) => <Link key={h} href={h} className={isActive(h) ? "active" : ""}><T v={l} /></Link>)}
      </nav>
      <div className="nav-right">
        <button className="lang" onClick={() => setLang(lang === "en" ? "bn" : "en")} aria-label="Switch language">{lang === "en" ? "বাংলা" : "English"}</button>
        <Link className="btn btn-gold sm" id="navCall" href="/contact/"><T v={ui.nav.book} /></Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      </div>
    </header>
  );
}
