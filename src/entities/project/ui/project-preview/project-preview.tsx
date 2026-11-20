"use client";

import type { ProjectType } from "../../model/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.scss";
import GithubLink from "../github-link/github-link";
import { Icon } from "@/shared/ui/icon";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";
import { useLanguage, useTranslations } from "@/shared/lib/i18n";

function ProjectPreview({ data }: { data: ProjectType }) {
    const { language, isLanguageReady } = useLanguage();
    const t = useTranslations();
    const projectText = data.translations[language];
    return (
        <li className={styles.project}>
            <div className={styles.project__main}>
                <div className={styles.project__preview}>
                    <Image fill src={data.preview} alt={data.name} sizes="112px" />
                </div>
                <div
                    className={styles.project__decription}
                    style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
                    <h3>{data.name}</h3>

                    <p>{projectText.description}</p>
                </div>

                <div className={styles.project__tags}>
                    <div
                        className={styles.project__type}
                        style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
                        <p>{projectText.type.toUpperCase()}</p>
                    </div>

                    {data.deploy && (
                        <Link href={data.deploy} target="_blank" aria-label={`Open ${data.name}`}>
                            <Icon icon={ArrowUpOnSquareStackIcon} size="large" />
                        </Link>
                    )}
                    <GithubLink href={data.github} />
                </div>
            </div>
            {projectText.features && projectText.features.length > 0 && (
                <div className={styles.project__block} style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
                    <h4>{t("portfolio", "features")}</h4>
                    <ul className={styles.project__features}>
                        {projectText.features.map(feature => (
                            <li key={`${data.name}-${feature}`}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
            {data.instruments.length > 0 && (
                <div className={styles.project__block} style={{ visibility: isLanguageReady ? "visible" : "hidden" }}>
                    <ul className={styles.project__instruments}>
                        {data.instruments.map(instrument => (
                            <li key={`${data.name}-${instrument}`}>{instrument}</li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}

export default ProjectPreview;
