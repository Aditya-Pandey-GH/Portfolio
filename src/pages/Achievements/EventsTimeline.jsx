import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import { useTheme } from "@mui/material";

import { RiseUpWhenVisible } from "../../components/anims";

const EventsTimeline = ({ content = {} }) => {
	// const theme = useTheme();
	// const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for screen <600px

	return (
		<Timeline position="right" className="!p-0">
			<TimelineItem
				className="*:content-none"
				sx={{
					"&::before": {
						content: "none",
					},
				}}
			>
				<TimelineSeparator>
					{/* <TimelineConnector /> */}
					<TimelineDot
						color="inherit"
						className="w-5 h-5 overflow-hidden !p-0 !my-4 !border-4 bg-light dark:bg-dark !border-white dark:!border-neutral-700"
					/>

					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<RiseUpWhenVisible className="flex flex-col space-y-2">
						<div className="font-roboto relative -top-2 flex flex-col xs:flex-row items-center mt-4 gap-2 sm:gap-4">
							<img src={content.logo} alt={content.id} className="w-20 h-fit rounded-lg" loading="lazy" />
							<div className="flex flex-col text-justify justify-center">
								<span className="font-bold max-xs:text-center text-lg xs:text-xl md:text-2xl text-light dark:text-dark">
									{content.name}
								</span>
								<span className="max-xs:text-center text-sm xs:text-base">{content.year}</span>
								<span className="max-xs:text-center text-base xs:text-lg">{content.location}</span>
							</div>
						</div>
						<div className="font-roboto text-base sm:text-lg mb-4">{content.desc}</div>
					</RiseUpWhenVisible>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default EventsTimeline;
