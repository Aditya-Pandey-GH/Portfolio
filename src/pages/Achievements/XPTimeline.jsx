import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import { useTheme } from "@mui/material";

import { RiseUpWhenVisible } from "../../components/anims";

const XPTimeline = ({ content = [] }) => {
	// const theme = useTheme();
	// const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for screen <600px

	return (
		<Timeline position="right" className="my-4 !p-0">
			{content.map((item, index) => (
				// {content.map((item, index) => (
				<TimelineItem
					key={index}
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
						<RiseUpWhenVisible>
							<div className="relative -top-2 w-full flex flex-col p-4 rounded-2xl *:text-justify">
								<div className="font-roboto flex flex-col">
									<span className="text-lg sm:text-xl font-bold text-light dark:text-dark">{item.role}</span>
									<span className="font-roboto">{item.desc}</span>
								</div>
							</div>
						</RiseUpWhenVisible>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default XPTimeline;
