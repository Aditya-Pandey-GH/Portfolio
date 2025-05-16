import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { RiseUpWhenVisible } from "./anims";

const SeeMore = ({ expanded, setExpanded }) => {
	return (
		<RiseUpWhenVisible>
			<button
				className="font-roboto !tracking-widest cursor-pointer text-[clamp(0.75rem,3dvw,1rem)] px-4"
				onClick={() => setExpanded(!expanded)}
			>
				<div className="flex flex-row justify-center items-center gap-4 w-full h-full px-6 py-3 rounded-2xl border border-light dark:border-dark hover:bg-light dark:hover:bg-dark group transition-color duration-300 ease-in-out">
					<span className="font-bold text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out">
						{!expanded ? "See More" : "See Less"}
					</span>
					{!expanded ? (
						<FaAngleDoubleDown className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
					) : (
						<FaAngleDoubleUp className="text-[clamp(1rem,2dvw,1.25rem)] text-black dark:text-white group-hover:text-white group-hover:dark:text-black transition-color duration-300 ease-in-out" />
					)}
				</div>
			</button>
		</RiseUpWhenVisible>
	);
};

export default SeeMore;
