import { ProjectPreview, projects } from "@/entities/project";
import styles from "./portfolio.module.scss";

function Portfolio() {
    const portfolioData = projects.filter(project => project.isItReady);

    return (
        <ul className={styles.portfolio__projects}>
            {portfolioData.map(project => (
                <ProjectPreview key={`${project.name}-${project.github}`} data={project} />
            ))}
        </ul>
    );
}

export default Portfolio;
