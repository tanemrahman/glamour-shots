"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { T } from "@/lib/i18n";

function Num({ n, s }: { n: number; s: string }) {
  const ref = useRef<HTMLElement>(null); const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const f = (t: number) => { const p = Math.min(1, (t - t0) / 1400); setV(Math.round(n * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [n]);
  return <b ref={ref}>{v}{s}</b>;
}
export default function Stats() {
  return (
    <section className="stats"><div className="wrap grid-stats">
      {site.stats.map((s, i) => <div className="stat" key={i}><Num n={s.value} s={s.suffix} /><span><T v={s.label} /></span></div>)}
    </div></section>
  );
}
