"use client";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { site } from "@/lib/site";
import { T, useLang } from "@/lib/i18n";
import { waLink } from "@/lib/util";

export default function Contact() {
  const { lang } = useLang();
  const tips = lang === "en"
    ? ["Event type & date", "Venue / area in Dhaka", "Approx. number of guests", "Photo, video or both"]
    : ["ইভেন্টের ধরন ও তারিখ", "ভেন্যু / এলাকা", "আনুমানিক মেহমান সংখ্যা", "ফটো, ভিডিও নাকি দুটোই"];
  const map = site.address.mapEmbed || "https://maps.google.com/maps?q=" + encodeURIComponent(site.address.text.en) + "&output=embed";
  return (
    <>
      <PageHero eyebrow={{ en: "Contact", bn: "যোগাযোগ" }} title={{ en: "Planning an event?", bn: "ইভেন্টের পরিকল্পনা করছেন?" }}
        lead={{ en: "Tell us about your date and we'll get back with availability and a quote.", bn: "তারিখ জানান, আমরা অ্যাভেইলেবিলিটি ও কোটেশন জানাব।" }} />
      <section className="sec"><div className="wrap contact"><div>
          <h2 style={{ marginBottom: "1.2rem" }}><T v={{ en: "Get in touch", bn: "যোগাযোগ করুন" }} /></h2>
          <div className="qa">
            <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener">💬 WhatsApp</a>
            <a className="btn btn-ghost" href={`tel:${site.contact.phone}`}>📞 {lang === "en" ? "Call now" : "কল করুন"}</a>
          </div>
          <ContactInfo />
          <div className="tips">
            <h3>{lang === "en" ? "Tell us these for a faster quote" : "দ্রুত কোটেশনের জন্য জানান"}</h3>
            <ul className="checks">{tips.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div><ContactForm /></div>
        <div className="wrap map"><iframe title="Map" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    </>
  );
}
