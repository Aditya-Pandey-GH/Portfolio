import { AppsContent, GamesContent, WebsitesContent } from "../../components/content";
import Cover from "../../components/Cover";
import ProjectSection from "./ProjectSection";

const Projects = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Games */}
			<ProjectSection heading={"VIDEO GAMES"} route={"games"} content={GamesContent} />

			{/* Websites */}
			<ProjectSection heading={"WEBSITES"} route={"websites"} content={WebsitesContent} />

			{/* Apps */}
			<ProjectSection heading={"APPLICATIONS"} route={"apps"} content={AppsContent} />
		</>
	);
};

export default Projects;
