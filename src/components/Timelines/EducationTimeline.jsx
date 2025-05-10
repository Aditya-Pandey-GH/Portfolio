import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useMediaQuery, useTheme } from "@mui/material";
import { RiseUpWhenVisible } from "../anims";

const EducationTimeline = ({ content = [] }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for screen <600px

	return (
		<Timeline position={isMobile ? "right" : "alternate"} className="my-4 !p-0">
			{content.map((item) => (
				<TimelineItem
					key={item.id}
					className="*:content-none"
					sx={
						isMobile && {
							"&::before": {
								content: "none",
							},
						}
					}
				>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color="inherit" className="bg-white w-15 md:w-20 h-15 md:h-20 overflow-hidden !p-0 !my-4">
							<RiseUpWhenVisible>
								<img src={item.logo} alt="profile" className="w-full h-full object-cover p-2" />
							</RiseUpWhenVisible>
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<RiseUpWhenVisible>
							<div className="w-full flex flex-col bg-white dark:bg-neutral-700 p-4 rounded-2xl *:text-justify">
								<span className="font-roboto text-lg sm:text-xl font-bold text-cyan-600 dark:text-yellow-400">{item.name}</span>
								<span className="font-roboto text-xs font-bold mb-3 sm:mb-4 -mt-1">
									{item.start} – {item.end}
								</span>
								<span className="font-roboto text-sm sm:text-base">{item.school}</span>
								<span className="font-roboto text-sm sm:text-base">{item.location}</span>
								<span className="font-roboto text-sm sm:text-base">{item.board}</span>
							</div>
						</RiseUpWhenVisible>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default EducationTimeline;
