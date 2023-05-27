import img from "../../assets/about-pic.jpg";
import styles from "./About.module.scss";

const About = () => {
	return (
		<section className={styles.about}>
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
					ambitious and creative front-end developer with really various skills.
					I specialize in React and Next.js, but I also have some knowledge of
					how the backend works by working with Firebase and headless CMS like
					Strapi. I am looking forward to gaining my first commercial experience
					in a real-life job as Front-End Developer.
				</p>
			</div>
		</section>
	);
};
export default About;