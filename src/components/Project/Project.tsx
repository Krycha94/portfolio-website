import { motion } from "framer-motion";
import ProjectType from "../../types/ProjectType";
import styles from "./Project.module.scss";

const Project = ({ img, name, desc, technologies, links }: ProjectType) => {
	return (
		<motion.li
			className={styles.project}
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.3 }}
		>
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
		</motion.li>
	);
};
export default Project;
