import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs";
import Achievements from "./pages/Achievements";
import Connect from "./pages/Connect";
import Sidebar from "./components/Sidebar";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<>
			<Sidebar />
			<main className="w-full min-h-dvh p-0 sm:pl-28 sm:pr-4 sm:pt-4 absolute top-0 flex flex-col items-center">
				<div className="w-full max-w-6xl h-fit flex flex-col flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Skills" element={<Skills />} />
						<Route path="/Projects" element={<Projects />} />
						<Route path="/Designs" element={<Designs />} />
						<Route path="/Achievements" element={<Achievements />} />
						<Route path="/Connect" element={<Connect />} />

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
