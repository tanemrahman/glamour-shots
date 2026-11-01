"use client";
import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/util";

const L = {
  en: { name: "Your name", phone: "Phone", event: "Event", date: "Date", msg: "Message", ph: "Venue, guests, what you need…", send: "Send via WhatsApp", hint: "This opens WhatsApp with your details filled in." },
  bn: { name: "আপনার নাম", phone: "ফোন", event: "ইভেন্ট", date: "তারিখ", msg: "বার্তা", ph: "ভেন্যু, মেহমান, কী কী লাগবে…", send: "হোয়াটসঅ্যাপে পাঠান", hint: "এটি আপনার তথ্যসহ হোয়াটসঅ্যাপ খুলবে।" },
};
const events = ["Wedding", "Holud / Haldi", "Engagement", "Birthday", "Corporate", "Other"];

export default function ContactForm() {
  const { lang } = useLang(); const t = L[lang];
  const [bad, setBad] = useState<string[]>([]);
  /* BACKEND LATER: replace the window.open below with
     fetch("/api/booking", { method: "POST", body: JSON.stringify(data) }) */
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const missing = ["name", "phone"].filter(k => !d[k]?.trim());
    setBad(missing); if (missing.length) return;
    const msg = `Hello Glamour Shots!\nName: ${d.name}\nPhone: ${d.phone}\nEvent: ${d.event}` + (d.date ? `\nDate: ${d.date}` : "") + (d.msg ? `\nDetails: ${d.msg}` : "");
    window.open(waLink(msg), "_blank", "noopener");
  };
  return (
    <form className="form" onSubmit={submit} noValidate>
      <label><span>{t.name}</span><input name="name" autoComplete="name" className={bad.includes("name") ? "bad" : ""} /></label>
      <label><span>{t.phone}</span><input name="phone" type="tel" autoComplete="tel" className={bad.includes("phone") ? "bad" : ""} /></label>
      <div className="row">
        <label><span>{t.event}</span><select name="event">{events.map(x => <option key={x}>{x}</option>)}</select></label>
        <label><span>{t.date}</span><input name="date" type="date" /></label>
      </div>
      <label><span>{t.msg}</span><textarea name="msg" rows={3} placeholder={t.ph} /></label>
      <button className="btn btn-gold" type="submit">{t.send}</button>
      <p className="hint">{t.hint}</p>
    </form>
  );
}
