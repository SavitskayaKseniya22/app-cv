"use client";

import { UserIcon, BriefcaseIcon, FolderIcon, FolderArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../icon/icon";
import styles from "./header.module.scss";
import clsx from "clsx";

function Header() {
    const pathname = usePathname();
    const isPortfolio = pathname === "/portfolio" || pathname.startsWith("/portfolio/");

    return (
        <header className={styles.header}>
            <ul className={styles.header__nav}>
                <li className={styles.header__item}>
                    <Link
                        href="/"
                        title="About Me"

                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: pathname === "/",
                        })}>
                        <Icon icon={UserIcon} view={pathname === "/" ? "accent" : "normal"} />
                        <span className={styles.header__text}>About Me</span>
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link
                        href="/portfolio"
                        title="Portfolio"
                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: isPortfolio,
                        })}>
                        <Icon icon={FolderIcon} view={isPortfolio ? "accent" : "normal"} />
                        <span className={styles.header__text}>Portfolio</span>
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link
                        href="/occupations"
                        title="Occupation"
                        className={clsx(styles.header__link, {
                            [styles.header__link_active]: pathname === "/occupations",
                        })}>
                        <Icon icon={BriefcaseIcon} view={pathname === "/occupations" ? "accent" : "normal"} />
                        <span className={styles.header__text}>Occupations</span>
                    </Link>
                </li>

                <li className={styles.header__item}>
                    <Link
                        href="/CV_Savitskaia.pdf"
                        target="_blank"
                        download="CV_Savitskaia"
                        title="Get CV"
                        className={styles.header__link}>
                        <Icon icon={FolderArrowDownIcon} />
                        <span className={styles.header__text}>Get CV</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
