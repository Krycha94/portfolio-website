import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<Layout>
			<Hero />
			<About />
			<Projects />
		</Layout>
	);
}

export default App;
