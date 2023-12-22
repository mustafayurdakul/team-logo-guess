import { Link } from "react-router-dom";

import CustomButton from "../components/CustomButton";

function Home() {
	return (
		<div className="flex flex-col items-center space-y-5">
			<p>
				Welcome to Team Logo Guess! This is a game where you guess the team name
				based on the logo. You can choose to play with all the teams or just
				choose a specific league.
			</p>

			<Link to="/team-logo-guess/game" className="w-full">
				<CustomButton>Play</CustomButton>
			</Link>
		</div>
	);
}

export default Home;