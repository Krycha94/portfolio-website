import { socialLinks } from "../../utils/constants";
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
	return (
		<ul className={styles.socials}>
			{socialLinks.map((link) => (
				<li key={link.id}>
					<a href={link.address} target="_blank" className={styles.socials__link}>
						{link.icon}
					</a>
				</li>
			))}
		</ul>
	);
};
export default SocialLinks;
