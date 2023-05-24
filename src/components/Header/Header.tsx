import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<a href="#" className={styles.header__link}>
					link-1
				</a>
				<a href="#" className={styles.header__link}>
					link-2
				</a>
				<a href="#" className={styles.header__link}>
					link-3
				</a>
			</nav>
			<button className={styles.header__hamburger}>
				<HiOutlineMenuAlt3 />
			</button>
		</header>
	);
};
export default Header;
