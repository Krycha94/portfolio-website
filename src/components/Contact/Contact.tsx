import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<motion.section
			id="contact"
			className={styles.contact}
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.3 }}
		>
			<h3 className={styles.contact__title}>Get In Touch</h3>
			<p className={styles.contact__text}>
				I'm looking forward to hearing from you.
			</p>
			<a href="mailto:krycha1515@gmail.com" className={styles.contact__link}>
				<AiOutlineMail />
				Say Hello
			</a>
		</motion.section>
	);
};
export default Contact;
