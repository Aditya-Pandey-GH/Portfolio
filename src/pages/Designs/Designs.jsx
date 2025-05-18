import { useState } from "react";
import { Link } from "react-router-dom";

import Cover from "../../components/Cover";
import YouTubeLoader from "./YouTubeLoader";
import SeeMore from "../../components/SeeMore";
import { RiseUpWhenVisible } from "../../components/anims";
import { NewslettersContent, OtherDesignsContent, PostersContent, ThumbsContent } from "../../components/content";

const Designs = () => {
	const [viewPosters, setViewPosters] = useState(false);
	const [viewThumbs, setViewThumbs] = useState(false);
	const [viewNewsletters, setViewNewsletters] = useState(false);
	const [viewOthers, setViewOthers] = useState(false);

	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Newsletters */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">NEWSLETTERS</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewNewsletters(!viewNewsletters)}
						>
							{!viewNewsletters ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 my-8 mx-4 gap-8 lg:gap-12">
						{(viewNewsletters ? NewslettersContent : NewslettersContent.slice(0, 3)).map((item) => (
							<RiseUpWhenVisible key={item.id} className="flex flex-col items-center">
								<Link to={item.link} target="_blank" className="w-fit flex justify-center">
									<img
										src={item.logo}
										alt={item.id}
										className="max-md:w-5/6 rounded-2xl shadow-black/50 not-dark:shadow-lg"
										loading="lazy"
									/>
								</Link>
								<Link to={item.link} target="_blank" className="w-fit gap-4 p-4 text-center">
									<span className="text-sm sm:text-base lg:text-lg">{item.title}</span>
								</Link>
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewNewsletters} setExpanded={setViewNewsletters} />
			</RiseUpWhenVisible>

			{/* Posters */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">POSTERS</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewPosters(!viewPosters)}
						>
							{!viewPosters ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="columns-1 xs:columns-2 md:columns-3 mx-4 my-8 gap-8">
						{(viewPosters ? PostersContent : PostersContent.slice(0, 3)).map((item, index) => (
							<Link key={index} to={item.poster} target="_blank" className="w-fit flex items-center gap-4 mb-8">
								<RiseUpWhenVisible className="flex flex-col items-center">
									<img
										src={item.poster}
										alt={index}
										className="max-md:w-5/6 rounded-2xl shadow-black/50 not-dark:shadow-xl"
										loading="lazy"
									/>
								</RiseUpWhenVisible>
							</Link>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewPosters} setExpanded={setViewPosters} />
			</RiseUpWhenVisible>

			{/* Thumbnails */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">THUMBNAILS</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewThumbs(!viewThumbs)}
						>
							{!viewThumbs ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 my-8 mx-4 gap-8 lg:gap-12">
						{(viewThumbs ? ThumbsContent : ThumbsContent.slice(0, 3)).map((item, index) => (
							<RiseUpWhenVisible key={index} className="flex flex-col items-center">
								<YouTubeLoader videoId={item} />
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewThumbs} setExpanded={setViewThumbs} />
			</RiseUpWhenVisible>

			{/* Other Designs */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center mb-8">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">OTHER DESIGNS</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewOthers(!viewOthers)}
						>
							{!viewOthers ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					{/* <h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">OTHER DESIGNS</h2> */}
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="columns-1 xs:columns-2 lg:columns-3 mx-4 my-8 gap-8">
						{(viewOthers ? OtherDesignsContent : OtherDesignsContent.slice(0, 3)).map((item, index) => (
							<Link key={index} to={item.logo} target="_blank" className="w-fit flex items-center gap-4 mb-8">
								<RiseUpWhenVisible className="flex flex-col items-center">
									<img
										src={item.logo}
										alt={index}
										className="max-xs:w-5/6 rounded-2xl shadow-black/50 not-dark:shadow-xl"
										loading="lazy"
									/>
								</RiseUpWhenVisible>
							</Link>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewOthers} setExpanded={setViewOthers} />
			</RiseUpWhenVisible>
		</>
	);
};

export default Designs;
