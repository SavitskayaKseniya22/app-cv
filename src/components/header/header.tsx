"use client";

import { UserIcon, BriefcaseIcon, FolderIcon, FolderArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../icon/icon";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useLanguage, useTranslations } from "@/components/language/language-provider";

function Header() {
    const pathname = usePathname();
    const { language, setLanguage } = useLanguage();
    const t = useTranslations();
    const isPortfolio = pathname === "/portfolio" || pathname.startsWith("/portfolio/");

    return (
        <header className={styles.header}>
            <ul className={styles.header__nav}>
                <li className={styles.header__item}>
                    <Link
                        href="/"
                        title={t("navigation", "about")}

                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: pathname === "/",
                        })}>
                        <Icon icon={UserIcon} view={pathname === "/" ? "accent" : "normal"} />
                        <span className={styles.header__text}>{t("navigation", "about")}</span>
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link
                        href="/portfolio"
                        title={t("navigation", "portfolio")}
                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: isPortfolio,
                        })}>
                        <Icon icon={FolderIcon} view={isPortfolio ? "accent" : "normal"} />
                        <span className={styles.header__text}>{t("navigation", "portfolio")}</span>
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link
                        href="/occupations"
                        title={t("navigation", "occupations")}
                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: pathname === "/occupations",
                        })}>
                        <Icon icon={BriefcaseIcon} view={pathname === "/occupations" ? "accent" : "normal"} />
                        <span className={styles.header__text}>{t("navigation", "occupations")}</span>
                    </Link>
                </li>

                <li className={styles.header__item}>
                    <Link
                        href="/CV_Savitskaia.pdf"
                        target="_blank"
                        download="CV_Savitskaia"
                        title={t("navigation", "downloadCv")}
                        className={styles.header__link}>
                        <Icon icon={FolderArrowDownIcon} />
                        <span className={styles.header__text}>{t("navigation", "downloadCv")}</span>
                    </Link>
                </li>
            </ul>
            <button
                type="button"
                onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
                aria-label={t("navigation", language === "ru" ? "switchToEnglish" : "switchToRussian")}
                aria-pressed={language === "ru"}>
                {language.toUpperCase()}
            </button>
        </header>
    );
}

export default Header;
