import { HiOutlineHome } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { AiOutlineBulb } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { HiMiniPhoto } from "react-icons/hi2";
import { PiMedalLight } from "react-icons/pi";
import { PiMedalFill } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

export const SidebarContent = [
	{
		id: "homePage",
		name: "Home",
		logo: <HiOutlineHome />,
		selectedLogo: <HiHome className="text-cyan-600 dark:text-yellow-400" />,
		path: "/",
	},
	{
		id: "skillsPage",
		name: "Skills",
		logo: <AiOutlineBulb />,
		selectedLogo: <AiFillBulb className="text-cyan-600 dark:text-yellow-400" />,
		path: "/skills",
	},
	{
		id: "projectsPage",
		name: "Projects",
		logo: <IoGameControllerOutline />,
		selectedLogo: <IoGameController className="text-cyan-600 dark:text-yellow-400" />,
		path: "/projects",
	},
	{
		id: "designsPage",
		name: "Designs",
		logo: <HiOutlinePhoto />,
		selectedLogo: <HiMiniPhoto className="text-cyan-600 dark:text-yellow-400" />,
		path: "/designs",
	},
	{
		id: "achievementsPage",
		name: "Achievements",
		logo: <PiMedalLight />,
		selectedLogo: <PiMedalFill className="text-cyan-600 dark:text-yellow-400" />,
		path: "/achievements",
	},
	{
		id: "connectPage",
		name: "Connect",
		logo: <BsTelephone />,
		selectedLogo: <BsFillTelephoneFill className="text-cyan-600 dark:text-yellow-400" />,
		path: "/connect",
	},
];

export const AboutMeContent = [
	// "Hi, I am Aditya Pandey.",
	"I am a Web Developer. I have a good command over tech stacks like MERN Stack and I am currently exploring Vite JS.",
	"I am a tech enthusiast, having a keen interest and passion for tech related stuff.",
	// "I am a good team-leader who can lead a team of hard-working individuals.",
	"I am a good team-worker who has coordination skills to work and adapt quickly with any team.",
	"I am a confident speaker, having a good command on my communication skills.",
	"Not only this, but I am also a good presentation creator, with a good command over the tools like Microsoft PowerPoint, Canva and Figma.",
	"I have prior experience of graphic designing and video editing as well.",
	"I am aspiring to become a Game Developer in the near future and I wish to lead the world of game development with my professionalism.",
];

export const EducationContent = [
	{
		id: "bca",
		name: "BCA",
		logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Education/jims.png",
		// start: "Dec 2021",
		// end: "June 2024",
		start: "2021",
		end: "2024",
		school: "JIMS, Sector-5, Rohini",
		location: "New Delhi",
		board: "GGSIPU",
	},
	{
		id: "xii",
		name: "XII (PCM + CS)",
		// logo: "https://hrssss.co.in/images/hansraj-logo.png",
		logo: "https://images.uniapply.com/uploads/college/image/logo/2178/Hans_Raj_Smarak_Senior_Secondary_School_1779_Logo_1.jpg",
		start: "2020",
		end: "2021",
		school: "Hansraj Smarak Sr. Sec. School",
		location: "New Delhi",
		board: "CBSE",
	},
	{
		id: "x",
		name: "X",
		logo: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/PortfolioAdi/Education/eps.png",
		start: "2018",
		end: "2019",
		school: "Everest Public School",
		location: "Ghaziabad",
		board: "CBSE",
	},
];

export const WorkXPContent = [
	{
		id: "google_soft_dev",
		logo: "https://pngimg.com/d/google_PNG19630.png",
		company: "Google LLC",
		branch: "New Delhi",
		role: "Software Engineer",
		start: "Mar 2024",
		end: "May 2030",
		// desc: "I have worked in Google LLC, ( New Delhi branch ) as a Software Developer for 6 years.",
		techs: ["HTML", "CSS", "JS", "MERN", "ViteJS"],
	},
	{
		id: "ms_soft_dev",
		// logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
		logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Symbol.png",
		company: "Microsoft Corporation",
		branch: "New Delhi",
		role: "Software Engineer",
		start: "Mar 2024",
		end: "May 2030",
		// desc: "I have worked in Google LLC, ( New Delhi branch ) as a Software Developer for 6 years.",
		techs: ["HTML", "CSS", "JS", "MERN", "ViteJS", "Tailwind CSS"],
	},
	{
		id: "amazon_soft_dev",
		logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
		company: "Amazon Inc.",
		branch: "New Delhi",
		role: "Software Engineer",
		start: "Mar 2024",
		end: "May 2030",
		// desc: "I have worked in Google LLC, ( New Delhi branch ) as a Software Developer for 6 years.",
		techs: ["HTML", "CSS", "JS", "MERN", "ViteJS"],
	},
];

export const LangsContent = [
	{
		id: "html",
		name: "HTML",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
	},
	{
		id: "css",
		name: "CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
	},
	{
		id: "js",
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		id: "c#",
		name: "C#",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
	},
	{
		id: "java",
		name: "Java",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
	},
	{
		id: "python",
		name: "Python",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	},
	{
		id: "cpp",
		name: "C++",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
	},
	{
		id: "c",
		name: "C",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
	},
	// {
	// 	id: "dart",
	// 	name: "Dart",
	// 	icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
	// },
];

export const DBsContent = [
	{
		id: "mongo",
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
	},
	// {
	// 	id: "mysql",
	// 	name: "MySQL",
	// 	icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
	// },
	// {
	// 	id: "oracle-sql",
	// 	name: "Oracle SQL",
	// 	icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
	// },
];

export const TechsContent = [
	{
		id: "unity",
		name: "Unity",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
	},
	{
		id: "tailwind",
		name: "Tailwind CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		id: "vite",
		name: "Vite JS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
	},
	{
		id: "react",
		name: "React JS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		id: "express",
		name: "Express JS",
		// icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		icon: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@latest/Logos/express.svg",
	},
	{
		id: "node",
		name: "Node JS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
	},
	// {
	// 	id: "next",
	// 	name: "Next JS",
	// 	icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
	// },
	// {
	// 	id: "flutter",
	// 	name: "Flutter",
	// 	icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
	// },
];

export const ToolsContent = [
	{
		id: "prog",
		title: "Programming Tools",
		tools: [
			{
				id: "vs-code",
				// name: "Microsoft Visual Studio Code",
				name: "VS Code",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
			},
			{
				id: "vs",
				// name: "Microsoft Visual Studio",
				name: "Visual Studio",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
			},
			{
				id: "jetbrains",
				name: "JetBrains",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
			},
		],
	},
	{
		id: "design",
		title: "Designing Tools",
		tools: [
			{
				id: "ms-ppt",
				// name: "Microsoft PowerPoint",
				name: "PowerPoint",
				icon: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/Logos/powerpoint.svg",
			},
			{
				id: "figma",
				name: "Figma",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
			},
			{
				id: "canva",
				name: "Canva",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
			},
			{
				id: "adobe-ps",
				name: "Photoshop",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
			},
		],
	},
	{
		id: "vid-edit",
		title: "Video Editing Tools",
		tools: [
			{
				id: "filmora",
				// name: "Wondershare Filmora",
				name: "Filmora",
				icon: "https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/Logos/filmora.svg",
			},
		],
	},
];
