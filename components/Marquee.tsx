import { marquee } from "@/lib/site";
export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">{[0, 1].map(k => <div className="mq-row" key={k}>{row.map((w, i) => <span key={i}>{w}<i>✦</i></span>)}</div>)}</div>
    </div>
  );
}
