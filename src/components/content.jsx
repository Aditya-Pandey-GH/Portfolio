import { HiOutlineHome, HiHome } from "react-icons/hi"; // Home
import { AiOutlineBulb, AiFillBulb } from "react-icons/ai"; // Skills
import { IoGameControllerOutline, IoGameController } from "react-icons/io5"; // Projects
import { HiOutlinePhoto, HiMiniPhoto } from "react-icons/hi2"; // Designs
import { PiMedalLight, PiMedalFill } from "react-icons/pi"; // Achievements
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs"; // Connect

import { GitHub, Instagram, LeetCode, LinkedIn, YouTube } from "../pages/Connect/SocialMediaLogo";

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
	"I am a tech enthusiast with a keen interest and passion for technology.",
	"I am a web developer specializing in the MERN stack, with React.js as my forte. I am currently learning backend development.",
	"I am a strong team player with coordination skills that allow me to work and adapt quickly in any team environment.",
	"I am also an effective team leader with the ability to guide and motivate a team of hardworking individuals.",
	// "I am a confident speaker with a strong command over my communication skills.",
	"I also excel at creating presentations and have proficiency in tools such as Microsoft PowerPoint, Canva, and Figma.",
	"I also have prior experience in graphic design and video editing.",
	"I aspire to become a game developer in the near future and aim to lead the world of game development with professionalism.",
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
		desc: "From 2021 to 2024, I pursued my Bachelor of Computer Applications (BCA) at JIMS, a college affiliated with Guru Gobind Singh Indraprastha University (GGSIPU). During my three-year program, I gained a comprehensive understanding of core computer science principles. The curriculum covered a wide range of subjects, including programming languages like C, C++, and Java, data structures, database management systems (DBMS), web development technologies, and software engineering. My time at JIMS not only provided me with a solid theoretical foundation but also honed my practical skills through various projects and assignments, preparing me for a career in the IT industry.",
	},
	{
		id: "xii",
		name: "XII (PCM / CS)",
		logo: "/home/education/hrssss.avif",
		start: "2020",
		end: "2021",
		// school: "Hansraj Smarak Sr. Sec. School",
		school: "Hansraj Smarak Sr Sec School",
		location: "New Delhi",
		board: "CBSE",
		settings: {
			bg: "#c70000",
		},
		desc: "I completed my 11th and 12th grades at Hansraj Smarak Sr Sec School from 2020 to 2021. My academic focus was on the Science stream with a combination of Physics, Chemistry, Mathematics, and Computer Science (PCM / CS). The curriculum under the CBSE board provided me with a strong foundation in scientific and logical reasoning. My studies in Computer Science during this period sparked my initial interest in the field, which ultimately led me to pursue a degree in BCA. The rigorous coursework and competitive environment at this school were instrumental in developing my problem-solving abilities and preparing me for higher education.",
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
		desc: "I completed my schooling up to the 10th grade at Everest Public School, a CBSE-affiliated institution in Ghaziabad, from 2018 to 2019. This period of my education was crucial in building a broad and fundamental knowledge base across various subjects, including Mathematics, Science, Social Science, and languages. The school's emphasis on a well-rounded education helped me develop strong communication skills and a disciplined approach to learning. The foundational concepts and study habits I established at Everest Public School were essential building blocks for my subsequent academic journey and personal growth.",
	},
];

export const HobbyContent = [
	{
		// id: "singing",
		title: "Singing",
		icon: "/home/hobby/singing.webp",
	},
	{
		// id: "gaming",
		title: "Gaming",
		icon: "/home/hobby/gaming.webp",
	},
	{
		// id: "acting",
		title: "Acting",
		icon: "/home/hobby/acting.webp",
	},
	{
		// id: "writing",
		title: "Writing",
		icon: "/home/hobby/writing.webp",
	},
	{
		// id: "reading",
		title: "Reading",
		icon: "/home/hobby/reading.webp",
	},
];

