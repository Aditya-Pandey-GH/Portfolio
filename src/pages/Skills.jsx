import { RiseUpWhenVisible } from "../components/Anims";
import { DBsContent, LangsContent, TechsContent, ToolsContent } from "../components/content";
import Cover from "../components/Cover";

const Skills = () => {
	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Languages */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-cyan-600 dark:text-yellow-400 text-[clamp(1.25rem,4.5dvw,2rem)]">LANGUAGES</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-row flex-wrap justify-start my-4 mx-4 gap-5 sm:gap-10">
						{LangsContent.map((item, index) => (
							<div key={index} className="flex flex-col justify-center items-center text-center">
								<RiseUpWhenVisible>
									<img src={item.icon} alt={item.id} className="w-[clamp(2rem,8dvw,4rem)]" />
								</RiseUpWhenVisible>
								<RiseUpWhenVisible>
									<span className="text-center">{item.name}</span>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>
			</RiseUpWhenVisible>

			{/* DataBases */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-cyan-600 dark:text-yellow-400 text-[clamp(1.25rem,4.5dvw,2rem)]">DATABASES</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-row flex-wrap justify-start my-4 mx-4 gap-5 sm:gap-10">
						{DBsContent.map((item, index) => (
							<div key={index} className="flex flex-col justify-center items-center text-center">
								<RiseUpWhenVisible>
									<img src={item.icon} alt={item.id} className="w-[clamp(2rem,8dvw,4rem)]" />
								</RiseUpWhenVisible>
								<RiseUpWhenVisible>
									<span className="text-center">{item.name}</span>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>
			</RiseUpWhenVisible>

			{/* Technologies & Frameworks */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-cyan-600 dark:text-yellow-400 text-[clamp(1.25rem,4.5dvw,2rem)]">
						TECHNOLOGIES & FRAMEWORKS
					</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-row flex-wrap justify-start my-4 mx-4 gap-5 sm:gap-10">
						{TechsContent.map((item, index) => (
							<div key={index} className="flex flex-col justify-center items-center text-center">
								<RiseUpWhenVisible>
									<img src={item.icon} alt={item.id} className="w-[clamp(2rem,8dvw,4rem)]" />
								</RiseUpWhenVisible>
								<RiseUpWhenVisible>
									<span className="text-center">{item.name}</span>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>
			</RiseUpWhenVisible>

			{/* Tools */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8 leading-5 sm:leading-7">
					<h2 className="font-khand font-bold text-cyan-600 dark:text-yellow-400 text-[clamp(1.25rem,4.5dvw,2rem)]">TOOLS</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-row flex-wrap justify-start my-4 mx-4 gap-5 sm:gap-10">
						{ToolsContent.map((item, index) => (
							<div key={index} className="flex flex-col justify-center items-center text-center">
								<RiseUpWhenVisible>
									<img src={item.icon} alt={item.id} className="w-[clamp(2rem,8dvw,4rem)]" />
								</RiseUpWhenVisible>
								<RiseUpWhenVisible>
									<span className="text-center">{item.name}</span>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>
			</RiseUpWhenVisible>
		</>
	);
};

export default Skills;
