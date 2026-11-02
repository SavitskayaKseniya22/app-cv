"use client";

import { useState, useEffect } from "react";
import { ProjectType } from "../interfaces";
import styles from "./portfolio.module.scss";
import Icon from "@/components/icon/icon";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ProjectPreview from "./components/project-preview/project-preview";

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
            .then(data => {
                if (data satisfies ProjectType[]) {
                    setPortfolioData((data as ProjectType[]).filter(items => items.isItReady));
                } else {
                    throw new Error("Invalid projects data");
                }
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
        <ul className={styles.portfolio__projects}>
            {portfolioData.map(project => (
                <ProjectPreview key={`${project.name}-${project.github}`} data={project} />
            ))}
        </ul>
    );
}

export default Portfolio;