export const WorkXPContent = [
	{
		id: "jims",
		logo: "/home/education/jims.avif",
		company: "JIMS, Sector-5, Rohini",
		branch: "New Delhi",
		role: "Web Developer",
		start: "Jan 2025",
		end: "Feb 2025",
		techs: ["HTML", "CSS", "JS"],
		settings: {
			bg: "#034da2",
		},
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
		// name: "JavaScript",
		name: "JS",
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
				id: "adobe-ps",
				// name: "Adobe Photoshop",
				name: "Photoshop",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
			},
			{
				id: "canva",
				name: "Canva",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
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
			live: "https://game-zoned.itch.io/flappy-bird",
			// live: "https://github.com/Aditya-Pandey-GH/Flappy-Bird-Clone/releases/latest",
		},
	},
].reverse();

export const WebsitesContent = [
	{
		id: "jimsPrePlace",
		name: "JIMS Pre-Placement Portal",
		desc: "JIMS Pre-Placement Portal is a web for all the pre-placement related content for JIMS, making it easy for the students to access it later. Also, with a simple admin portal, the admin can easily add or delete or modify multiple things in the website.",
		techs: ["Node.js", "Express.js", "MongoDB", "React", "Cascading Style Sheets (CSS)"],
		icon: "/projects/websites/jimsPrePlace/Icon.avif",
		thumb: "/projects/websites/jimsPrePlace/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/JIMS-PrePlacement-Portal",
			live: "",
		},
	},
	// {
	// 	id: "portfolio",
	// 	name: "Portfolio Website",
	// 	desc: "This is my portfolio website. My skills, achievements, work and professional work are all mentioned on this website.",
	// 	techs: ["React.js", "Vite.js", "CSS", "Tailwind"],
	// 	icon: "/projects/websites/portfolio/Icon.avif",
	// 	thumb: "/projects/websites/portfolio/Thumb.avif",
	// 	links: {
	// 		github: "https://github.com/Aditya-Pandey-GH/Portfolio",
	// 		live: "https://aditya-pandey.vercel.app/",
	// 	},
	// },
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
		id: "healthElev",
		name: "Health Elevator",
		desc: "Health Elevator is a website that helps the users to search for the nearby medical stores and set the reminders for medicines. Since most of the people actively use WhatsApp, all the reminders will be sent to the WhatsApp number that you want to receive your reminders on.",
		techs: ["Node.js", "Express.js", "MongoDB", "React", "CSS", "Bootstrap", "Tailwind"],
		icon: "/projects/websites/healthElev/Icon.avif",
		thumb: "/projects/websites/healthElev/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Health-Elevator-Legacy",
			// live: "",
			live: "https://youtu.be/l5zPGm_0p40",
		},
	},
	// {
	// 	id: "azfFoods",
	// 	name: "AZF Foods",
	// 	desc: "AZF Foods is a one stop solution to all your spicy problems. The aim is to provide high-quality, most authentic, sustainably sourced spices that bring every dish to life.",
	// 	techs: ["HTML", "CSS", "JavaScript", "MongoDB"],
	// 	icon: "/projects/websites/azfFoods/Icon.avif",
	// 	thumb: "/projects/websites/azfFoods/Thumb.avif",
	// 	links: {
	// 		// github: "",
	// 		github: "https://github.com/Aditya-Pandey-GH/AZF-Foods",
	// 		// live: "https://azffoods.vercel.app/",
	// 		live: "https://azffoods.com.au/",
	// 	},
	// },
	{
		id: "partially-true",
		name: "Partially True",
		desc: "Partially True is a browser based game. In this game, the computer chooses a number and you have to guess what the digits are. For each digit you enter, the computer will tell you which digit is in the number, which one is not, and which one is at the wrong place.",
		techs: ["React.js", "Vite.js", "Tailwind"],
		icon: "/projects/websites/partiallyTrue/Icon.avif",
		thumb: "/projects/websites/partiallyTrue/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/Partially-True",
			live: "https://partially-true.vercel.app",
		},
	},
].reverse();

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
	{
		id: "jimsCanteen",
		name: "JIMS Canteen",
		desc: "JIMS Canteen is a canteen management system for JIMS Rohini (Sector-5), which helps the canteen manager to manage the canteen easily.",
		techs: ["Android Studio", "XML", "Java", "Firebase", "React", "Node", "Express", "CSS", "MongoDB"],
		icon: "/projects/apps/jimsCanteen/Icon.avif",
		thumb: "/projects/apps/jimsCanteen/Thumb.avif",
		links: {
			github: "https://github.com/Aditya-Pandey-GH/JIMS-Canteen",
			live: "",
		},
	},
].reverse();

