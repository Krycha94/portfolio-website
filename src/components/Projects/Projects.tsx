import Project from "../Project/Project";
import { projects } from "../../utils/constants";
import styles from "./Projects.module.scss";

const Projects = () => {
	return (
		<section className={styles.projects}>
			<h3 className={styles.projects__title}>My Projects</h3>
			<ul className={styles.projects__list}>
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</ul>
		</section>
	);
};
export default Projects;
