import { RiseUpWhenVisible } from "../components/anims";
import Cover from "../components/Cover";

const Projects = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Projects */}
			<RiseUpWhenVisible>
				<div>Projects</div>
			</RiseUpWhenVisible>
		</>
	);
};

export default Projects;