// Designs Page
export const NewslettersContent = [
	{
		id: "oct22",
		title: "How 5G will transform India?",
		link: "/designs/newsletters/2022-10.pdf",
		logo: "/designs/newsletters/2022-10.avif",
	},
	{
		id: "mar23",
		title: "The Era of AI Chatbots",
		link: "/designs/newsletters/2023-03.pdf",
		logo: "/designs/newsletters/2023-03.avif",
	},
	{
		id: "may23",
		title: "ChatGPT: Revolutionizing Conversational AI",
		link: "/designs/newsletters/2023-05.pdf",
		logo: "/designs/newsletters/2023-05.avif",
	},
	{
		id: "oct23",
		title: "Data, Data Everywhere (Part 1)",
		link: "/designs/newsletters/2023-10.pdf",
		logo: "/designs/newsletters/2023-10.avif",
	},
	{
		id: "nov23",
		title: "Data, Data Everywhere (Part 2)",
		link: "/designs/newsletters/2023-11.pdf",
		logo: "/designs/newsletters/2023-11.avif",
	},
];

export const PostersContent = [
	{
		title: "Eco-Friendly Diwali",
		poster: "/designs/posters/diwaliPoster.avif",
		// desc: "This poster was made for a poster-making competition. The theme for that event was Eco-Friendly Diwali. It was conducted on October 28, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
	},
	{
		title: "BCA Orientation (2022-25)",
		poster: "/designs/posters/orientation.avif",
		// desc: "This poster was made for the orientation session that was to be held for the students enrolled in BCA program of batch 2022-25 at Jagan Institute of Management Studies, Sector-5, Rohini. It was organized on December 1, 2022.",
	},
	{
		title: "Air or Noise Pollution",
		poster: "/designs/posters/pollution.avif",
		// desc: "This poster was made for a Nukkad Natak event which was to be organized to spread awareness about Air and Noise Pollution. It was conducted on December 13, 2022 by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
	},
	{
		title: "Sankalp Auditions (2022-25)",
		poster: "/designs/posters/sankalp.avif",
		// desc: "This poster was made for Sankalp, the theatre society of  Jagan Institute of Management Studies, Sector-5, Rohini, to cast students from 2022-25 batch into the society. It was scheduled for December 28, 2022.",
	},
	{
		title: "Code-It",
		poster: "/designs/posters/codeIt.avif",
		// desc: 'This poster was made for a coding-based event named "Code-It". It was conducted on June 14, 2023 by the IT Club (TekQbe) at Jagan Institute of Management Studies, Sector-5, Rohini.',
	},
	{
		title: "Farewell Party (2020-23)",
		poster: "/designs/posters/farewell.avif",
		// desc: "This poster was made for the Farewell Party of the students of MCA, BBA, BCA and BA Eco Hons.. It was conducted on August 12, 2023 by the Cultural Club at Jagan Institute of Management Studies, Sector-5, Rohini.",
	},
	{
		title: "Code Hunt",
		poster: "/designs/posters/codeHunt.avif",
		// desc: "This poster was made for a 3 round coding-based event named Code Hunt. It was conducted in 2023, by the IT Club (TekQbe) of Jagan Institute of Management Studies, Sector-5, Rohini.",
	},
	{
		title: "Sai Tiffin Service",
		poster: "/designs/posters/saiTiffin.avif",
		// desc: "This poster was made to promote a local tiffin service, called SAI Tiffin Service. This tiffin service was started in September 2024, and aimed at providing the tiffin service to the people of Shalimar Garden, at a lower price than market price.",
	},
];

export const ThumbsContent = [
	"3oR5ldApMpI",
	"Pb_Hk2AlZVU",
	"sgpzSnycztg",
	"JUWIQRL62V0",
	"_BxOQkpalmQ",
	// "2Y0jFLYFcMY",
	// "n26HVo_bazU",
	"VUyd6ieASus",
	// "R9yA6mmFGkI",
	// "irowRLpyCWU",
	"maFhCbyzG5c",
	// "FBjGjlDT790",
	"94iwoTPCnKo",
	"PPep_IpFXhI",
	// "TnBjIPoa4R0",
	// "hVHoZ2JJUUA",
	"QTA6ti6IzN0",
	// "_Tgetvnn7BE",
	// "-veiGxp3axc",
	"tC1TCjrnnPI",
	"z9YVdeQLyUE",
].reverse();

