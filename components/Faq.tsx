"use client";
import { faqs } from "@/lib/site";
import { T } from "@/lib/i18n";
export default function Faq() {
  return (
    <div className="faq">{faqs.map((f, i) => (
      <details key={i} open={i === 0}><summary><T v={f.q} /></summary><p><T v={f.a} /></p></details>))}</div>
  );
}
