import ConnectSubSet from "./ConnectSubSet";
import Cover from "../../components/Cover";
import { SocialContent } from "../../components/content";

const Connect = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Connect */}
			<ConnectSubSet heading={"SOCIAL MEDIA"} content={SocialContent} />
		</>
	);
};

export default Connect;