export const OtherDesignsContent = [
	{
		type: "Certificate",
		// desc: "This certificate was made for an inter-college Tech Fest named Tech Jitters 2.0, which was supposed to be organized on May 1, 2024, by TekQbe, the IT Club of Jagan Institute of Management Studies, Sector-5, Rohini, but was later postponed.",
		logo: "/designs/others/tj2Cert.avif",
	},
	{
		type: "Certificate",
		// desc: "This certificate was made for an event named Eco Art, which was done to support One For All initiative. This event started with a stage play to spread awareness about recycling of plastic waste like milk packets, followed with a art competition where students had to make either drawings or hand paintings.",
		logo: "/designs/others/ecoArtCert.avif",
	},
	{
		type: "Certificate",
		// desc: "This certificate was made for the events that were organized by TekQbe in 2023, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini. These were later updated, when the college received NAAC A++ ranking.",
		logo: "/designs/others/tekqbeCert.avif",
	},
	{
		type: "Certificate",
		// desc: "This certificate was made for an initiative named One For All. This initiative involved collection of milk packets without clipping off the small cut-out from it, which is otherwise not easy to be recycled.",
		logo: "/designs/others/OFACert.avif",
	},
	{
		type: "Thumbnail",
		// desc: "This certificate was made for an initiative named One For All. This initiative involved collection of milk packets without clipping off the small cut-out from it, which is otherwise not easy to be recycled.",
		logo: "/designs/others/lmcThumb1.avif",
	},
	{
		type: "Backdrop",
		// desc: "This design was made as a backdrop for the farewell party of the MCA, BBA, BCA, and BA Eco Hons. graduates, who were paasing their respective courses in 2023, from Jagan Institute of Management Studies, Sector-5, Rohini. The event was organized by the Cultural Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
		logo: "/designs/others/farewellBG.avif",
	},
	{
		type: "UI/UX Component",
		// desc: "This design was made for a national-level hackathon named Code Kshetra, held in Februrary 2024 on 5 and 6, organized by Geek Room in association with Jagan Institute of Management Studies, Sector-5, Rohini. This design names one of the theme of the hackathon.",
		logo: "/designs/others/ckDesign.avif",
	},
	{
		type: "Memento",
		// desc: "This design was made for the mementos, which were given to the Guest speaker, and were to be given to the student coordinators of an event named Tech Jitters, held on July 18, 2022 and organized by TekQbe, the IT club of Jagan Institute of Management Studies, Sector-5, Rohini.",
		logo: "/designs/others/tjTrophy.avif",
	},
	{
		type: "Trophy",
		// desc: "This design was made as a header for the trophies which were given to students who took part in the Presentation Competition event, organized by the Eco Club of Jagan Institute of Management Studies, Sector-5, Rohini.",
		logo: "/designs/others/ecoTrophy.avif",
	},
];

// Achievements Page
export const SocialWelfareContent = [
	{
		desc: "Performed a themed act on Republic Day to raise public awareness about the challenges faced by the elderly and the growing need for compassion toward residents of old-age homes.",
		year: "Jan 2017",
	},
	{
		desc: "Participated in a street play highlighting the dangers of air and water pollution, aiming to educate the public on their harmful effects on the environment and health.",
		year: "Apr 2018",
	},
	{
		desc: "Delivered a street performance focused on the issue of water and land pollution, emphasizing its environmental consequences and encouraging responsible waste disposal.",
		year: "May 2019",
	},
	{
		desc: "Led a plastic recycling awareness campaign through an engaging act, inspiring fellow students to actively collect and recycle plastic waste under our initiative, 'One for All'.",
		year: "May 2022",
	},
	{
		desc: "Conducted a street play dedicated to raising awareness about air pollution and its significant adverse effects on the environment and human well-being.",
		year: "Dec 2022",
	},
];

