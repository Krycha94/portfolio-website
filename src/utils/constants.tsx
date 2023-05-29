import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";
import {
	logoNext,
	logoReact,
	logoSass,
	logoCss,
	logoJS,
	logoTS,
	logoJest,
	logoFirebase,
	krychaStore,
	lolProfile,
	minesweeper,
} from "../assets";

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
		img: krychaStore,
		name: "Krycha Store",
		desc: "Fullstack E-Commerce website including user authentication, product listing, shopping cart, and payment processing.",
		technologies: [
			{ id: 1, src: logoNext, alt: "logo next" },
			{ id: 2, src: logoReact, alt: "logo react" },
			{ id: 3, src: logoTS, alt: "logo typescript" },
			{ id: 4, src: logoSass, alt: "logo sass" },
			{ id: 5, src: logoFirebase, alt: "logo firebase" },
			{ id: 6, src: logoJest, alt: "logo jest" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/fullstack-nextjs-ecommerce",
				icon: <AiOutlineGithub />,
				text: "Code",
			},
			{
				id: 2,
				url: "https://krycha-store.vercel.app/",
				icon: <AiOutlineLink />,
				text: "Live Demo",
			},
		],
	},
	{
		id: 2,
		img: lolProfile,
		name: "LoL Profile",
		desc: "API project where you can find players profile with detailed match history and statistics in League of Legends Game.",
		technologies: [
			{ id: 1, src: logoReact, alt: "logo react" },
			{ id: 2, src: logoTS, alt: "logo typescript" },
			{ id: 3, src: logoSass, alt: "logo sass" },
			{ id: 4, src: logoJest, alt: "logo jest" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/lol-profile",
				icon: <AiOutlineGithub />,
				text: "Code",
			},
			{
				id: 2,
				url: "https://lolprofile-krycha.netlify.app/",
				icon: <AiOutlineLink />,
				text: "Live Demo",
			},
		],
	},
	{
		id: 3,
		img: minesweeper,
		name: "Minesweeper Game",
		desc: "Single player logic based game whose object is to locate a predetermined number of randomly placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.",
		technologies: [
			{ id: 1, src: logoReact, alt: "logo react" },
			{ id: 2, src: logoJS, alt: "logo javascript" },
			{ id: 3, src: logoCss, alt: "logo css" },
		],
		links: [
			{
				id: 1,
				url: "https://github.com/Krycha94/minesweeper",
				icon: <AiOutlineGithub />,
				text: "Code",
			},
			{
				id: 2,
				url: "https://minesweeper-krycha.netlify.app/",
				icon: <AiOutlineLink />,
				text: "Live Demo",
			},
		],
	},
];
