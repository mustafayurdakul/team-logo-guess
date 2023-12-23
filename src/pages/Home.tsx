import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className="space-y-4">
			<p className="pb-5">
				Welcome to Team Logo Guess! This is a game where you guess the team name
				based on the logo. You can choose to play with all the teams or just
				choose a specific league.
			</p>

			<Link to="/team-logo-guess/game">
				<CustomButton>Play</CustomButton>
			</Link>
			<Footer />
		</div>
	);
}

export default Home;