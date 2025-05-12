import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cover from "../../components/Cover";
import ProjectSection from "./ProjectSection";
import { AppsContent, GamesContent, WebsitesContent } from "../../components/content";

const ProjectCategory = () => {
	const [heading, setHeading] = useState(null);
	const [content, setContent] = useState([]);

	const { projectCategory } = useParams();

	useEffect(() => {
		// console.log(projectCategory);
		if (projectCategory === "games") {
			console.log(projectCategory);
			setHeading("VIDEO GAMES");
			setContent(GamesContent);
		} else if (projectCategory === "websites") {
			setHeading("WEBSITES");
			setContent(WebsitesContent);
		} else if (projectCategory === "apps") {
			setHeading("APPLICATIONS");
			setContent(AppsContent);
		}
	});
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* All the Projects corresponding to the current route */}
			{/* {console.log(heading, content)} */}
			<ProjectSection heading={heading} content={content} />
		</>
	);
};

export default ProjectCategory;
