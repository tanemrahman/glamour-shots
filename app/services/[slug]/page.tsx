import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/site";
import ServiceView from "./ServiceView";

export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const s = services.find(x => x.slug === slug);
  return s ? { title: `${s.title.en} Photography & Videography in Dhaka`, description: s.short.en } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) notFound();
  return <ServiceView slug={slug} />;
}
