import Link from "next/link";
import Image from "next/image";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import styles from "./occupations.module.scss";
import Icon from "@/components/icon/icon";

function Occupation() {
    return (
        <>
            <h2 className={styles["occupation__chapter-title"]}>
                <Icon icon={BriefcaseIcon} />
                Related work experience
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <Link href="https://creos.me/" target="_blank" className={styles.occupation__summary}>
                        <h3>CREOS Play / Fronted-developer</h3>
                        <span>07/2024-07/2026</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>
                            <Link href="https://creos.me/" target="_blank">
                                creos.me
                            </Link>{" "}
                            — Developed the company&apos;s corporate website
                        </li>
                        <li>
                            <Link href="https://market.creosplay.io/" target="_blank">
                                market.creosplay.io
                            </Link>{" "}
                            — Developed the frontend for a landing page promoting one of the company&apos;s services
                        </li>
                        <li>
                            <Link href="https://creosplay.io/" target="_blank">
                                creosplay.io
                            </Link>{" "}
                            — Contributed to the development of a video creative production management platform. The
                            platform enables clients to create and manage orders, review deliverables, and provide
                            feedback. Implemented a role-based system for clients, designers, and managers. Clients can
                            create orders and generate AI-assisted creative concepts and previews (images and videos).
                            Designers manage assigned tasks, track progress, and handle financial workflows. Managers
                            assign work, monitor project progress, manage team workloads, and administer the platform
                        </li>
                        <li>
                            Developed an internal analytics portal for visualizing the company&apos;s key business
                            metrics. The system provides dashboards for subcontractor performance, financial
                            profitability metrics, and project statistics. Implemented analytics for designers,
                            including workload, revenue, completed projects, and individual performance indicators,
                            enabling data-driven monitoring and operational decision-making.
                        </li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://websovet.ru" target="_blank" className={styles.occupation__summary}>
                        <h3>Websovet / Fronted-developer</h3>
                        <span>04/2024-06/2024</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>
                            <Link href="https://websovet.ru/" target="_blank">
                                websovet.ru
                            </Link>{" "}
                            - Developed the company&apos;s corporate website
                        </li>
                        <li>Creating concepts for match-3 games</li>
                    </ul>
                </li>
            </ul>

            <h2 className={styles["occupation__chapter-title"]}>
                <Icon icon={AcademicCapIcon} />
                Education
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <Link href="https://en.altstu.ru/" target="_blank" className={styles.occupation__summary}>
                        <h3>Altai State Technical University / Architecture</h3>
                        <span>2011-2016</span>
                    </Link>
                    <ul className={styles.occupation__list}>
                        <li>Design of buildings, interior, structures and small architectural forms</li>
                        <li>Visual Design Principles</li>
                        <li>CAD for engineering</li>
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
                                JavaScript course
                            </Link>
                        </li>
                        <li>
                            <Link href="https://app.rs.school/certificate/u3kin2dj" target="_blank">
                                React course
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
                        <li>Responsive Web Design</li>
                        <li>JavaScript Algorithms and Data Structures</li>
                        <li>Front End Development Libraries</li>
                        <li>Back End Development and APIs</li>
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
                Unrelated work experience
            </h2>
            <ul className={styles.occupation__chapter}>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>Yandex / Asessor</h3>
                        <span>2016-2022</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>Ranking the results of search queries by relevance</li>
                        <li>Analysis of text data and media content</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>Mail.ru / Asessor</h3>
                        <span>2018</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>Ranking the results of search queries by relevance</li>
                        <li>Analysis of text data and media content</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <Link href="https://quickpay.ru/" target="_blank" className={styles.occupation__summary}>
                        <h3>Quickpay - payments system / Client support</h3>
                        <span>2013-2016</span>
                    </Link>

                    <ul className={styles.occupation__list}>
                        <li>Administration and control of the payment process</li>
                        <li>Problem solving</li>
                    </ul>
                </li>
                <li className={styles.occupation__item}>
                    <div className={styles.occupation__summary}>
                        <h3>Google / Field agent</h3>
                        <span>2013</span>
                    </div>
                    <ul className={styles.occupation__list}>
                        <li>
                            A short-term project on collecting, processing, and analyzing information about local
                            organizations and enterprises
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Occupation;
