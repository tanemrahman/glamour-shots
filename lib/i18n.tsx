"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L } from "./site";

type Lang = "en" | "bn";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    try { const s = localStorage.getItem("gs-lang"); if (s === "bn" || s === "en") setLangState(s); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem("gs-lang", l); } catch {} };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);

/** Renders the right language of a bilingual { en, bn } value. */
export function T({ v }: { v: L }) { const { lang } = useLang(); return <>{v[lang]}</>; }
export function useT() { const { lang } = useLang(); return (v: L) => v[lang]; }
