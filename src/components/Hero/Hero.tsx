import { motion } from "framer-motion";
import image from "../../assets/krystian-pic.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import Stack from "../Stack/Stack";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<motion.section
			id="home"
			className={styles.hero}
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.1 }}
		>
			<div className={styles.hero__content}>
				<h1>
					Hi, <span>I'm Krystian</span>
				</h1>
				<h2>Front-End Developer</h2>
				<p>
					Experienced in building responsive and accessible websites with React
					and Next.js.
				</p>
				<SocialLinks />
				<Stack />
			</div>
			<div className={styles.hero__image}>
				<img src={image} alt="Krystian Kowalski profile pic" />
			</div>
		</motion.section>
	);
};
export default Hero;
