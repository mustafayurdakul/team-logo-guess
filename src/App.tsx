import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
	return (
		<Routes>
			<Route path="/team-logo-guess" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="game" element={<Game />} />
			</Route>
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
}

export default App;