import { RiseUpWhenVisible } from "../../components/anims";
import BulletPointer from "../../components/BulletPointer";
import { AboutMeContent, EducationContent, WorkXPContent } from "../../components/content";
import Cover from "../../components/Cover";
import EducationTimeline from "./EducationTimeline";

const Home = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* About Me */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">ABOUT ME</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<ul className="flex flex-col my-4 mx-4 gap-6 sm:gap-4">
						{AboutMeContent.map((item, index) => (
							<li key={index} className="text-justify">
								<RiseUpWhenVisible className="flex flex-row justify-start items-start">
									<BulletPointer className="mt-0.5 -ml-2 mr-2" />
									<div className="font-roboto">{item}</div>
								</RiseUpWhenVisible>
							</li>
						))}
					</ul>
				</section>
			</RiseUpWhenVisible>

			{/* Education */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8">
					<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">EDUCATION</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<EducationTimeline content={EducationContent} />
				</section>
			</RiseUpWhenVisible>

			{/* Jobs */}
			{/* <RiseUpWhenVisible>
				<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">JOB EXPERIENCE</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<WorkXPTimeline content={WorkXPContent} />
				</section>
			</RiseUpWhenVisible> */}
		</>
	);
};

export default Home;
