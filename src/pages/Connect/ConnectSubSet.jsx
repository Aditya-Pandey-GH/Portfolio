import { Link } from "react-router-dom";

import { RiseUpWhenVisible } from "../../components/anims";

const SkillSubSet = ({ heading, content }) => {
	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8">
				<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">{heading}</h2>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="flex flex-col justify-start m-0 sm:m-4 p-4 sm:p-2 gap-4 sm:gap-8">
					{content.map((tools) => (
						<RiseUpWhenVisible key={tools.id}>
							<div className="w-full text-light dark:text-dark not-dark:font-semibold \rounded-lg">
								{/* Title of the Tools */}
								<div className="w-fit">
									<span className="font-iceberg text-center text-[clamp(1rem,1dvw,2rem)]">{tools.title}</span>
									<hr className="w-full border border-light dark:border-dark" />
								</div>
								<div className="w-fit flex flex-row flex-wrap gap-5 sm:gap-10 mt-4">
									{tools.tools.map((tool) => {
										return (
											<RiseUpWhenVisible key={tool.id}>
												<Link to={tool.account} target="_blank" className="w-fit flex flex-col justify-center items-center">
													<span className="">{tool.icon}</span>
													{/* <img src={tool.icon} alt={tool.id} className="w-[clamp(2rem,8dvw,4rem)] p-1" /> */}
													<span className="text-center text-black dark:text-white text-[clamp(0.9rem,2dvw,1rem)]">
														{tool.name}
													</span>
												</Link>
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
