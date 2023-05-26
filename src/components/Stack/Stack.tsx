import styles from "./Stack.module.scss";
import {
	logoHtml,
	logoCss,
	logoJS,
	logoJest,
	logoReact,
	logoSass,
	logoTS,
	logoNext,
} from "../../assets";

const Stack = () => {
	return (
		<ul className={styles.stack}>
			<li>
				<img src={logoHtml} alt="logo html" />
			</li>
			<li>
				<img src={logoCss} alt="logo css" />
			</li>
			<li>
				<img src={logoSass} alt="logo sass" />
			</li>
			<li>
				<img src={logoJS} alt="logo javascript" />
			</li>
			<li>
				<img src={logoTS} alt="logo typescript" />
			</li>
			<li>
				<img src={logoReact} alt="logo react" />
			</li>
			<li>
				<img src={logoNext} alt="logo nextjs" />
			</li>
			<li>
				<img src={logoJest} alt="logo jest" />
			</li>
		</ul>
	);
};
export default Stack;
