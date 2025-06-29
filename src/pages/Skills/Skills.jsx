import SkillSet from "./SkillSet";
import SkillSubSet from "./SkillSubSet";
import Cover from "../../components/Cover";
import { DBsContent, LangsContent, TechsContent, ToolsContent } from "../../components/content";

const Skills = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			<div className="mt-8 sm:mt-12 mb-4 sm:mb-0">
				{/* Languages */}
				<SkillSet heading={"LANGUAGES"} content={LangsContent} />

				{/* DataBases */}
				<SkillSet heading={"DATABASES"} content={DBsContent} />

				{/* Technologies & Frameworks */}
				<SkillSet heading={"TECHNOLOGIES & FRAMEWORKS"} content={TechsContent} />

				{/* Tools */}
				<SkillSubSet heading={"TOOLS"} content={ToolsContent} />
			</div>
		</>
	);
};

export default Skills;
