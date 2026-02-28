// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import { useMediaQuery, useTheme } from "@mui/material";

import { RiseUpWhenVisible } from "../../components/anims";

const EducationTimeline = ({ eduItems = [] }) => {
	// const theme = useTheme();
	// const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	// console.log(eduData);
	// const eduItem = eduItems[0];

	return (
		<>
			<section className="flex flex-col mb-4">
				{eduItems.map((eduItem, eduIndex) => (
					<RiseUpWhenVisible key={eduItem.id} className="w-full h-full mt-4 flex flex-row gap-4 px-2 group">
						{/* Left Content Section */}
						{
							<section
								className={`w-full h-full bg-neutral-100 not-dark:shadow-xl dark:bg-neutral-800 px-6 py-4 rounded-lg text-justify hidden md:block ${eduIndex % 2 == 0 && "invisible"}`}
							>
								<h3 className="text-lg sm:text-xl font-bold text-light dark:text-dark">{eduItem.name}</h3>
								<h4 className="font-medium text-neutral-700 dark:text-neutral-400 mb-2">{eduItem.start + " - " + eduItem.end}</h4>
								<h4 className="font-semibold text-black dark:text-white">{eduItem.school}</h4>
								<h4 className="font-normal dark:font-light text-black dark:text-white">{eduItem.board}</h4>
							</section>
						}
						{/* Timeline Bar */}
						<div className="flex flex-col gap-3 items-center relative top-2">
							<div className="bg-white rounded-full relative -top-0.5 hover:scale-125 transition-all duration-300">
								<img src={eduItem.logo} alt={eduItem.name} className="w-20 md:w-48 p-1 rounded-full" />
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									aria-hidden="true"
									className="w-12"
									fill={eduItem.settings.bg}
								>
									<circle
										cx="16"
										cy="16"
										r="10"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="stroke-2 stroke-white"
									></circle>
								</svg> */}
							</div>
							<div className="w-1 h-full flex-1 bg-neutral-700 dark:bg-neutral-100 rounded-full group-last:hidden"></div>
						</div>
						{/* Right Content Section */}
						<section
							className={`w-full h-full bg-neutral-100 not-dark:shadow-xl dark:bg-neutral-800 px-6 py-4 rounded-lg text-justify ${eduIndex % 2 != 0 && "md:invisible"}`}
						>
							<h3 className="text-lg sm:text-xl font-bold text-light dark:text-dark">{eduItem.name}</h3>
							<h4 className="font-medium text-neutral-700 dark:text-neutral-400 mb-2">{eduItem.start + " - " + eduItem.end}</h4>
							<h4 className="font-semibold text-black dark:text-white">{eduItem.school}</h4>
							<h4 className="font-normal dark:font-light text-black dark:text-white">{eduItem.board}</h4>
						</section>
					</RiseUpWhenVisible>
				))}
			</section>
		</>
	);
};

export default EducationTimeline;
