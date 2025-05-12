import { DBsContent, LangsContent, TechsContent, ToolsContent } from "../../components/content";
import Cover from "../../components/Cover";
import SkillSet from "./SkillSet";
import SkillSubSet from "./SkillSubSet";

const Skills = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Languages */}
			<SkillSet heading={"LANGUAGES"} content={LangsContent} />

			{/* DataBases */}
			<SkillSet heading={"DATABASES"} content={DBsContent} />

			{/* Technologies & Frameworks */}
			<SkillSet heading={"TECHNOLOGIES & FRAMEWORKS"} content={TechsContent} />

			{/* Tools */}
			<SkillSubSet heading={"TOOLS"} content={ToolsContent} />
		</>
	);
};

export default Skills;
