import { RiseUpWhenVisible } from "../../components/anims";
import Cover from "../../components/Cover";
// import BulletPointer from "../../components/BulletPointer";
import { BigEventsContent, CertsContent, SocialWelfareContent, XPContent } from "../../components/content";
import { useState } from "react";
import { Link } from "react-router-dom";
import XPTimeline from "./XPTimeline";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

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
					<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">SOCIAL WELFARE</h2>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<ul className="flex flex-col my-4 mx-4 gap-6 sm:gap-4 max-md:leading-normal">
						{SocialWelfareContent.map((item, index) => (
							<li key={index} className="text-justify">
								<RiseUpWhenVisible className="flex flex-row justify-start items-start gap-4">
									{/* <BulletPointer className="mt-0.5 -ml-2 mr-2" /> */}
									{/* <div className="font-roboto">
										<span className="font-roboto font-black">{item.year}: </span>
										<span className="font-roboto">{item.desc}</span>
									</div> */}
									<span className="font-roboto font-black text-[clamp(1rem,2dvw,1.125rem)] text-light dark:text-dark">
										{item.year}
									</span>
									<span className="font-roboto">{item.desc}</span>
								</RiseUpWhenVisible>
								{/* <RiseUpWhenVisible className="font-roboto float-right">{"~  " + item.year}</RiseUpWhenVisible> */}
							</li>
						))}
					</ul>
				</section>
			</RiseUpWhenVisible>

			{/* Informal Experience */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">INFORMAL EXPERIENCE</h2>
						<button
							className="font-roboto !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewXP(!viewXP)}
						>
							{!viewXP ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button>
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-4 mx-4 gap-5 sm:gap-10 leading-normal">
						{(viewXP ? XPContent : XPContent.slice(0, 1)).map((item) => (
							<RiseUpWhenVisible key={item.id} className="flex flex-col gap-0 md:gap-4">
								<div className="flex flex-row flex-wrap gap-2">
									<img src={item.logo} alt={item.company} className="w-20 rounded-lg" />
									<div className="flex flex-col font-roboto text-justify justify-center">
										<span className="font-bold text-[clamp(1.15rem,2dvw,1.4rem)] text-light dark:text-dark">{item.company}</span>
										<span className="text-[clamp(0.9rem,2dvw,1rem)]">
											{item.start} - {item.end}
										</span>
										<span className="text-[clamp(1rem,2dvw,1.1rem)]">{item.location}</span>
									</div>
								</div>
								<XPTimeline content={item.roles} />
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<button
					className="font-roboto !tracking-widest cursor-pointer text-[clamp(0.75rem,3dvw,1rem)] px-4"
					onClick={() => setViewXP(!viewXP)}
				>
					<div className="flex flex-row justify-center items-center gap-4 w-full h-full px-6 py-3 rounded-2xl border border-light dark:border-dark hover:bg-light dark:hover:bg-dark group transition-color duration-300 ease-in-out">
						{!viewXP ? (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See More
								</span>
								<FaAngleDoubleDown className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						) : (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See Less
								</span>
								<FaAngleDoubleUp className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						)}
					</div>
				</button>
			</RiseUpWhenVisible>

			{/* Big Events */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">BIG EVENTS</h2>
						<button
							className="font-roboto !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewBigEvents(!viewBigEvents)}
						>
							{!viewBigEvents ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button>
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-8 mx-4 gap-4 sm:gap-8 leading-normal">
						{(viewBigEvents ? BigEventsContent : BigEventsContent.slice(0, 3)).map((item, index) => (
							<RiseUpWhenVisible key={item.id} className="flex flex-col gap-4">
								{index !== 0 && (
									<hr className="w-full relative -top-2 border rounded-full text-neutral-500/25 dark:text-neutral-300/25" />
								)}
								<div className="flex flex-col xs:flex-row items-center flex-wrap gap-2 sm:gap-4">
									<img src={item.logo} alt={item.id} className="w-20 h-fit rounded-lg" />
									<div className="flex flex-col font-roboto text-justify justify-center">
										<span className="font-bold max-xs:text-center text-[clamp(1.15rem,2dvw,1.4rem)] text-light dark:text-dark">
											{item.name}
										</span>
										<span className="max-xs:text-center text-[clamp(1rem,2dvw,1.1rem)]">{item.year}</span>
										<span className="font-bold max-xs:text-center text-[clamp(0.9rem,2dvw,1rem)]">
											{item.location.toUpperCase()}
										</span>
									</div>
								</div>
								<div className="text-[clamp(1rem,2dvw,1.1rem)]">{item.desc}</div>
							</RiseUpWhenVisible>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<button
					className="font-roboto !tracking-widest cursor-pointer text-[clamp(0.75rem,3dvw,1rem)] px-4"
					onClick={() => setViewBigEvents(!viewBigEvents)}
				>
					<div className="flex flex-row justify-center items-center gap-4 w-full h-full px-6 py-3 rounded-2xl border border-light dark:border-dark hover:bg-light dark:hover:bg-dark group transition-color duration-300 ease-in-out">
						{!viewBigEvents ? (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See More
								</span>
								<FaAngleDoubleDown className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						) : (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See Less
								</span>
								<FaAngleDoubleUp className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						)}
					</div>
				</button>
			</RiseUpWhenVisible>

			{/* Certificates */}
			<RiseUpWhenVisible className="flex flex-col justify-center items-center mb-8">
				<section className="flex flex-col mt-8 sm:mt-12 mx-4 sm:mx-8">
					<div className="flex flex-row justify-between">
						<h2 className="font-khand font-bold text-light dark:text-dark text-[clamp(1.25rem,4.5dvw,2rem)]">CERTIFICATES</h2>
						<button
							className="font-roboto !tracking-widest cursor-pointer text-black dark:text-white text-[clamp(0.75rem,3dvw,1rem)] hover:opacity-50 transition-opacity duration-300 ease-in-out px-4"
							onClick={() => setViewCerts(!viewCerts)}
						>
							{!viewCerts ? (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-0 transition-all duration-300 ease-in-out" />
							) : (
								<FaCircleChevronDown className="text-light dark:text-dark text-[clamp(1.5rem,4dvw,2rem)] rotate-180 transition-all duration-300 ease-in-out" />
							)}
						</button>
					</div>
					<div className="flex justify-center">
						<hr className="w-full border rounded-full text-neutral-500/50 dark:text-neutral-300/50" />
					</div>
					<div className="flex flex-col justify-start my-4 mx-4 gap-5 sm:gap-10 leading-normal">
						{/* <div className="flex flex-col justify-start my-4 mx-4 gap-5 sm:gap-10"> */}
						{(viewCerts ? CertsContent : CertsContent.slice(0, 1)).map((item) => (
							<div key={item.id} className="flex flex-col md:flex-row max-md:items-center gap-0 md:gap-4">
								<RiseUpWhenVisible className="">
									<Link to={item.cert} target="_blank" className="w-60 flex">
										<img src={item.cert} alt={item.id} className="w-60 rounded-2xl" />
									</Link>
								</RiseUpWhenVisible>
								<RiseUpWhenVisible className="">
									<div className="flex flex-col *:font-roboto text-justify">
										<h3 className="text-center md:text-justify font-bold text-[clamp(1.25rem,2dvw,1.35rem)] text-light dark:text-dark py-2">
											{item.title}
										</h3>
										<span className="text-[clamp(1rem,2dvw,1.1rem)]">{item.desc}</span>
										<span className="text-[clamp(1rem,2dvw,1rem)]">By: {item.by}</span>
										<span className="text-[clamp(1rem,2dvw,1rem)]">On: {item.on}</span>
									</div>
								</RiseUpWhenVisible>
							</div>
						))}
					</div>
				</section>

				{/* See More/Less */}
				<button
					className="font-roboto !tracking-widest cursor-pointer text-[clamp(0.75rem,3dvw,1rem)] px-4"
					onClick={() => setViewCerts(!viewCerts)}
				>
					<div className="flex flex-row justify-center items-center gap-4 w-full h-full px-6 py-3 rounded-2xl border border-light dark:border-dark hover:bg-light dark:hover:bg-dark group transition-color duration-300 ease-in-out">
						{!viewCerts ? (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See More
								</span>
								<FaAngleDoubleDown className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						) : (
							<>
								<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
									See Less
								</span>
								<FaAngleDoubleUp className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
							</>
						)}
					</div>
				</button>
			</RiseUpWhenVisible>
		</>
	);
};

export default Achievements;
