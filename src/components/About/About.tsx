import { motion } from "framer-motion";
import img from "../../assets/about-pic.jpg";
import styles from "./About.module.scss";

const About = () => {
	return (
		<motion.section
			id="about"
			className={styles.about}
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.1 }}
		>
			<img
				src={img}
				alt="laptop with notebook"
				className={styles.about__image}
			/>
			<div className={styles.about__content}>
				<h3 className={styles.about__title}>About Me</h3>
				<p className={styles.about__text}>
					Hello! My name is Krystian and I'm from Poland. I really enjoy
					creating web-apps, and learning new technologies. I'm a disciplined,
					ambitious and creative front-end developer with really various skills,
					not afraid of feedback and I am always trying my best to complete
					every task given to me. I specialize in React and Next.js, but I also
					have a bit knowledge of Express and MongoDB. I am looking forward to
					gaining my first commercial experience in a real-life job as Front-End
					Developer.
				</p>
			</div>
		</motion.section>
	);
};
export default About;
