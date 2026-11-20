"use client";

import { useLanguage, useTranslations } from "@/shared/lib/i18n";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const t = useTranslations();

    return (
        <button
            type="button"
            onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
            aria-label={t("navigation", language === "ru" ? "switchToEnglish" : "switchToRussian")}
            aria-pressed={language === "ru"}>
            {language.toUpperCase()}
        </button>
    );
}
