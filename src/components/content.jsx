import { HiOutlineHome, HiHome } from "react-icons/hi"; // Home
import { AiOutlineBulb, AiFillBulb } from "react-icons/ai"; // Skills
import { IoGameControllerOutline, IoGameController } from "react-icons/io5"; // Projects
import { HiOutlinePhoto, HiMiniPhoto } from "react-icons/hi2"; // Designs
import { PiMedalLight, PiMedalFill } from "react-icons/pi"; // Achievements
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs"; // Connect

// Sidebar
export const SidebarContent = [
	{
		id: "homePage",
		name: "Home",
		logo: <HiOutlineHome />,
		selectedLogo: <HiHome className="text-light dark:text-dark" />,
		path: "/",
	},
	{
		id: "skillsPage",
		name: "Skills",
		logo: <AiOutlineBulb />,
		selectedLogo: <AiFillBulb className="text-light dark:text-dark" />,
		path: "/skills",
	},
	{
		id: "projectsPage",
		name: "Projects",
		logo: <IoGameControllerOutline />,
		selectedLogo: <IoGameController className="text-light dark:text-dark" />,
		path: "/projects",
	},
	{
		id: "designsPage",
		name: "Designs",
		logo: <HiOutlinePhoto />,
		selectedLogo: <HiMiniPhoto className="text-light dark:text-dark" />,
		path: "/designs",
	},
	{
		id: "achievementsPage",
		name: "Achievements",
		logo: <PiMedalLight />,
		selectedLogo: <PiMedalFill className="text-light dark:text-dark" />,
		path: "/achievements",
	},
	{
		id: "connectPage",
		name: "Connect",
		logo: <BsTelephone />,
		selectedLogo: <BsFillTelephoneFill className="text-light dark:text-dark" />,
		path: "/connect",
	},
];

// Home Page
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
	// {
	// 	id: "mca",
	// 	name: "MCA",
	// 	logo: "/home/education/*.avif",
	// 	start: "2025",
	// 	end: "2027",
	// 	school: "College",
	// 	location: "New Delhi",
	// 	board: "University",
	// },
	{
		id: "bca",
		name: "BCA",
		logo: "/home/education/jims.avif",
		// start: "Dec 2021",
		// end: "June 2024",
		start: "2021",
		end: "2024",
		school: "JIMS, Sector-5, Rohini",
		location: "New Delhi",
		board: "GGSIPU",
		settings: {
			bg: "#034da2",
		},
	},
	{
		id: "xii",
		name: "XII (PCM / CS)",
		logo: "/home/education/hrssss.avif",
		start: "2020",
		end: "2021",
		school: "Hansraj Smarak Sr. Sec. School",
		location: "New Delhi",
		board: "CBSE",
		settings: {
			bg: "#c70000",
		},
	},
	{
		id: "x",
		name: "X",
		logo: "/home/education/eps.avif",
		start: "2018",
		end: "2019",
		school: "Everest Public School",
		location: "Ghaziabad",
		board: "CBSE",
		settings: {
			bg: "#52a3c5",
		},
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

// Skills Page
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
				// name: "Adobe Photoshop",
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

// Projects Page
export const GamesContent = [
	{
		id: "flappy",
		name: "Flappy Bird (Clone)",
		desc: "Flappy Bird is a very popular game launched in 2013. This project is a clone of the original Flappy Bird game.",
		techs: ["Unity", "C#"],
		icon: "/projects/games/flappy/Icon.avif",
		thumb: "/projects/games/flappy/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Flappy-Bird-Clone",
			live: "https://github.com/Aditya-Pandey-GH/Flappy-Bird-Clone/releases/latest",
		},
	},
];

export const WebsitesContent = [
	// {
	// 	id: "jimsPrePlace",
	// 	name: "JIMS Pre-Placement Portal {In Progress}",
	// 	desc: "JIMS Pre-Placement Portal is a web for all the pre-placement related content for JIMS, making it easy for the students to access it later. Also, with a simple admin portal, the admin can easily add or delete or modify multiple things in the website.",
	// 	techs: ["Node.js", "Express.js", "MongoDB", "React", "Cascading Style Sheets (CSS)"],
	// 	icon: "",
	// 	thumb: "",
	// 	links: {
	// 		github: "",
	// 		live: "",
	// 	},
	// },
	{
		id: "portfolio",
		name: "Aditya Pandey's Portfolio Website",
		desc: "This is my portfolio website. My skills, achievements, work and professional work are all mentioned on this website.",
		techs: ["React.js", "Vite.js", "CSS", "Tailwind"],
		icon: "/projects/websites/portfolio/Icon.avif",
		thumb: "/projects/websites/portfolio/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Portfolio",
			live: "https://aditya-pandey.vercel.app/",
		},
	},
	{
		id: "evilSimon",
		name: "Evil Simon",
		desc: "Evil Simon is the hard mode of Simon Says game. The concept of this game is same as the original Simon Says game, but the Evil Simon has a bit of difficulty to offer, and you have to overcome that difficulty, by making and breaking high scores.",
		techs: ["React.js", "Vite.js", "CSS"],
		icon: "/projects/websites/evilSimon/Icon.avif",
		thumb: "/projects/websites/evilSimon/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Evil-Simon",
			live: "https://evil-simon.vercel.app",
		},
	},
	{
		id: "azfFoods",
		name: "AZF Foods",
		desc: "At AZF foods, We're inspired by a true love for cooking and a dedication to delivering the finest, most authentic spices. The aim is to provide high-quality, sustainably sourced spices that bring every dish to life.",
		techs: ["HTML", "CSS", "JavaScript", "MongoDB"],
		icon: "/projects/websites/azfFoods/Icon.avif",
		thumb: "/projects/websites/azfFoods/Thumb.avif",
		links: {
			github: "",
			// live: "https://azffoods.vercel.app/",
			live: "https://azffoods.com.au/",
		},
	},
	{
		id: "healthElev",
		name: "Health Elevator",
		desc: "Health Elevator is a website that helps the users to search for the nearby medical stores, and set the reminders for medicines. All the reminders will be sent to your WhatsApp number that you want to recieve your reminders on, since most of the people are active on WhatsApp.",
		techs: ["Node.js", "Express.js", "MongoDB", "React", "CSS", "Bootstrap", "Tailwind"],
		icon: "/projects/websites/healthElev/Icon.avif",
		thumb: "/projects/websites/healthElev/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Health-Elevator-Legacy",
			live: "",
		},
	},
];

export const AppsContent = [
	{
		id: "miniGames",
		name: "Mini Games",
		desc: "Mini Games is a command line based Python project. This project contains a set games for different purposes, such as fun games and mind games.",
		techs: ["Python", "MySQL"],
		icon: "/projects/apps/miniGames/Icon.avif",
		thumb: "/projects/apps/miniGames/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/G-12",
			live: "",
		},
	},
	{
		id: "miniGamesPlus",
		name: "Mini Games Plus",
		desc: "Mini Games is a Graphical User Interface based Python project. Using libraries like tkinter and customtkinter, this project aims to improve the original G-12 project, by adding an interactable GUI.",
		techs: ["Python", "SQLite"],
		icon: "/projects/apps/miniGamesPlus/Icon.avif",
		thumb: "/projects/apps/miniGamesPlus/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/G-12-Plus",
			live: "",
		},
	},
];
