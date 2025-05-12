import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Designs from "./pages/Designs";
import Achievements from "./pages/Achievements";
import Connect from "./pages/Connect";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";
import ProjectCategory from "./pages/Projects/ProjectCategory";

const App = () => {
	return (
		<>
			<Sidebar />
			<main className="w-full min-h-dvh p-0 sm:pl-28 sm:pr-4 sm:pt-4 absolute top-0 flex flex-col items-center">
				<div className="w-full max-w-6xl h-fit flex flex-col flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/projects/:projectCategory" element={<ProjectCategory />} />
						{/* <Route path="/projects/games" element={<Projects />} />
						<Route path="/projects/websites" element={<Projects />} />
						<Route path="/projects/apps" element={<Projects />} /> */}
						<Route path="/designs" element={<Designs />} />
						<Route path="/achievements" element={<Achievements />} />
						<Route path="/connect" element={<Connect />} />

						{/* If none of the above routes matches, Not Found page should open up */}
						<Route path="*" element={<NotFound />} />

						{/* 👇🏻 Older Method (Can be safely removed) 👇🏻 */}
						{/* <Route path="/not-found" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/not-found" replace />} /> */}
						{/* 👆🏻 Older Method (Can be safely removed) 👆🏻 */}
					</Routes>
				</div>
			</main>
		</>
	);
};

export default App;
