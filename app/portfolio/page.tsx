"use client";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
export default function Portfolio() {
  return (
    <>
      <PageHero eyebrow={{ en: "Portfolio", bn: "পোর্টফোলিও" }} title={{ en: "Moments we've framed", bn: "আমাদের তোলা কিছু মুহূর্ত" }}
        lead={{ en: "A selection of weddings, holud nights, engagements and celebrations.", bn: "বিয়ে, গায়ে হলুদ, এনগেজমেন্ট ও নানা উদযাপনের বাছাই করা কাজ।" }} />
      <section className="sec"><div className="wrap"><Gallery /></div></section>
      <CtaBand />
    </>
  );
}
