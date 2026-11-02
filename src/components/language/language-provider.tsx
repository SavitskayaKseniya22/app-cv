"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { translations } from "@/i18n";
import type { TranslationKey, TranslationSection } from "@/i18n";

export type Language = "en" | "ru";
const LanguageContext = createContext<{
    language: Language;
    setLanguage: (language: Language) => void;
    isLanguageReady: boolean;
} | null>(null);
const LANGUAGE_CHANGE_EVENT = "language-change";

function getLanguageSnapshot(): Language | null {
    if (globalThis.document === undefined) return null;

    try {
        const saved = globalThis.localStorage.getItem("language");
        if (saved === "en" || saved === "ru") return saved;
    } catch {
        // Fall back to the browser language if storage is unavailable.
    }

    return globalThis.navigator.languages?.some(value => value.toLowerCase().startsWith("ru")) ? "ru" : "en";
}

function subscribeToLanguage(listener: () => void) {
    globalThis.window.addEventListener("storage", listener);
    globalThis.window.addEventListener(LANGUAGE_CHANGE_EVENT, listener);
    return () => {
        globalThis.window.removeEventListener("storage", listener);
        globalThis.window.removeEventListener(LANGUAGE_CHANGE_EVENT, listener);
    };
}

function getServerLanguageSnapshot(): null {
    return null;
}

function setCurrentLanguage(value: Language) {
    try {
        globalThis.localStorage.setItem("language", value);
    } catch {
        // Keep the app usable when storage is unavailable.
    }
    globalThis.window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const savedLanguage = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
    const language = savedLanguage ?? "ru";

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: setCurrentLanguage, isLanguageReady: savedLanguage !== null }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}

export function useTranslations() {
    const { language } = useLanguage();
    return <Section extends TranslationSection>(section: Section, key: TranslationKey<Section>) => {
        const dictionary = translations[language] as Record<TranslationSection, Record<string, string>>;
        return dictionary[section][key as string];
    };
}
