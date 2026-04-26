import { RiseUpWhenVisible } from "../../components/anims";

const SkillSubSet = ({ heading, content }) => {
	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mx-4 sm:mx-8 leading-5 sm:leading-7">
				<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">{heading}</h2>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="flex flex-col md:grid-cols-2 justify-start m-0 sm:m-4">
					{content.map((tools) => (
						<RiseUpWhenVisible key={tools.id}>
							<div className="w-full p-2">
								{/* Title of the Tools */}
								<div className="w-fit">
									<span className="font-semibold text-light dark:text-dark text-center text-base xs:text-lg md:text-xl">
										{tools.title}
									</span>
									<hr className="w-full border border-light dark:border-dark -mt-1" />
								</div>
								<div className="flex flex-row flex-wrap gap-5 sm:gap-10 mt-4">
									{tools.tools.map((tool) => {
										return (
											<RiseUpWhenVisible
												key={tool.id}
												className="flex flex-col justify-center items-center hover:scale-110 duration-200"
											>
												<img src={tool.icon} alt={tool.id} className="w-8 xs:w-12 md:w-16" loading="lazy" />
												<span className="text-center text-sm sm:text-base lg:text-lg sm:p-2">{tool.name}</span>
											</RiseUpWhenVisible>
										);
									})}
								</div>
							</div>
						</RiseUpWhenVisible>
					))}
				</div>
			</section>
		</RiseUpWhenVisible>
	);
};

export default SkillSubSet;
