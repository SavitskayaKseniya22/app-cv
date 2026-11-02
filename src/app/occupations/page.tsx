"use client";

import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import styles from "./occupations.module.scss";
import Icon from "@/components/icon/icon";
import { useTranslations } from "@/components/language/language-provider";

function Occupation() {
    const t = useTranslations();
    return (
        <>
            <h2 className={styles["occupation__chapter-title"]}>
                <Icon icon={BriefcaseIcon} />
                {t("experience", "related")}
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <Link href="https://creos.me/" target="_blank" className={styles.occupation__summary}>
                        <h3>{t("experience", "creosRole")}</h3>
                        <span>07/2024-03/2026</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>
                            <Link href="https://creos.me/" target="_blank">
                                creos.me
                            </Link>{" "}
                            — {t("experience", "creosCorporate")}
                        </li>
                        <li>
                            <Link href="https://market.creosplay.io/" target="_blank">
                                market.creosplay.io
                            </Link>{" "}
                            — {t("experience", "creosLanding")}
                        </li>
                        <li>
                            <Link href="https://creosplay.io/" target="_blank">
                                creosplay.io
                            </Link>{" "}
                            — {t("experience", "creosPlatform")}
                        </li>
                        <li>
                            {t("experience", "creosAnalytics")}
                        </li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://websovet.ru" target="_blank" className={styles.occupation__summary}>
                        <h3>{t("experience", "websovetRole")}</h3>
                        <span>04/2024-06/2024</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>
                            <Link href="https://websovet.ru/" target="_blank">
                                websovet.ru
                            </Link>{" "}
                        - {t("experience", "websovetCorporate")}
                        </li>
                        <li>{t("experience", "match3")}</li>
                    </ul>
                </li>
            </ul>

            <h2 className={styles["occupation__chapter-title"]}>
                <Icon icon={AcademicCapIcon} />
                {t("experience", "education")}
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <Link href="https://en.altstu.ru/" target="_blank" className={styles.occupation__summary}>
                        <h3>{t("experience", "architecture")}</h3>
                        <span>2011-2016</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>{t("experience", "architectureDesign")}</li>
                        <li>{t("experience", "visualDesign")}</li>
                        <li>{t("experience", "cad")}</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://rs.school/" target="_blank" className={styles.occupation__summary}>
                        <h3>The Rolling Scopes School</h3>
                        <span>2021-2022</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>
                            <Link href="https://app.rs.school/certificate/kk9vy6aa" target="_blank">
                                {t("experience", "jsCourse")}
                            </Link>
                        </li>
                        <li>
                            <Link href="https://app.rs.school/certificate/u3kin2dj" target="_blank">
                                {t("experience", "reactCourse")}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://www.freecodecamp.org/" target="_blank" className={styles.occupation__summary}>
                        <h3>FreeCodeCamp</h3>
                        <span>2020-2023</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>{t("experience", "responsiveDesign")}</li>
                        <li>{t("experience", "algorithms")}</li>
                        <li>{t("experience", "frontEndLibraries")}</li>
                        <li>{t("experience", "backEndApis")}</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link
                        href="https://www.codewars.com/users/savitskaya.kseniya.22"
                        target="_blank"
                        className={styles.occupation__summary}>
                        <h3>Codewars</h3>
                        <span>2020-...</span>
                    </Link>
                    <Image src="/icons/codewars-large.svg" width={250} height={50} alt="Codewars profile" />
                </li>
            </ul>
            <h2 className={styles["occupation__chapter-title"]}>
                <Icon icon={BriefcaseIcon} />
                {t("experience", "unrelated")}
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>Yandex / {t("experience", "assessor")}</h3>
                        <span>2016-2022</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>{t("experience", "searchRanking")}</li>
                        <li>{t("experience", "textAnalysis")}</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>Mail.ru / {t("experience", "assessor")}</h3>
                        <span>2018</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>{t("experience", "searchRanking")}</li>
                        <li>{t("experience", "textAnalysis")}</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://quickpay.ru/" target="_blank" className={styles.occupation__summary}>
                        <h3>{t("experience", "quickpayRole")}</h3>
                        <span>2013-2016</span>
                    </Link>

                    <ul className={styles.occupation__list}>
                        <li>{t("experience", "paymentAdmin")}</li>
                        <li>{t("experience", "problemSolving")}</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>{t("experience", "googleRole")}</h3>
                        <span>2013</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>
                            {t("experience", "googleProject")}
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Occupation;
