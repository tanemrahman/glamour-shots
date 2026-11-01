"use client";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { site } from "@/lib/site";

export default function Contact() {
  const map = site.address.mapEmbed || "https://maps.google.com/maps?q=" + encodeURIComponent(site.address.text.en) + "&output=embed";
  return (
    <>
      <PageHero eyebrow={{ en: "Contact", bn: "যোগাযোগ" }} title={{ en: "Planning an event?", bn: "ইভেন্টের পরিকল্পনা করছেন?" }}
        lead={{ en: "Tell us about your date and we'll get back with availability and a quote.", bn: "তারিখ জানান, আমরা অ্যাভেইলেবিলিটি ও কোটেশন জানাব।" }} />
      <section className="sec"><div className="wrap contact"><div><ContactInfo /></div><ContactForm /></div>
        <div className="wrap map"><iframe title="Map" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    </>
  );
}
