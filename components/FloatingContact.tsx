"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { waLink } from "@/lib/util";

export default function FloatingContact() {
  const { lang } = useLang();
  const [tip, setTip] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setTip(true), 3500), b = setTimeout(() => setTip(false), 11000);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  return (
    <div className="fc">
      {tip && <div className="fc-tip" onClick={() => setTip(false)}>
        <b>{lang === "en" ? "Planning an event? 🎉" : "ইভেন্ট করছেন? 🎉"}</b>
        <span>{lang === "en" ? "Message us for a free quote" : "ফ্রি কোটেশনের জন্য মেসেজ করুন"}</span>
      </div>}
      <a className="fc-call" href={`tel:${site.contact.phone}`} aria-label="Call us">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.200 2.500.600 3.600.1.300 0 .700-.2 1l-2.300 2.200z"/></svg>
      </a>
      <a className="fc-wa" href={waLink()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span className="fc-ic"><svg viewBox="0 0 32 32" width="26" height="26" fill="#fff"><path d="M16 3C9.400 3 4 8.300 4 14.900c0 2.300.7 4.500 1.900 6.300L4 29l8-2.100c1.700.9 3.900 1.400 5.800 1.400 6.600 0 12-5.300 12-11.900S22.600 3 16 3zm0 21.800c-1.900 0-3.700-.5-5.200-1.500l-.4-.2-4.100 1.100 1.100-4-.3-.4a9.700 9.700 0 0 1-1.500-5.100C5.600 9.600 10.200 5.200 16 5.200s10.400 4.400 10.400 9.800S21.700 24.800 16 24.800zm5.700-7.300c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.500 8.500 0 0 1-4.200-3.700c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.400 1 2.800 1.200 3c.1.200 2 3.100 4.900 4.300 1.800.8 2.500.8 3.400.7.5-.1 1.800-.7 2-1.400s.3-1.300.2-1.400-.3-.2-.6-.4z"/></svg></span>
        <span className="fc-txt"><small>{lang === "en" ? "Chat on" : "চ্যাট করুন"}</small><b>WhatsApp</b></span>
      </a>
    </div>
  );
}
