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
						{/* <TimelineDot color="inherit" className="bg-white w-15 md:w-20 h-15 md:h-20 overflow-hidden !p-0 !my-4">
							<RiseUpWhenVisible>
								<img src={item.logo} alt="profile" className="w-full h-full object-cover p-2" />
							</RiseUpWhenVisible>
						</TimelineDot> */}
						<TimelineDot
							color="inherit"
							// color={index % 3 === 0 ? "warning" : `${index % 3 === 1 ? "primary" : "success"}`}
							className="w-5 h-5 overflow-hidden !p-0 !my-4"
							style={{ backgroundColor: item.settings.bg }}
							// className="w-5 h-5 overflow-hidden !p-0 !my-4 !bg-light dark:!bg-dark"
							// className={`w-5 h-5 overflow-hidden !p-0 !my-4 ${
							// 	index % 3 === 0
							// 		? "!bg-purple-600 dark:!bg-purple-400"
							// 		: index % 3 === 1
							// 		? "!bg-emerald-600 dark:!bg-emerald-400"
							// 		: "!bg-red-600 dark:!bg-red-400"
							// }`}
							// className="w-5 h-5 overflow-hidden !p-0 !my-4"
						/>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<RiseUpWhenVisible>
							<div className="w-full flex flex-col bg-neutral-100 dark:bg-neutral-700 p-4 rounded-2xl *:text-justify">
								<div className="flex flex-row items-center mb-3 sm:mb-4 gap-2 xs:gap-4">
									<div className="bg-white rounded-full p-2 not-dark:shadow-black/25 not-dark:shadow-[2px_5px_5px]">
										<img src={item.logo} alt="profile" className="w-12 h-12 object-cover rounded-md" />
									</div>
									<div className="flex flex-col">
										<span className="font-roboto text-lg sm:text-xl font-bold text-light dark:text-dark">{item.name}</span>
										<span className="font-roboto text-xs font-bold -mt-1">
											{item.start} – {item.end}
										</span>
									</div>
								</div>
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
