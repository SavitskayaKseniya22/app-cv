"use client";

import { useLanguage, useTranslations } from "@/components/language/language-provider";

export default function AboutIntro() {
    const t = useTranslations();
    const { isLanguageReady } = useLanguage();

    return (
        <div style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
            <p>{t("about", "intro")}</p>
            <br />
            <p>{t("about", "location")}</p>
            <p>{t("about", "languages")}</p>
        </div>
    );
}
