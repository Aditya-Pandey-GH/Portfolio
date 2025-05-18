import { Link } from "react-router-dom";
// import { FadeInWhenVisible, RiseUpWhenVisible } from "./anims";

const Cover = () => {
	return (
		<>
			{/* Cover Art & PFP */}
			<>
				<section className="relative w-full flex bg-linear-to-r from-[#1571E9] to-[#EC25DF] rounded-none sm:rounded-lg">
					<div className="w-full m-2 md:m-4 p-4 md:px-12 lg:px-20 rounded-md bg-white/50 flex justify-between items-center">
						<div>
							<img src="/cover/prog1.webp" alt="Programmer" className="w-20 sm:w-40" loading="lazy" />
						</div>
						<div className="w-full flex flex-col justify-center items-center gap-2">
							<span className="font-khand font-semibold text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl text-white text-shadow-black text-shadow-sm !tracking-normal">
								{"<Aditya Pandey />"}
							</span>
							{/* <span className="font-khand font-semibold text-[min(2.25rem,7dvw)] text-white text-shadow-black text-shadow-sm !tracking-normal">{"<Aditya Pandey />"}</span> */}
							<span className="font-iceberg font-semibold text-xs xs:text-base sm:text-lg lg:text-xl text-black">
								Designer & Web Developer;
							</span>
							{/* <span className="font-iceberg font-semibold text-[min(1.15rem,3.5dvw)] text-black">Designer & Web Developer;</span> */}
						</div>
						<div>
							<img src="/cover/prog2.webp" alt="Programmer" className="w-20 sm:w-40" loading="lazy" />
						</div>
					</div>
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
						<h1 className="font-khand font-bold text-light dark:text-dark text-2xl xs:text-3xl sm:text-4xl lg:text-4xxl">
							ADITYA PANDEY
						</h1>
						<span className="text-sm sm:text-base lg:text-lg -mt-2 text-neutral-800 dark:text-neutral-300">September 16, 2003</span>
						<span className="text-base sm:text-lg lg:text-xl mt-2">Web Developer | Aspiring Game Developer</span>
					</div>
				</section>
			</>
		</>
	);
};

export default Cover;
