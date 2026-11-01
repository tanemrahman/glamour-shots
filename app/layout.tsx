import type { Metadata, Viewport } from "next";
import { Playfair_Display, Great_Vibes, Poppins, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--f-serif" });
const script = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--f-script" });
const sans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-sans" });
const bn = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "600"], variable: "--f-bn" });

export const metadata: Metadata = {
  title: { default: "Glamour Shots — Wedding, Holud & Event Photography in Dhaka", template: "%s | Glamour Shots" },
  description: "Glamour Shots is a Dhaka-based photography, videography and cinematography team for weddings, holud, engagements, birthdays and events. Call or WhatsApp +880 1957-695469.",
  openGraph: { title: "Glamour Shots — Photography · Videography · Cinematography", description: "Cinematic wedding, holud, birthday and event coverage in Dhaka.", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0c0a09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} ${sans.variable} ${bn.variable}`}>
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </LangProvider>
      </body>
    </html>
  );
}
