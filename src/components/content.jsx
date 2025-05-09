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
		path: "/Skills",
	},
	{
		id: "projectsPage",
		name: "Projects",
		logo: <IoGameControllerOutline />,
		selectedLogo: <IoGameController className="text-cyan-600 dark:text-yellow-400" />,
		path: "/Projects",
	},
	{
		id: "designsPage",
		name: "Designs",
		logo: <HiOutlinePhoto />,
		selectedLogo: <HiMiniPhoto className="text-cyan-600 dark:text-yellow-400" />,
		path: "/Designs",
	},
	{
		id: "achievementsPage",
		name: "Achievements",
		logo: <PiMedalLight />,
		selectedLogo: <PiMedalFill className="text-cyan-600 dark:text-yellow-400" />,
		path: "/Achievements",
	},
	{
		id: "connectPage",
		name: "Connect",
		logo: <BsTelephone />,
		selectedLogo: <BsFillTelephoneFill className="text-cyan-600 dark:text-yellow-400" />,
		path: "/Connect",
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
