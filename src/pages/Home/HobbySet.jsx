import { RiseUpWhenVisible } from "../../components/anims";

const HobbySet = ({ heading, content }) => {
	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mt-4 sm:mt-8 mx-4 sm:mx-8">
				<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">{heading}</h2>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="flex flex-row flex-wrap justify-start m-4 gap-4 sm:gap-8">
					{content.map((item, index) => (
						<RiseUpWhenVisible
							key={index}
							className="flex flex-col justify-center items-center text-center m-2 hover:scale-110 duration-200"
						>
							<img src={item.icon} alt={item.id} className="w-8 xs:w-12 md:w-16" loading="lazy" />
							<span className="text-center text-sm sm:text-base lg:text-lg sm:p-2">{item.title}</span>
						</RiseUpWhenVisible>
					))}
				</div>
			</section>
		</RiseUpWhenVisible>
	);
};

export default HobbySet;
