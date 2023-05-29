type ProjectType = {
	id: number;
	img: string;
	name: string;
	desc: string;
	technologies: { id: number; src: string; alt: string }[];
	links: {
		id: number;
		url: string;
		icon: JSX.Element;
		text: string;
	}[];
};

export default ProjectType;
