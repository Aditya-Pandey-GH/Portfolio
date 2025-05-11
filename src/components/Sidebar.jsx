import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { SidebarContent } from "./content";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Sidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const [sidebarItems, setSidebarItems] = useState(SidebarContent);

	// Theme Switch Starts

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Theme Switch Ends

	return (
		<>
			{/* BG Overlay to bring the Sidebar to main focus */}
			<section
				id="overlay"
				className={`w-dvw h-dvh fixed top-0 left-0 bg-black transition-all duration-300 ${
					isSidebarOpen ? "opacity-75 z-10" : "opacity-0 z-0"
				}`}
				onClick={() => {
					setIsSidebarOpen(false);
				}}
			/>

			{/* Hamburger Button to Toggle Navbar */}
			<section className="hamburger">
				<button
					className={`w-12 h-12 m-4 sm:m-8 p-4 fixed rounded-full flex flex-col cursor-pointer space-y-1 bg-neutral-200/75 dark:bg-neutral-700/75 active:bg-neutral-200 dark:active:bg-neutral-700 transition-all z-50 ${
						isSidebarOpen ? "bg-neutral-200 dark:bg-neutral-700" : ""
					}`}
					onClick={() => {
						localStorage.setItem("isSidebarOpen", !isSidebarOpen);
						setIsSidebarOpen(!isSidebarOpen);
					}}
					aria-label="Hamburger"
				>
					<div className="z-10">
						<span
							className={`w-6 h-0.5 absolute left-3 top-4.25 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 rotate-45" : ""
							}`}
						></span>
						<span
							className={`w-6 h-0.5 absolute left-3 top-5.75 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 scale-x-0" : ""
							}`}
						></span>
						<span
							className={`w-6 h-0.5 absolute left-3 top-7.25 rounded-full bg-black dark:bg-white transition-all ease-out duration-300 ${
								isSidebarOpen ? "!top-5.5 -rotate-45" : ""
							}`}
						></span>
					</div>
					{/* <div className="w-10 h-8 absolute top-2 left-1 border rounded border-black dark:border-white hover:bg-white dark:hover:bg-black z-0 transition-colors"></div> */}
				</button>
			</section>

			{/* Sidebar Content */}
			<section className="fixed top-0 left-0 z-40 sm:w-20 h-dvh sm:p-4">
				<nav
					className={`w-0 sm:w-20 h-[calc(100dvh)] sm:h-[calc(100dvh-2rem)] fixed bg-neutral-100 dark:bg-neutral-800 sm:rounded-2xl transition-all ease-in-out duration-300 z-40 ${
						isSidebarOpen ? "w-full sm:w-72" : ""
					}`}
				>
					{/* Heading of the current page (Optional) */}
					<div className="pl-20 w-full h-20 flex items-center">
						<h1 className={`w-full font-bold transition-opacity ease-in-out duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}>
							{/* HEADING */}
						</h1>
					</div>

					{/* Change the value of height from '100vh-5rem' to appropriate value according to your project requirements 👇 */}
					<div className="w-full h-[calc(100dvh-5rem)] sm:h-[calc(100dvh-8rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-between">
						{/* <div className="w-full h-[calc(100dvh-5rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-between"> */}
						{/* Pages */}
						<div id="pages">
							<ul className="w-full flex flex-col">
								{sidebarItems.map((item) => (
									<li key={item.id} className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
										<button
											// to={item.path}
											className={`w-full flex items-center gap-2 p-4 relative cursor-pointer group ${
												item.path == location.pathname && "bg-neutral-200 dark:bg-neutral-700"
											}`}
											onClick={() => {
												if (item.path !== location.pathname) {
													navigate(item.path);
													// navigate(item.path, { replace: true });
												}
												setIsSidebarOpen(false);
											}}
										>
											<div
												className={`absolute top-0 left-0 w-1 h-full ${
													item.path === location.pathname && "bg-light dark:bg-dark"
												}`}
											></div>
											<span className="w-8 h-8 mx-3 flex items-center text-2xl text-black dark:text-white group-hover:text-light group-hover:dark:text-dark transition-colors ease-in-out duration-300">
												{item.path == location.pathname ? item.selectedLogo : item.logo}
											</span>
											<span
												className={`font-iceberg group-hover:text-light group-hover:dark:text-dark transition-colors ease-in-out duration-300 ${
													isSidebarOpen ? "opacity-100" : "opacity-0"
												} ${item.path == location.pathname && "!text-light dark:!text-dark"}`}
											>
												{item.name}
											</span>
										</button>
									</li>
								))}
							</ul>
						</div>

						<div id="options">
							{/* Separator */}
							<div className="flex justify-center my-4 px-4">
								<hr className="w-full border rounded-full text-neutral-500 dark:text-neutral-300" />
							</div>

							{/* Options / Utilities / Tools */}
							<ul className="w-full flex flex-col">
								{/* Switch Theme */}
								<li className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
									<button
										className="w-full flex items-center gap-2 p-4 cursor-pointer group"
										onClick={() => {
											setTheme(theme === "light" ? "dark" : "light");
											setIsSidebarOpen(false);
										}}
									>
										<div className="w-8 h-8 mx-3 flex items-center text-2xl text-black dark:text-white">
											<div
												className="flex justify-center items-center bg-transparent border-none rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
												title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
											>
												{theme === "light" ? (
													<>
														{/* <BiMoon className="group-hover:text-light group-hover:dark:text-dark transition-colors duration-300" /> */}
														<FaMoon className="group-hover:text-light group-hover:dark:text-dark transition-colors duration-300" />
													</>
												) : (
													<>
														{/* <BiSun className="group-hover:text-light group-hover:dark:text-dark transition-colors duration-300" /> */}
														<FaSun className="group-hover:text-light group-hover:dark:text-dark transition-colors duration-300" />
													</>
												)}
											</div>
										</div>
										<span
											className={`font-iceberg group-hover:text-light group-hover:dark:text-dark transition-colors ease-in-out duration-300 ${
												isSidebarOpen ? "opacity-100" : "opacity-0"
											}`}
										>
											Switch Theme
										</span>
									</button>
								</li>

								{/* Download Resume */}
								<li className="hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all" onClick={() => setIsSidebarOpen(false)}>
									<Link to="/" target="_blank" className="flex items-center gap-2 p-4 cursor-pointer group">
										<span className="w-8 h-8 mx-3 flex items-center text-2xl text-black dark:text-white">
											<FaFileDownload className="group-hover:text-light group-hover:dark:text-dark transition-colors ease-in-out duration-300" />
										</span>
										<span
											className={`font-iceberg group-hover:text-light group-hover:dark:text-dark transition-colors ease-in-out duration-300 ${
												isSidebarOpen ? "opacity-100" : "opacity-0"
											}`}
										>
											Download Resume
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</section>
		</>
	);
};

export default Sidebar;
