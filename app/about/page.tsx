"use client";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Stats from "@/components/Stats";
import CtaBand from "@/components/CtaBand";
import { site, ui } from "@/lib/site";
import { T } from "@/lib/i18n";

const values = [
  { i: "🎞", t: { en: "Cinematic eye", bn: "সিনেমাটিক দৃষ্টি" }, d: { en: "Every frame is composed and graded like a film still.", bn: "প্রতিটি ফ্রেম সিনেমার স্টিলের মতো সাজানো ও গ্রেড করা।" } },
  { i: "🤝", t: { en: "Friendly team", bn: "আন্তরিক টিম" }, d: { en: "Relaxed, respectful and easy to work with — guests feel at ease.", bn: "সহজ, শ্রদ্ধাশীল ও মিশুক — মেহমানরা স্বস্তিতে থাকেন।" } },
  { i: "⏱", t: { en: "On-time delivery", bn: "সময়মতো ডেলিভারি" }, d: { en: "Clear timelines and quick previews so you are never left waiting.", bn: "স্পষ্ট সময়সীমা ও দ্রুত প্রিভিউ — অপেক্ষা করতে হয় না।" } },
];
export default function About() {
  return (
    <>
      <PageHero eyebrow={{ en: "About us", bn: "আমাদের কথা" }} title={{ en: "We turn moments into memories", bn: "আমরা মুহূর্তকে স্মৃতি বানাই" }}
        lead={{ en: "Glamour Shots is a Dhaka-based photography, videography and cinematography team.", bn: "গ্ল্যামার শটস ঢাকাভিত্তিক ফটোগ্রাফি, ভিডিওগ্রাফি ও সিনেমাটোগ্রাফি টিম।" }} />
      <section className="sec"><div className="wrap two">
        <div className="ph-box" style={{ background: "linear-gradient(145deg,#3b1d2a,#c58b6a)" }}>Team photo</div>
        <div className="prose">
          <p className="eyebrow"><T v={{ en: "Our story", bn: "আমাদের গল্প" }} /></p>
          <h2><T v={{ en: "Photography with feeling", bn: "অনুভূতিসহ ফটোগ্রাফি" }} /></h2>
          <p><T v={{ en: "We cover weddings, holud nights, engagements, birthdays and many other events across Dhaka. Our goal is simple: capture real emotion, then present it with a cinematic, polished finish.", bn: "ঢাকা জুড়ে বিয়ে, গায়ে হলুদ, এনগেজমেন্ট, জন্মদিনসহ নানা আয়োজন আমরা কভার করি। আমাদের লক্ষ্য সহজ: আসল আবেগ ধরে রাখা এবং তা সিনেমাটিক, পরিপাটি রূপে উপস্থাপন করা।" }} /></p>
          <p><T v={{ en: "Clients call us friendly, and that matters — relaxed people make the best photographs.", bn: "ক্লায়েন্টরা আমাদের আন্তরিক বলেন — আর এটাই গুরুত্বপূর্ণ, কারণ স্বস্তিতে থাকা মানুষের ছবিই সেরা হয়।" }} /></p>
          <p>{site.venues.map(v => <span className="tag" key={v}>📍 {v}</span>)}</p>
          {/* TODO: replace with the real founder / team story */}
        </div>
      </div></section>
      <Stats />
      <section className="sec"><div className="wrap">
        <h2 className="center"><T v={{ en: "What we stand for", bn: "আমরা যা বিশ্বাস করি" }} /></h2>
        <div className="values">{values.map((v, i) => <div className="card" key={i}><div className="ico">{v.i}</div><h3><T v={v.t} /></h3><p><T v={v.d} /></p></div>)}</div>
      </div></section>
      <section className="sec alt"><div className="wrap">
        <h2 className="center"><T v={{ en: "How we work", bn: "আমরা যেভাবে কাজ করি" }} /></h2>
        <ProcessSteps />
      </div></section>
      <CtaBand />
    </>
  );
}
