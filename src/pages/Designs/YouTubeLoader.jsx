import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaImage, FaPlay } from "react-icons/fa";

const YouTubeLoader = ({ videoId }) => {
	const [clicked, setClicked] = useState(false);
	// const [metaData, setMetaData] = useState({});
	const [videoTitle, setVideoTitle] = useState("Loading...");
	// const [channelName, setChannelName] = useState("Loading...");

	const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

	// Fetch metadata of the video
	const fetchMetaData = async () => {
		const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
		if (response.ok) {
			const data = await response.json();
			// console.table(data);
			// setMetaData(data);
			setVideoTitle(data.title.split("|")[0]);
			// setChannelName(data.author_name);
			// setVideoThumbnail(data.thumbnail_url);
		} else {
			console.error("Error fetching video metadata:", error);
			// setMetaData(error);
		}
	};

	useEffect(() => {
		fetchMetaData();
	}, [videoId]);

	return (
		<>
			<section className="w-fit flex flex-col justify-center items-center">
				<div className="w-fit rounded relative group" onClick={() => setClicked(!clicked)}>
					{/* <button className="w-fit p-3 rounded relative group bg-linear-to-tr from-neutral-200 to-gray-400" onClick={handleClick}> */}
					{/* <button className="w-fit p-3 rounded relative group bg-gray-500 dark:bg-gray-300" onClick={handleClick}> */}
					<div className="flex justify-center">
						<img
							src={videoThumbnail}
							alt={`YouTube Video Thumbnail for video ID ${videoId}`}
							width={480}
							height={270}
							className="aspect-w-16 aspect-h-9 max-xs:w-5/6 rounded-2xl shadow-black/50 not-dark:shadow-lg"
							loading="lazy"
						/>
					</div>

					{/* Overlay */}
					<div
						className={`absolute inset-0 bg-black/75 text-white rounded-2xl flex justify-center items-center cursor-pointer transition-opacity duration-300 ease-in-out ${
							clicked ? "opacity-100" : "opacity-0"
						}`}
					>
						<div className={`flex flex-col justify-center items-center space-y-2`}>
							<Link
								href={videoThumbnail}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-white bg-green-600 flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 duration-300 ${
									clicked ? "pointer-events-auto" : "pointer-events-none"
								}`}
							>
								<FaImage />
								View Thumbnail
							</Link>
							<Link
								href={`https://www.youtube.com/watch?v=${videoId}`}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-white bg-red-600 flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-800 duration-300 ${
									clicked ? "pointer-events-auto" : "pointer-events-none"
								}`}
							>
								<FaPlay />
								Watch Video
							</Link>
						</div>
					</div>

					{/* Close Button */}
					{/* <div className="w-fit h-fit absolute top-2 right-2">
						<FontAwesomeIcon icon={faClose} className="!w-4 !h-4 p-2 bg-yellow-400 text-black rounded-full text-lg" />
					</div> */}
				</div>

				<div className="p-4 text-center">
					<h4 className="text-sm sm:text-base lg:text-lg">{videoTitle}</h4>
					{/* <span className="">( {channelName} )</span> */}
				</div>
			</section>
			{/* <div className="h-48"></div> */}
		</>
	);
};

export default YouTubeLoader;
