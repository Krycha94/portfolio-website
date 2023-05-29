import ProjectType from "../../types/ProjectType";
import styles from "./Project.module.scss";

const Project = ({ img, name, desc, technologies, links }: ProjectType) => {
	return (
		<li className={styles.project}>
			<div className={styles.project__imageContainer}>
				<img src={img} alt="krycha-store" className={styles.project__image} />
			</div>
			<div className={styles.project__content}>
				<h4 className={styles.project__name}>{name}</h4>
				<p className={styles.project__desc}>{desc}</p>
				<div className={styles.project__technologies}>
					{technologies.map(({ id, src, alt }) => (
						<img key={id} src={src} alt={alt} />
					))}
				</div>
				<div className={styles.project__linksContainer}>
					{links.map(({ id, url, icon, text }) => (
						<a
							key={id}
							href={url}
							className={styles.project__link}
							target="_blank"
						>
							{icon} {text}
						</a>
					))}
				</div>
			</div>
		</li>
	);
};
export default Project;
