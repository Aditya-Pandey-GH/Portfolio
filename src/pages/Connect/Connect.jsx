import { RiseUpWhenVisible } from "../../components/anims";
import Cover from "../../components/Cover";

const Connect = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Connect */}
			<RiseUpWhenVisible>
				<div>Connect</div>
			</RiseUpWhenVisible>
		</>
	);
};

export default Connect;
