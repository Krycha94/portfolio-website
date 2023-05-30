import { useEffect, useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import { navLinks } from "../../utils/constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "./Header.module.scss";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleOpen = () => setIsMenuOpen(true);
	const handleClose = () => setIsMenuOpen(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
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
			<button className={styles.header__hamburger} onClick={handleOpen}>
				<HiOutlineMenuAlt3 />
			</button>
			{/* mobile only */}
			<MobileNav onClose={handleClose} isMenuOpen={isMenuOpen} />
		</header>
	);
};
export default Header;
