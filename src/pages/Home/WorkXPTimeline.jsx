import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useMediaQuery, useTheme } from "@mui/material";

import { RiseUpWhenVisible } from "../../components/anims";

const WorkXPTimeline = ({ content = [] }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for screen <600px

	return (
		<Timeline position={isMobile ? "right" : "alternate-reverse"} className="my-4 !p-0">
			{content.map((item, index) => (
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
						<TimelineDot
							// color={index % 3 === 0 ? "warning" : `${index % 3 === 1 ? "primary" : "success"}`}
							className={`w-5 h-5 overflow-hidden !p-0 !my-4 ${
								index % 3 === 0
									? "!bg-purple-600 dark:!bg-purple-400"
									: index % 3 === 1
									? "!bg-emerald-600 dark:!bg-emerald-400"
									: "!bg-red-600 dark:!bg-red-400"
							}`}
							// className="w-5 h-5 overflow-hidden !p-0 !my-4"
						>
							<RiseUpWhenVisible>
								<img src={item.logo} alt="profile" className="w-full h-full object-cover p-2" />
							</RiseUpWhenVisible>
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="w-full">
						<RiseUpWhenVisible>
							<div className="w-full flex flex-col bg-white dark:bg-neutral-700 p-4 rounded-2xl *:text-justify">
								<span className="font-roboto text-xl sm:text-2xl font-bold !tracking-normal text-light dark:text-yellow-400">
									{item.role}
								</span>
								<span className="font-roboto text-sm sm:text-base font-bold italic">{`${item.company}, ${item.branch}`}</span>
								<span className="font-roboto text-sm sm:text-base">
									{item.start} – {item.end}
								</span>
								{/* <span className="font-roboto text-sm sm:text-base mt-4">{item.desc}</span> */}
								<div className="flex flex-row flex-wrap gap-x-4 gap-y-2 mt-4">
									{item.techs.map((tech, index) => (
										<span
											key={index}
											className="font-roboto dark:font-semibold text-sm sm:text-base rounded py-1 px-4 bg-neutral-700 text-white dark:bg-white dark:text-neutral-700"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</RiseUpWhenVisible>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default WorkXPTimeline;
