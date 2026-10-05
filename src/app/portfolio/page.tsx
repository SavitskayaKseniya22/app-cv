"use client";

import { useState, useEffect } from "react";
import { ProjectType } from "../interfaces";
import styles from "./portfolio.module.scss";
import Icon from "@/components/icon/icon";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ProjectPreview from "./components/project-preview/project-preview";

function isProject(value: unknown): value is ProjectType {
    if (typeof value !== "object" || value === null) return false;
    const project = value as Record<string, unknown>;
    return (
        ["name", "description", "deploy", "github", "preview"].every(key => typeof project[key] === "string") &&
        Array.isArray(project.instruments) &&
        project.instruments.every(instrument => typeof instrument === "string") &&
        typeof project.complexity === "number" &&
        typeof project.isItReady === "boolean" &&
        (project.features === undefined ||
            (Array.isArray(project.features) && project.features.every(feature => typeof feature === "string")))
    );
}

function Portfolio() {
    const [portfolioData, setPortfolioData] = useState<ProjectType[]>([]);

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        fetch("/api/projects", { signal: controller.signal })
            .then(resource => {
                if (!resource.ok) throw new Error(`Failed to load projects: ${resource.status}`);
                return resource.json();
            })
            .then((data: unknown) => {
                if (!Array.isArray(data) || !data.every(isProject)) throw new Error("Invalid projects data");
                setPortfolioData(data);
            })
            .catch(error_ => {
                if (controller.signal.aborted) return;
                console.error(error_);
                setError(true);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });
        return () => controller.abort();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load projects.</p>;
    }

    if (portfolioData.length === 0) {
        return <p>No portfolio data.</p>;
    }

    return (
        <>
            <div className={styles.portfolio__header}>
                <h2 className={styles["portfolio__chapter-title"]}>
                    <Icon icon={BriefcaseIcon} />
                    Learning projects
                </h2>
            </div>

            <ul className={styles.portfolio__projects}>
                {portfolioData.map(project => (
                    <ProjectPreview key={`${project.name}-${project.github}`} data={project} />
                ))}
            </ul>
        </>
    );
}

export default Portfolio;
