import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";
import krychaStoreImg from "../assets/krycha-store.jpg";
import { logoNext, logoReact, logoSass, logoTS, logoJest } from "../assets";

export const navLinks = [
	{
		id: 1,
		address: "#home",
		text: "home",
	},
	{
		id: 2,
		address: "#about",
		text: "about",
	},
	{
		id: 3,
		address: "#projects",
		text: "projects",
	},
	{
		id: 4,
		address: "#contact",
		text: "contact",
	},
];

export const socialLinks = [
	{ id: 1, address: "https://www.github.com", icon: <AiOutlineGithub /> },
	{ id: 2, address: "https://www.linkedin.com", icon: <AiFillLinkedin /> },
];

export const projects = [
	{
		id: 1,
		img: krychaStoreImg,
		name: "Krycha Store",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus autem deserunt libero consectetur. Ad corporis dolorum alias sapiente error!",
		technologies: [
			{ id: 1, src: logoNext, alt: "logo next" },
			{ id: 2, src: logoReact, alt: "logo react" },
			{ id: 3, src: logoTS, alt: "logo typescript" },
			{ id: 4, src: logoSass, alt: "logo sass" },
			{ id: 5, src: logoJest, alt: "logo jest" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/fullstack-nextjs-ecommerce",
				icon: <AiOutlineGithub />,
			},
			{
				id: 2,
				url: "https://krycha-store.vercel.app/",
				icon: <AiOutlineLink />,
			},
		],
	},
	{
		id: 2,
		img: krychaStoreImg,
		name: "Krycha Store",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus autem deserunt libero consectetur. Ad corporis dolorum alias sapiente error!",
		technologies: [
			{ id: 1, src: logoNext, alt: "logo next" },
			{ id: 2, src: logoReact, alt: "logo react" },
			{ id: 3, src: logoTS, alt: "logo typescript" },
			{ id: 4, src: logoSass, alt: "logo sass" },
			{ id: 5, src: logoJest, alt: "logo jest" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/fullstack-nextjs-ecommerce",
				icon: <AiOutlineGithub />,
			},
			{
				id: 2,
				url: "https://krycha-store.vercel.app/",
				icon: <AiOutlineLink />,
			},
		],
	},
	{
		id: 3,
		img: krychaStoreImg,
		name: "Krycha Store",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus autem deserunt libero consectetur. Ad corporis dolorum alias sapiente error!",
		technologies: [
			{ id: 1, src: logoNext, alt: "logo next" },
			{ id: 2, src: logoReact, alt: "logo react" },
			{ id: 3, src: logoTS, alt: "logo typescript" },
			{ id: 4, src: logoSass, alt: "logo sass" },
			{ id: 5, src: logoJest, alt: "logo jest" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/fullstack-nextjs-ecommerce",
				icon: <AiOutlineGithub />,
			},
			{
				id: 2,
				url: "https://krycha-store.vercel.app/",
				icon: <AiOutlineLink />,
			},
		],
	},
];
