import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url || "https://example.com"; // TODO: set site.url in lib/site.ts
  const paths = ["", "about", "services", "portfolio", "films", "contact", ...services.map(s => `services/${s.slug}`)];
  return paths.map(p => ({ url: `${base}/${p}${p ? "/" : ""}` }));
}