export const XPContent = [
	{
		id: "tekqbe",
		company: "TekQbe",
		logo: "/achievements/xp/tekqbe.avif",
		start: "Feb 2022",
		end: "Jun 2024",
		location: "Rohini, Delhi",
		roles: [
			{
				role: "Club Coordinator",
				desc: "Served as the Student Coordinator of TekQbe, the official IT club of JIMS, from Feb 2022 to Jun 2024. Led the planning and execution of various technical events and fests, while collaborating with faculty and fellow team mates. Developed strong skills in leadership, team work, event coordination, and club operations.",
			},
			{
				role: "Graphic Designer",
				desc: "Worked as the Graphic Designer for TekQbe, where I created a wide range of visual assets including event posters, cover art, mementos, and certificates. Contributed to the club's branding and promotion efforts by producing consistent, high quality graphics tailored for both print and digital platforms.",
			},
		],
	},
	{
		id: "kaliedoscope",
		company: "Kaleidoscope",
		logo: "/achievements/xp/jims.avif",
		location: "Rohini, Delhi",
		start: "Dec 2021",
		end: "Jun 2024",
		roles: [
			{
				role: "Graphic Designer",
				desc: "Contributed as a Graphic Designer for IT Kaleidoscope, the official IT newsletter of JIMS. Designed visually appealing layouts, cover pages, and supporting graphics to enhance the overall aesthetic and readability of each edition. Ensured consistency in design while aligning with the newsletter's theme and institutional branding.",
			},
			{
				role: "Content Writer",
				desc: "Worked as a Content Writer for IT Kaleidoscope, crafting articles, features, and write-ups on various technology-related topics. Focused on delivering clear, engaging, and informative content tailored to the newsletter's academic and tech-savvy audience. Played an active role in maintaining content quality and relevance.",
			},
		],
	},
	{
		id: "geekRoom",
		company: "Geek Room",
		logo: "/achievements/xp/geekRoom.avif",
		location: "Rohini, Delhi",
		start: "Dec 2021",
		end: "Jun 2024",
		roles: [
			{
				role: "Event Coordinator",
				desc: "Served as the Core Event Coordinator for Code Kshetra, a national-level hackathon organized in collaboration with Geek Room. Oversaw end-to-end event planning, logistics, and team coordination to ensure smooth execution. Applied strong organizational and leadership skills while working closely with teams, mentors, and participants across the country.",
			},
			{
				role: "Graphic Designer",
				desc: "Worked as the Lead Graphic Designer for Code Kshetra, a national-level hackathon organized with Geek Room. Created impactful visual assets for both digital and print media, including event posters, banners, and social media creatives. Also designed trophies and mementoes, contributing to the overall branding and recognition of the event. Played a key role in shaping the event's visual identity and participant experience.",
			},
		],
	},
	{
		id: "technowhiz",
		company: "Technowhiz",
		logo: "/achievements/xp/technowhiz.avif",
		location: "Rohini, Delhi",
		start: "Dec 2021",
		end: "Jun 2024",
		roles: [
			{
				role: "Core Event Coordinator",
				desc: "Held the position of Core Event Coordinator for Technowhiz, the Annual Infotech Symposium of JIMS. Led the coordination and execution of various symposium activities, including technical competitions, workshops, and guest sessions. Demonstrated strong skills in team management, event planning, and visual design—ensuring seamless organization and a memorable experience for all participants.",
			},
		],
	},
];

