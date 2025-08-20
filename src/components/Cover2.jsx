import { Link } from "react-router-dom";
// import { FadeInWhenVisible, RiseUpWhenVisible } from "./anims";

// import { MdAlternateEmail } from "react-icons/md";
// import { FaGithub, FaLinkedinIn, FaCalendarAlt } from "react-icons/fa";

const Cover = () => {
	return (
		<>
			{/* Cover Art & PFP */}
			<section className="relative w-full bg-linear-to-br dark:from-[#DFDFDF] to-[#C6C6C6] rounded-none sm:rounded-lg">
				{/* <section className="relative w-full bg-linear-to-r from-[#DFDFDF] to-[#E0E0E0] rounded-none sm:rounded-lg"> */}
				{/* <section className="relative w-full flex bg-linear-to-r from-[#DFDFDF] to-[#D9DADE] rounded-none sm:rounded-lg"> */}
				{/* <section className="relative w-full flex bg-linear-to-r from-[#1571E9] to-[#EC25DF] rounded-none sm:rounded-lg"> */}
				{/* <section className="relative w-full flex bg-linear-to-r from-[#FC4A1A] to-[#FFEB56] rounded-none sm:rounded-lg"> */}
				{/* <img src="/cover/coverArt.png" alt="Banner Art" /> */}

				<div className="w-full rounded-md relative flex justify-between items-center">
					{/* Props */}
					<img src="/cover/props.png" alt="Props" className="max-w-40 sm:max-w-60" loading="lazy" />

					{/* Text */}
					<div className="xs:absolute xs:w-full xs:flex xs:justify-center xs:items-center">
						<div className="w-fit h-fit flex flex-col xs:flex-row xs:flex-1 xs:justify-center items-center xs:space-x-4 sm:space-x-8 lg:space-x-12 gap-y-4 xs:gap-y-0 pr-2 xs:pr-0">
							{/* Simply Realistic */}
							<div className="flex flex-col items-center xs:items-start -space-y-2 xs:space-y-0">
								<span className="font-rajdhani font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xxl text-black text-right xs:text-justify">
									SIMPLY
								</span>
								<span className="font-rajdhani font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xxl text-black text-right xs:text-justify">
									REALISTIC
								</span>
							</div>

							<div className="flex flex-row xs:space-x-4 sm:space-x-8 lg:space-x-12">
								{/* Line Break */}
								<div className="w-1 hidden xs:flex items-stretch">
									<hr className="w-full border-0 bg-black h-full rounded-full" />
								</div>
								{/* <div className="w-1.5 h-3/4 bg-black hidden xs:flex items-stretch"></div> */}

								{/* IDs */}
								<div className="flex flex-col items-end xs:items-start -space-y-2 xs:gap-2">
									{/* Gmail */}
									<Link
										to="mailto:adityapandey1609@gmail.com"
										className="flex flex-row-reverse xs:flex-row justify-center items-center xs:space-x-2"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/GameZonedYT/Logos@main/Logos/gmail.svg"
											alt="Gmail"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row-reverse xs:flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">adityapandey1609</span>
										</div>
									</Link>
									{/* GitHub */}
									<Link
										to="https://github.com/Aditya-Pandey-GH"
										target="_blank"
										className="flex flex-row-reverse xs:flex-row justify-center items-center xs:space-x-2"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
											alt="GitHub"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row-reverse xs:flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">Aditya-Pandey-GH</span>
										</div>
									</Link>
									{/* LinkedIn */}
									<Link
										to="https://www.linkedin.com/in/aditya-pandey-in/"
										target="_blank"
										className="flex flex-row-reverse xs:flex-row justify-center items-center xs:space-x-2"
									>
										<img
											src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
											alt="LinkedIn"
											className="w-4 sm:w-6"
										/>
										<div className="flex flex-row-reverse xs:flex-row justify-center items-center space-x-1">
											<span className="text-black text-xl xs:text-2xl sm:text-3xl font-medium">/</span>
											<span className="text-black text-sm xs:text-base sm:text-lg font-medium">aditya-pandey-in</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* My Photo */}
				<Link
					to="/cover/pfp.avif"
					target="_blank"
					className="absolute -bottom-12 xs:-bottom-16 md:-bottom-20 lg:-bottom-25 left-4 sm:left-8 rounded-full"
					title="Click to view the image in full size"
				>
					<img
						src="/cover/pfp.avif"
						alt="Aditya Pandey"
						className="w-24 xs:w-32 md:w-40 lg:w-50 rounded-full border-3 md:border-4 border-black"
						loading="lazy"
					/>
				</Link>
			</section>

			{/* Name & DOB */}
			<section className="pt-16 xs:pt-20 md:pt-26 lg:pt-32 mx-4 sm:mx-8">
				<div className="flex flex-col leading-5 sm:leading-7">
					<h1 className="font-khand font-bold text-light dark:text-dark text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl">ADITYA PANDEY</h1>
					<span className="text-sm sm:text-base lg:text-lg -mt-2 text-neutral-800 dark:text-neutral-300">September 16, 2003</span>
					{/* <span className="text-sm sm:text-base lg:text-lg -mt-2 text-neutral-800 dark:text-neutral-300">
						Web Developer | Aspiring Game Developer
					</span> */}
					{/* <div className="text-base sm:text-lg lg:text-xl mt-2 flex flex-col space-y-2">
						<div className="flex items-center space-x-2">
							<FaCalendarAlt className="text-xl sm:text-2xl !text-yellow-600 dark:!text-orange-400" />
							<span className="">/ September 16, 2003</span>
						</div>
						<div className="flex items-center space-x-2">
							<MdAlternateEmail className="text-xl sm:text-2xl !text-green-800 dark:!text-green-400" />
							<Link
								to="mailto:adityapandey1609@gmail.com"
								target="_blank"
								className=""
							>
								/ adityapandey1609@gmail.com
							</Link>
						</div>
						<div className="flex items-center space-x-2">
							<FaGithub className="text-xl sm:text-2xl !text-purple-800 dark:!text-purple-400" />
							<Link
								to="https://github.com/Aditya-Pandey-GH"
								target="_blank"
								className=""
							>
								/ Aditya-Pandey-GH
							</Link>
						</div>
						<div className="flex items-center space-x-2">
							<FaLinkedinIn className="text-xl sm:text-2xl !text-blue-800 dark:!text-blue-400" />
							<Link
								to=" https://www.linkedin.com/in/aditya-pandey-in"
								target="_blank"
								className=""
							>
								/ aditya-pandey-in
							</Link>
						</div>
					</div> */}
					<span className="text-base sm:text-lg lg:text-xl mt-2">Web Developer | Aspiring Game Developer</span>
				</div>
			</section>
		</>
	);
};

export default Cover;
