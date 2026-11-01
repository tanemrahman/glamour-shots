"use client";
import PageHero from "@/components/PageHero";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { T } from "@/lib/i18n";
export default function Page() {
  return (
    <>
      <PageHero eyebrow={{ en: "Packages", bn: "প্যাকেজ" }} title={{ en: "Coverage that fits your day", bn: "আপনার দিনের উপযোগী কভারেজ" }}
        lead={{ en: "Choose a starting point — we'll tailor it to your event.", bn: "একটি প্যাকেজ বেছে নিন — আমরা আপনার ইভেন্ট অনুযায়ী সাজিয়ে দেব।" }} />
      <section className="sec"><div className="wrap"><Packages /></div></section>
      <section className="sec alt"><div className="wrap narrow">
        <h2 className="center"><T v={{ en: "Frequently asked questions", bn: "সাধারণ প্রশ্ন" }} /></h2><Faq />
      </div></section>
      <CtaBand />
    </>
  );
}
