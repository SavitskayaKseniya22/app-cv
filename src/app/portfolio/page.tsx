import type { ProjectType } from "../interfaces";
import styles from "./portfolio.module.scss";
import ProjectPreview from "./components/project-preview/project-preview";
import projects from "@/data/projects.json";

function Portfolio() {
    const portfolioData = (projects as ProjectType[]).filter(project => project.isItReady);

    return (
        <ul className={styles.portfolio__projects}>
            {portfolioData.map(project => (
                <ProjectPreview key={`${project.name}-${project.github}`} data={project} />
            ))}
        </ul>
    );
}

export default Portfolio;
