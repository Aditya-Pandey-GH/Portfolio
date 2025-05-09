import { RiseUpWhenVisible } from "../components/anims";
import { AboutMeContent } from "../components/content";
import Cover from "../components/Cover";

const Home = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* About Me */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-cyan-600 dark:text-yellow-400 text-[clamp(1.25rem,4.5dvw,2rem)]">ABOUT ME</h2>
					{/* <span className="font-iceberg text-blue-900 not-dark:font-semibold dark:text-sky-200 text-[clamp(0.75rem,2.25dvw,1.25rem)]">
							I'm Aditya Pandey 👋🏻
						</span> */}
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<ul className="flex flex-col my-4 mx-4 gap-3">
						{AboutMeContent.map((item, index) => (
							<li key={index} className="text-justify">
								<RiseUpWhenVisible>{">  " + item}</RiseUpWhenVisible>
							</li>
						))}
					</ul>
				</section>
			</RiseUpWhenVisible>
		</>
	);
};

export default Home;
