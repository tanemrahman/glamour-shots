"use client";
import { process } from "@/lib/site";
import { T } from "@/lib/i18n";
export default function ProcessSteps() {
  return (
    <ol className="steps">{process.map((p, i) => (
      <li key={i}><span>{i + 1}</span><h3><T v={p.t} /></h3><p><T v={p.d} /></p></li>))}</ol>
  );
}
