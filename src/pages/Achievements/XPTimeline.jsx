import { RiseUpWhenVisible } from "../../components/anims";
import BulletPointer from "../../components/BulletPointer";

const XPTimeline = ({ infXPItems = [] }) => {
	// const theme = useTheme();
	// const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for screen <600px

	return (
		<>
			<section className="flex flex-col mb-4">
				{infXPItems.map((infXPItem, infXPIndex) => (
					<RiseUpWhenVisible key={infXPIndex} className="w-full h-full mt-4 flex flex-row gap-4 px-2 group">
						{/* Timeline Bar */}
						<div className="flex flex-col gap-3 items-center relative top-2">
							<div className="relative -top-0.5 transition-all duration-300">
								<BulletPointer className="w-6" />
							</div>
							<div className="w-0.5 h-full flex-1 bg-neutral-700 dark:bg-neutral-100 rounded-full group-last:hidden"></div>
						</div>
						{/* Right Content Section */}
						<section className="w-full h-full px-4 py-1 rounded-lg flex flex-col gap-2 text-justify">
							<h3 className="text-lg sm:text-xl font-bold text-light dark:text-dark">{infXPItem.role}</h3>
							<h4 className="text-base sm:text-lg font-normal text-black dark:text-white">{infXPItem.desc}</h4>
						</section>
					</RiseUpWhenVisible>
				))}
			</section>
		</>
	);
};

export default XPTimeline;
