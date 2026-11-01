import { site } from "./site";
export const waLink = (text = "Hi Glamour Shots! I'd like to know about your photography/videography packages.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
export const GRAD = ["#c27a8d,#7a2a45", "#ecd089,#b98a2e", "#8b6fa8,#3d2a63", "#e59b8a,#a8454f", "#7fb3a3,#2f6b5e", "#d9a066,#8c4a2a"];
