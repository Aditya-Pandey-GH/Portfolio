import { Link } from "react-router-dom";

const Cover = () => {
	return (
		<>
			{/* Cover Art & PFP */}
			<section className="relative w-full bg-linear-to-br from-neutral-200 via-neutral-300 to-neutral-400 rounded-none sm:rounded-2xl">
				<div className="w-full relative flex justify-between items-center sm:rounded-2xl overflow-hidden">
					{/* Props */}
					<img src="/cover/props.webp" alt="Props" className="max-w-40 sm:max-w-60" loading="lazy" />

					{/* Text */}
					<div className="xs:absolute xs:w-full xs:flex xs:justify-center xs:items-center">
						<div className="w-fit h-fit flex flex-col xs:flex-row xs:flex-1 xs:justify-center items-center xs:space-x-4 sm:space-x-8 lg:space-x-12 gap-y-4 xs:gap-y-0 pr-2 xs:pr-0">
							{/* Simply Realistic */}
							<div className="flex flex-col items-center -space-y-2 xs:space-y-0">
								<span className="font-rajdhani font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl text-black text-right xs:text-justify">
									ADITYA
								</span>
								<span className="font-rajdhani font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl text-black text-right xs:text-justify">
									PANDEY
								</span>
							</div>

							{/* Line Break and IDs */}
							<div className="flex flex-row xs:space-x-4 sm:space-x-8 lg:space-x-12">
								{/* Line Break */}
								<div className="w-1 hidden xs:flex items-stretch">
									<hr className="w-full border-0 bg-black h-full rounded-full" />
								</div>
								{/* <div className="w-1.5 h-3/4 bg-black hidden xs:flex items-stretch"></div> */}

								{/* IDs */}
								<div className="flex flex-col items-start xs:items-start -space-y-2 xs:gap-2 sm:gap-4 xs:py-2 sm:py-4">
									{/* Gmail */}
									<Link
										to="mailto:adityapandey1609@gmail.com"
										className="flex flex-row justify-center items-center space-x-1 xs:space-x-2 hover:scale-115 duration-300"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/Logos/gmail.svg"
											alt="Gmail"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">adityapandey1609</span>
										</div>
									</Link>
									{/* GitHub */}
									<Link
										to="https://github.com/Aditya-Pandey-GH"
										target="_blank"
										className="flex flex-row justify-center items-center space-x-1 xs:space-x-2 hover:scale-115 duration-300"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
											alt="GitHub"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">Aditya-Pandey-GH</span>
										</div>
									</Link>
									{/* LinkedIn */}
									<Link
										to="https://www.linkedin.com/in/aditya-pandey-in/"
										target="_blank"
										className="flex flex-row justify-center items-center space-x-1 xs:space-x-2 hover:scale-115 duration-300"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
											alt="LinkedIn"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">aditya-pandey-in</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-2xl overflow-hidden">
						<div className="w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 absolute -right-10 sm:-right-15 lg:-right-20 -bottom-10 sm:-bottom-15 lg:-bottom-20 bg-linear-to-br from-neutral-300 to-neutral-400 border-6 sm:border-8 lg:border-10 border-yellow-900 hidden xs:flex rotate-45"></div>
					</div>
				</div>

				{/* My Photo */}
				<div className="absolute -bottom-12 xs:-bottom-16 md:-bottom-20 lg:-bottom-25 left-4 sm:left-8 rounded-full hover:scale-105 duration-300">
					<div className="w-24 xs:w-32 md:w-40 lg:w-50 rounded-full overflow-hidden border-3 md:border-4 border-neutral-200 dark:border-neutral-900 transition-colors duration-300 bg-radial from-[#9ECBFF] to-[#034DA2] dark:from-[#FFEEB2] dark:to-[#FFC700] dark:to-75%">
						<img src="/cover/dp.webp" alt="Aditya Pandey" />
					</div>
				</div>
			</section>

			{/* Name & DOB */}
			<section className="pt-16 xs:pt-20 md:pt-26 lg:pt-32 mx-4 sm:mx-8">
				<div className="flex flex-col leading-5 sm:leading-7">
					<h1 className="font-khand font-bold text-light dark:text-dark text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl">ADITYA PANDEY</h1>
					<span className="text-sm sm:text-base lg:text-lg -mt-2 text-neutral-800 dark:text-neutral-300">September 16, 2003</span>
					<span className="text-base sm:text-lg lg:text-xl mt-2">Web Developer | Aspiring Game Developer</span>
				</div>
			</section>
		</>
	);
};

export default Cover;
