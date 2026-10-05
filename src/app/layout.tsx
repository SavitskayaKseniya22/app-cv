import React from "react";
import "../styles/styles.scss";
import styles from "./layout.module.scss";
import Header from "@/components/header/header";
import Person from "@/components/person/person";

export const metadata = {
    title: "CV",
    description: "Kseniia Savitskaia's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.layout}>
                    <Header />
                    <Person />
                    <main className={styles.layout__container}>{children}</main>
                </div>
            </body>
        </html>
    );
}
