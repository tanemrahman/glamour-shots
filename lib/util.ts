import { site } from "./site";
export const waLink = (text = "Hi Glamour Shots! I'd like to know about your photography/videography packages.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
export const GRAD = ["#3b1d2a,#c58b6a", "#1d2a3b,#8aa0c5", "#2f2a1a,#d4af6a", "#3b1d33,#d28bb5", "#1f3b2c,#8bc5a1", "#3b2a1d,#e0a56a"];
