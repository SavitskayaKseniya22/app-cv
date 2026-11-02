import React from "react";
import "../styles/styles.scss";
import styles from "./layout.module.scss";
import Header from "@/components/header/header";
import Person from "@/components/person/person";
import { LanguageProvider } from "@/components/language/language-provider";

export const metadata = {
    title: "CV",
    description: "Kseniia Savitskaia's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
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
