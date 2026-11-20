import React from "react";
import "@/shared/styles/styles.scss";
import styles from "./layout.module.scss";
import { Header } from "@/widgets/header";
import { Person } from "@/entities/profile";
import { LanguageProvider } from "@/shared/lib/i18n";
import { Jura } from "next/font/google";

const jura = Jura({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-jura",
});

export const metadata = {
    title: "CV",
    description: "Kseniia Savitskaia's portfolio",
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={jura.variable}>
            <body>
                <LanguageProvider>
                    <div className={styles.layout}>
                        <Header />
                        <Person />
                        <main className={styles.layout__container}>{children}</main>
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}
