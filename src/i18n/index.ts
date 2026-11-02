import en from "./locales/en.json";
import ru from "./locales/ru.json";

export const translations = { en, ru };
export type TranslationSection = keyof typeof en;
export type TranslationKey<Section extends TranslationSection> = keyof (typeof en)[Section];
