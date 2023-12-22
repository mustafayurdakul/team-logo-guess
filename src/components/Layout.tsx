import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	return (
		<div className="bg-white text-zinc-800 dark:bg-black dark:text-zinc-200 min-h-screen">
			<div className="container max-w-md mx-auto p-10">
				<Header />
				<div className="mt-10">
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;