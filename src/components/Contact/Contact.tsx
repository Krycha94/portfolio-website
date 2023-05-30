import { AiOutlineMail } from "react-icons/ai";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<section id="contact" className={styles.contact}>
			<h3 className={styles.contact__title}>Get In Touch</h3>
			<p className={styles.contact__text}>
				I'm looking forward to hearing from you.
			</p>
			<a href="mailto:krycha1515@gmail.com" className={styles.contact__link}>
				<AiOutlineMail />
				Say Hello
			</a>
		</section>
	);
};
export default Contact;
