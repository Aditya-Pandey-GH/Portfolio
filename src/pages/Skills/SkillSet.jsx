import { RiseUpWhenVisible } from "../../components/anims";

const SkillSet = ({ heading, content }) => {
	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
				<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">{heading}</h2>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="flex flex-row flex-wrap justify-start my-4 mx-4 gap-5 sm:gap-10">
					{content.map((item) => (
						<div key={item.id} className="flex flex-col justify-center items-center text-center">
							<RiseUpWhenVisible>
								<img src={item.icon} alt={item.id} className="w-[clamp(2rem,8dvw,4rem)]" loading="lazy" />
							</RiseUpWhenVisible>
							<RiseUpWhenVisible>
								<span className="text-center text-[clamp(0.9rem,2dvw,1rem)]">{item.name}</span>
							</RiseUpWhenVisible>
						</div>
					))}
				</div>
			</section>
		</RiseUpWhenVisible>
	);
};

export default SkillSet;
