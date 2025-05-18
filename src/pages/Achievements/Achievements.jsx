import { useState } from "react";
import { Link } from "react-router-dom";

import Cover from "../../components/Cover";
import XPTimeline from "./XPTimeline";
import SeeMore from "../../components/SeeMore";
import { RiseUpWhenVisible } from "../../components/anims";
import { BigEventsContent, CertsContent, SocialWelfareContent, XPContent } from "../../components/content";

const Achievements = () => {
	const [viewCerts, setViewCerts] = useState(false);
	const [viewXP, setViewXP] = useState(false);
	const [viewBigEvents, setViewBigEvents] = useState(false);

	return (
		<>
			{/* Cover Art and Intro */}
			<Cover />

			{/* Social Welfare */}
			<RiseUpWhenVisible>
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">SOCIAL WELFARE</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<ul className="flex flex-col my-4 mx-4 gap-6 sm:gap-4 max-md:leading-normal">
						{SocialWelfareContent.map((item, index) => (
							<li key={index} className="text-justify">
								<RiseUpWhenVisible className="flex flex-row justify-start items-start gap-4 lg:gap-8">
									<span className="text-base sm:text-lg flex-0 text-light dark:text-dark font-black">{item.year}</span>
									<span className="text-base sm:text-lg flex-1">{item.desc}</span>
								</RiseUpWhenVisible>
							</li>
						))}
					</ul>
				</section>
			</RiseUpWhenVisible>

			{/* Informal Experience */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">INFORMAL EXPERIENCE</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewXP(!viewXP)}
						>
							{!viewXP ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-4 mx-4 gap-5 sm:gap-10 leading-normal">
						{(viewXP ? XPContent : XPContent.slice(0, 1)).map((item) => (
							<RiseUpWhenVisible key={item.id} className="flex flex-col gap-0 md:gap-4">
								<div className="flex flex-row flex-wrap gap-2 sm:gap-4">
									<img src={item.logo} alt={item.company} className="w-20 rounded-lg" loading="lazy" />
									<div className="flex flex-col text-justify justify-center">
										<span className="font-bold text-lg xs:text-xl md:text-2xl text-light dark:text-dark">{item.company}</span>
										<span className="text-sm xs:text-base">
											{item.start} - {item.end}
										</span>
										<span className="text-base xs:text-lg">{item.location}</span>
									</div>
								</div>
								<XPTimeline content={item.roles} />
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewXP} setExpanded={setViewXP} />
			</RiseUpWhenVisible>

			{/* Big Events */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">BIG EVENTS</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewBigEvents(!viewBigEvents)}
						>
							{!viewBigEvents ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-8 mx-4 gap-4 sm:gap-8">
						{(viewBigEvents ? BigEventsContent : BigEventsContent.slice(0, 3)).map((item, index) => (
							<RiseUpWhenVisible key={item.id} className="flex flex-col gap-4">
								{index !== 0 && (
									<hr className="w-full relative -top-2 border rounded-full text-neutral-500/25 dark:text-neutral-300/25" />
								)}
								<div className="flex flex-col xs:flex-row items-center flex-wrap gap-2 sm:gap-4">
									<img src={item.logo} alt={item.id} className="w-20 h-fit rounded-lg" loading="lazy" />
									<div className="flex flex-col text-justify justify-center">
										<span className="font-bold max-xs:text-center text-lg xs:text-xl md:text-2xl text-light dark:text-dark">
											{item.name}
										</span>
										<span className="max-xs:text-center text-sm xs:text-base">{item.year}</span>
										<span className="max-xs:text-center text-base xs:text-lg">{item.location}</span>
									</div>
								</div>
								<div className="text-base sm:text-lg">{item.desc}</div>
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewBigEvents} setExpanded={setViewBigEvents} />
			</RiseUpWhenVisible>

			{/* Certificates */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center mb-8">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-xl xs:text-2xl md:text-3xl">CERTIFICATES</h2>
						{/* <button
							className=" !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewCerts(!viewCerts)}
						>
							{!viewCerts ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button> */}
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-4 mx-4 gap-8 leading-normal">
						{/* <div className="flex flex-col justify-start my-4 mx-4 gap-5 sm:gap-10"> */}
						{(viewCerts ? CertsContent : CertsContent.slice(0, 1)).map((item) => (
							<div key={item.id} className="flex flex-col md:flex-row max-md:items-center gap-2 md:gap-4">
								<RiseUpWhenVisible className="">
									<Link to={item.cert} target="_blank" className="w-60 flex">
										<img src={item.cert} alt={item.id} className="w-60 rounded-2xl" loading="lazy" />
									</Link>
								</RiseUpWhenVisible>
								<RiseUpWhenVisible className="">
									<div className="flex flex-col gap-2 md:gap-4 *: text-justify">
										<h3 className="text-center md:text-justify font-bold text-lg xs:text-xl md:text-2xl text-light dark:text-dark">
											{item.title}
										</h3>
										<span className="text-base sm:text-lg">{item.desc}</span>
										<div className="flex flex-col">
											<span className="text-sm sm:text-base">By: {item.by}</span>
											<span className="text-sm sm:text-base">On: {item.on}</span>
										</div>
									</div>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<SeeMore expanded={viewCerts} setExpanded={setViewCerts} />
			</RiseUpWhenVisible>
		</>
	);
};

export default Achievements;
