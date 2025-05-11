import { RiseUpWhenVisible } from "../components/anims";
import Cover from "../components/Cover";

const Designs = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Designs */}
			<RiseUpWhenVisible>
				<div>Designs</div>
			</RiseUpWhenVisible>
		</>
	);
};

export default Designs;
