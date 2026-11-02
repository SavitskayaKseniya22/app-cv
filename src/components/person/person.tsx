"use client";

import Link from "next/link";
import styles from "./person.module.scss";
import Image from "next/image";
import { useLanguage } from "@/components/language/language-provider";

function Person() {
    const { language, isLanguageReady } = useLanguage();
    return (
        <div className={styles.person}>
            <Image
                src="/pexels-eberhard-grossgasteiger-2310641.webp"
                alt="Background image"
                fill
                priority
                fetchPriority="high"
                quality={60}
                sizes="(min-width: 768px) 220px, 100vw"
                className={styles.person__image}
            />
            <h1>Kseniia Savitskaia</h1>
            <h2 style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
                {language === "ru" ? "Веб-разработчик" : "Web developer"}
            </h2>
            <ul className={styles.person__socials}>
                <li>
                    <Link href="https://www.linkedin.com/in/kseniia-savitskaia" target="_blank">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/SavitskayaKseniya22" target="_blank">
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link href="https://t.me/berillx2ium" target="_blank">
                        Telegram
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Person;
