"use client";
import { useEffect, useState } from "react";
import { gallery, categoryLabel, type Category } from "@/lib/site";
import { GRAD } from "@/lib/util";
import { T } from "@/lib/i18n";

export default function Gallery({ limit, initial = "all", filters = true }: { limit?: number; initial?: Category | "all"; filters?: boolean }) {
  const [cat, setCat] = useState<Category | "all">(initial);
  const [open, setOpen] = useState<number | null>(null);
  const cats = ["all", ...Array.from(new Set(gallery.map(g => g.category)))] as (Category | "all")[];
  let list = gallery.filter(g => cat === "all" || g.category === cat);
  if (limit) list = list.slice(0, limit);
  const go = (d: number) => setOpen(o => (o === null ? o : (o + d + list.length) % list.length));
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); };
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  });
  const Pic = ({ i, big }: { i: number; big?: boolean }) => {
    const g = list[i];
    return g.src ? <img src={g.src} alt={g.title} loading="lazy" />
      : <div className={big ? "ph big" : "ph"} style={{ background: `linear-gradient(145deg,${GRAD[i % GRAD.length]})` }}>{g.title}</div>;
  };
  return (
    <>
      {filters && <div className="filters">{cats.map(c => (
        <button key={c} className={"chip" + (c === cat ? " on" : "")} onClick={() => setCat(c)}><T v={categoryLabel[c]} /></button>))}</div>}
      <div className="masonry">
        {list.map((g, i) => <button key={g.title + i} className="tile" data-t={g.title} onClick={() => setOpen(i)}><Pic i={i} /></button>)}
      </div>
      {open !== null && list[open] && (
        <div className="lightbox" onClick={e => { if (e.target === e.currentTarget) setOpen(null); }}>
          <button className="lb-x" onClick={() => setOpen(null)} aria-label="Close">×</button>
          <button className="lb-n prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
          <figure><Pic i={open} big /><figcaption id="lbCap">{list[open].title}</figcaption></figure>
          <button className="lb-n next" onClick={() => go(1)} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
