import { RiseUpWhenVisible } from "../components/anims";
import Cover from "../components/Cover";

const Achievements = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Achievements */}
			<RiseUpWhenVisible>
				<div>Achievements</div>
			</RiseUpWhenVisible>
		</>
	);
};

export default Achievements;
