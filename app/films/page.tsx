"use client";
import PageHero from "@/components/PageHero";
import VideoGrid from "@/components/VideoGrid";
import CtaBand from "@/components/CtaBand";
export default function Films() {
  return (
    <>
      <PageHero eyebrow={{ en: "Films", bn: "ফিল্ম" }} title={{ en: "Watch the story unfold", bn: "গল্পটা দেখুন" }}
        lead={{ en: "Cinematic highlights and event films.", bn: "সিনেমাটিক হাইলাইট ও ইভেন্ট ফিল্ম।" }} />
      <section className="sec"><div className="wrap"><VideoGrid /></div></section>
      <CtaBand />
    </>
  );
}
