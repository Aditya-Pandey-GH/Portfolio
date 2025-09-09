// import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaCircleChevronDown } from "react-icons/fa6";

import { RiseUpWhenVisible } from "../../components/anims";

const ProjectSection = ({ heading, route, content }) => {
	// const [projects, setProjects] = useState(content);

	return (
		<RiseUpWhenVisible>
			<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8 ">
				<div className="flex flex-row justify-between items-center">
					{!route && (
						<Link
							to={`/projects`}
							className="hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							title="Go Back to Projects Page"
						>
							<FaCircleChevronDown className="text-light dark:text-dark text-lg xs:text-xl md:text-2xl rotate-90 transition-all duration-300 ease-in-out" />
						</Link>
					)}
					<h2 className="flex-1 font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">{heading}</h2>
					{content.length > 3 && route && (
						<Link
							to={`/projects/${route}`}
							className="hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							title={`Show all ${heading.toLowerCase()}`}
						>
							<FaCircleChevronDown className="text-light dark:text-dark text-lg xs:text-xl md:text-2xl -rotate-90 transition-all duration-300 ease-in-out" />
						</Link>
					)}
				</div>
				<div className="flex justify-center">
					<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-4 gap-x-4 gap-y-8">
					{(content.length > 3 && route ? content.slice(0, 3) : content).map((item) => {
						return <DisplayContent key={item.id} item={item} />;
					})}
				</div>
			</section>
		</RiseUpWhenVisible>
	);
};

const DisplayContent = ({ item }) => {
	return (
		<RiseUpWhenVisible key={item.id} className="flex justify-center">
			<div className="w-full xs:w-3/4 md:w-full h-full flex flex-col rounded-lg overflow-hidden border-2 not-dark:shadow-2xl">
				<div className="relative">
					<img src={item.thumb} alt={item.id} className="w-full" loading="lazy" />
					<img
						src={item.icon}
						alt={item.id}
						className="w-20 xs:w-28 rounded-full absolute -bottom-10 xs:-bottom-14 left-2 md:left-4 border-2 border-black"
						loading="lazy"
					/>
					<div className="absolute -bottom-12 right-2 flex flex-row gap-2">
						{item.links.github && (
							<Link
								to={item.links.github}
								target="_blank"
								className="bg-white rounded border border-black drop-shadow-black/50 drop-shadow-md hover:scale-110 duration-200"
								title="Source Code"
							>
								<FaGithub className="text-3xl text-black p-1" />
							</Link>
						)}
						{item.links.live && (
							<Link
								to={item.links.live}
								target="_blank"
								className="bg-white rounded border border-black drop-shadow-black/50 drop-shadow-md hover:scale-110 duration-200"
								title="Project Demo"
							>
								<FaLink className="text-3xl text-green-700 p-1" />
							</Link>
						)}
					</div>
				</div>
				<div className="flex flex-col p-4 mt-8 xs:mt-12">
					<div className="w-fit mb-4">
						<span className="text-sm xs:text-base text-light dark:text-dark font-bold mb-2">{item.name}</span>
						<hr className="w-full text-light dark:text-dark -mt-1" />
					</div>
					<span className="text-sm xs:text-base text-justify">{item.desc}</span>
					<div className="my-2">
						<h3 className="text-sm xs:text-base font-bold">Tech Stack:</h3>
						<div className="flex flex-row flex-wrap gap-2">
							{item.techs.map((tech, index) => {
								return (
									<span
										key={index}
										className="text-sm xs:text-base px-2 py-1 bg-neutral-400/50 dark:bg-neutral-500/50 rounded hover:scale-110 duration-200"
									>
										{tech}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</RiseUpWhenVisible>
	);
};

export default ProjectSection;
