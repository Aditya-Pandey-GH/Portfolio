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
							// className={`w-5 h-5 overflow-hidden !p-0 !my-4 ${
							// 	index % 3 === 0
							// 		? "!bg-purple-600 dark:!bg-purple-400"
							// 		: index % 3 === 1
							// 		? "!bg-emerald-600 dark:!bg-emerald-400"
							// 		: "!bg-red-600 dark:!bg-red-400"
							// }`}
							className="w-5 h-5 overflow-hidden !p-0 !my-4"
							style={{ backgroundColor: item.settings.bg }}
						>
							<RiseUpWhenVisible>
								<img src={item.logo} alt="profile" className="w-full h-full object-cover p-2" />
							</RiseUpWhenVisible>
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent className="w-full">
						<RiseUpWhenVisible>
							<div className="w-full flex flex-col bg-white dark:bg-neutral-700 p-4 rounded-2xl *:text-justify *:font-roboto">
								<div className="flex flex-row items-center mb-3 sm:mb-4 gap-2 xs:gap-4">
									<div className="bg-white rounded-full p-2 not-dark:shadow-black/25 not-dark:shadow-[2px_5px_5px]">
										<img src={item.logo} alt={item.name} className="w-12 h-12 object-cover rounded-md" loading="lazy" />
									</div>
									<div className="flex flex-col">
										<span className=" text-xl sm:text-2xl font-bold !tracking-normal text-light dark:text-yellow-400">
											{item.role}
										</span>
										<span className=" text-sm sm:text-base font-bold italic">{`${item.company}, ${item.branch}`}</span>
										<span className=" text-sm sm:text-base">
											{item.start} – {item.end}
										</span>
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-base sm:text-lg font-semibold">Tech Stacks Used:</span>
									<div className="flex flex-row flex-wrap gap-3">
										{item.techs.map((tech, index) => (
											<span
												key={index}
												className=" dark:font-semibold text-sm sm:text-base rounded py-1 px-4 bg-neutral-700 text-white dark:bg-white dark:text-neutral-700"
											>
												{tech}
											</span>
										))}
									</div>
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
