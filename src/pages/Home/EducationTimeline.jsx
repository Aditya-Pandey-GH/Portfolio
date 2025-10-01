import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useMediaQuery, useTheme } from "@mui/material";

import { RiseUpWhenVisible } from "../../components/anims";

const EducationTimeline = ({ content = [] }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Timeline position={isMobile ? "right" : "alternate"} className="my-12 !p-0">
			{content.map((item) => (
				<TimelineItem
					key={item.id}
					className="*:content-none -my-6"
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
						<TimelineDot color="inherit" className="w-5 h-5 overflow-hidden !p-0 !my-4" style={{ backgroundColor: item.settings.bg }} />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<RiseUpWhenVisible>
							<div className="font-roboto w-full flex flex-col bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl *:text-justify">
								<div className="flex flex-row items-center mb-3 sm:mb-4 gap-2 xs:gap-4">
									<div className="bg-white rounded-full p-2 not-dark:shadow-black/25 not-dark:shadow-[2px_5px_5px]">
										<img src={item.logo} alt={item.name} className="w-12 h-12 object-cover rounded-md" loading="lazy" />
									</div>
									<div className="flex flex-col">
										<span className="text-lg sm:text-xl font-bold text-light dark:text-dark">{item.name}</span>
										<span className="text-xs sm:text-sm font-bold -mt-1">
											{item.start} – {item.end}
										</span>
									</div>
								</div>
								<span className="text-sm sm:text-base">{item.school}</span>
								<span className="text-sm sm:text-base">{item.location}</span>
								<span className="text-sm sm:text-base">{item.board}</span>
							</div>
						</RiseUpWhenVisible>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default EducationTimeline;
