import { navLinks } from "../../utils/constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				{navLinks.map((link) => (
					<a href={link.address} key={link.id} className={styles.header__link}>
						{link.text}
					</a>
				))}
				<a
					href="#"
					className={`${styles.header__link} ${styles.header__resume}`}
				>
					resume
				</a>
			</nav>
			<button className={styles.header__hamburger}>
				<HiOutlineMenuAlt3 />
			</button>
		</header>
	);
};
export default Header;
