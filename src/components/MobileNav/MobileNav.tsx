import { navLinks } from "../../utils/constants";
import { FaTimes } from "react-icons/fa";
import styles from "./MobileNav.module.scss";

type MobileNavProps = {
	onClose: () => void;
	isMenuOpen: boolean;
};

const MobileNav = ({ onClose, isMenuOpen }: MobileNavProps) => {
	return (
		<>
			<div
				className={`${styles.backdrop} ${isMenuOpen && styles.visible}`}
				onClick={onClose}
			></div>
			<aside className={`${styles.sidebar} ${isMenuOpen && styles.visible}`}>
				<button className={styles.sidebar__btn} onClick={onClose}>
					<FaTimes />
				</button>
				<nav className={styles.sidebar__nav}>
					{navLinks.map((link) => (
						<a
							href={link.address}
							key={link.id}
							className={styles.sidebar__link}
							onClick={onClose}
						>
							{link.text}
						</a>
					))}
					<a
						href="#"
						className={`${styles.sidebar__link} ${styles.sidebar__resume}`}
						onClick={onClose}
					>
						resume
					</a>
				</nav>
			</aside>
		</>
	);
};
export default MobileNav;
