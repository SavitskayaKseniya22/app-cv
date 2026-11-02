import { ProjectType } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.scss";
import GithubLink from "../github-link/github-link";
import Icon from "@/components/icon/icon";
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/outline";
import { useLanguage, useTranslations } from "@/components/language/language-provider";

const imageLoader = ({ src }: { src: string }) => src;

function ProjectPreview({ data }: { data: ProjectType }) {
    const { language } = useLanguage();
    const t = useTranslations();
    const projectText = data.translations[language];
    return (
        <li className={styles.project}>
            <div className={styles.project__main}>
                <div className={styles.project__preview}>
                    <Image
                        fill
                        src={data.preview}
                        loader={imageLoader}
                        alt={data.name}
                        unoptimized
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8pqT0HwAFCwIbEaevOQAAAABJRU5ErkJggg=="
                    />
                </div>
                <div className={styles.project__decription}>
                    <h3>{data.name}</h3>

                    <p>{projectText.description}</p>
                </div>

                <div className={styles.project__type}>
                    <p>{projectText.type.toUpperCase()}</p>
                </div>

                {data.deploy && (
                    <Link href={data.deploy} target="_blank" aria-label={`Open ${data.name}`}>
                        <Icon icon={ArrowUpOnSquareStackIcon} size="large" />
                    </Link>
                )}
                <GithubLink href={data.github} />
            </div>
            {data.instruments.length > 0 && (
                <div className={styles.project__block}>
                    <h4>{t("portfolio", "instruments")}</h4>
                    <ul className={styles.project__instruments}>
                        {data.instruments.map(instrument => (
                            <li key={`${data.name}-${instrument}`}>{instrument}</li>
                        ))}
                    </ul>
                </div>
            )}

            {projectText.features && projectText.features.length > 0 && (
                <div className={styles.project__block}>
                    <h4>{t("portfolio", "features")}</h4>
                    <ul className={styles.project__features}>
                        {projectText.features.map(feature => (
                            <li key={`${data.name}-${feature}`}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}

export default ProjectPreview;