export const BigEventsContent = [
	{
		id: "codeIt",
		name: "Code It",
		year: "February 2022",
		location: "JIMS, Delhi",
		desc: "Secured 3rd place in the 'Code It' competition, competing against senior BCA and MCA students. Demonstrated problem-solving, coding efficiency, and time management skills under pressure, proving my ability to perform in a competitive environment against more experienced participants.",
		logo: "/achievements/achievements/codeIt.avif",
	},
	{
		id: "ecoArt",
		name: "Eco Art",
		year: "May 2022",
		location: "JIMS, Delhi",
		desc: "Organized 'Eco Art' to raise awareness about plastic and milk packet recycling. Managed event coordination, contributed to creative planning, and performed an awareness act. Encouraged environmental responsibility through posters, hand paintings, and interactive sessions with participants and visitors.",
		logo: "/achievements/achievements/ofa.avif",
	},
	{
		id: "techJitters",
		name: "Tech Jitters",
		year: "July 2022",
		location: "JIMS, Delhi",
		desc: "Worked as coordinator for 'Tech Jitters,' an inter-college technical fest by TekQbe. Managed logistics, supported participants, and ensured smooth execution of events. Gained valuable experience in event management, teamwork, and problem-solving under time constraints.",
		logo: "/achievements/achievements/techJitters.avif",
	},
	{
		id: "sih22",
		name: "Smart India Hackathon 2022",
		year: "August 2022",
		location: "BIT Mesra, Jharkhand",
		desc: "Secured 4th place in Smart India Hackathon 2022 at BIT Mesra. Collaborated on a real-world project, presenting innovative solutions to judges. Enhanced technical expertise, teamwork, and the ability to work under intense national-level competition.",
		logo: "/achievements/achievements/sih.avif",
	},
	{
		id: "JIH23",
		name: "JIMS Internal Hackathon 2023",
		year: "September 2023",
		location: "JIMS, Delhi",
		desc: "Won 1st place in JIMS Internal Hackathon 2023, qualifying for Smart India Hackathon. Delivered an innovative project within tight deadlines, showcasing technical expertise, creativity, and collaborative skills. Strengthened problem-solving abilities for larger competitive platforms.",
		logo: "/achievements/achievements/sih.avif",
	},
	{
		id: "codekshetra",
		name: "Code Kshetra",
		year: "February 2024",
		location: "JIMS, Delhi",
		desc: "Organized 'Code Kshetra,' a national-level hackathon with sponsors like Coding Ninjas, Devfolio, and Polygon. Managed registrations, coordinated with teams and sponsors, and ensured event success. Developed strong leadership and event management skills through large scale coordination.",
		logo: "/achievements/achievements/codeKshetra.avif",
	},
].reverse();

export const CertsContent = [
	{
		id: "mernTraining",
		title: "MERN Stack Training",
		desc: "This was awarded for the completion of Summer training of MERN stack, at Jagan Institute of Management Studies, Sector-5 (Rohini).",
		cert: "/achievements/certs/mernStack.avif",
		by: "Tech Explica",
		on: "September 2023",
	},
	{
		id: "ofa-bajajCert",
		title: "Plastic Recycling",
		desc: "This was awarded for launching a small-scale initiative (One For All), which consisted of the collection of plastic milk packets, and then sending them to plastic recyclers.",
		cert: "/achievements/certs/oneForAll.avif",
		by: "Bajaj & Others",
		on: "July 2022",
	},
	{
		id: "networkBulls",
		title: "Network Bull (Cisco)",
		desc: "This was awarded for participating in a one-day industrial visit on network implementation and cyber security.",
		cert: "/achievements/certs/cyberSec.avif",
		by: "Network Bull",
		on: "May 2022",
	},
	{
		id: "ipr-event",
		title: "NIPAM",
		desc: "This was awarded for participating in the IP Awareness Training Program under National Intellectual Property Awareness Mission, called Scope for All.",
		cert: "/achievements/certs/scopeForAll.avif",
		by: "NIPAM",
		on: "February 2022",
	},
];

// Connect Page
export const SocialContent = [
	{
		id: "professional",
		type: "Professional Accounts",
		socialMediaACs: [
			{
				id: "github",
				name: "GitHub",
				account: "https://www.github.com/Aditya-Pandey-GH",
				icon: <GitHub />,
			},
			{
				id: "linkedin",
				name: "LinkedIn",
				account: "https://www.linkedin.com/in/aditya-pandey-in",
				icon: <LinkedIn />,
			},
			{
				id: "leetcode",
				name: "LeetCode",
				account: "https://www.leetcode.com/u/Aditya-Pandey-LC",
				icon: <LeetCode />,
			},
		],
	},
	{
		id: "personal",
		type: "Personal Accounts",
		socialMediaACs: [
			{
				id: "youtube",
				name: "YouTube",
				account: "https://www.youtube.com/@GameZonedYT",
				icon: <YouTube />,
			},
			{
				id: "instagram",
				name: "Instagram",
				account: "https://www.instagram.com/adipandey.in",
				icon: <Instagram />,
			},
		],
	},
];
