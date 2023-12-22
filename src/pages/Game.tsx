import { useEffect, useState } from "react";
import { Team, allTeams } from "../services/team.service";

function Game() {
	const [team, setTeam] = useState<Team>();
	const [randomTeams, setRandomTeams] = useState<Team[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<Team>();
	const [score, setScore] = useState(0);

	useEffect(() => {

		const getRandomTeams = () => {
			const shuffledTeams = [...allTeams].sort(() => 0.5 - Math.random());
			const selectedTeams = allTeams;
			return selectedTeams;
		};

		const selectRandomTeam = (teams: Team[]) => {
			const randomIndex = Math.floor(Math.random() * teams.length);
			return teams[randomIndex];
		};

		const sixRandomTeams = getRandomTeams();
		setRandomTeams(sixRandomTeams);

		const randomTeam = selectRandomTeam(sixRandomTeams);
		setTeam(randomTeam);
	}, []);

	function getRandomTeams() {
		const shuffledTeams = [...allTeams].sort(() => 0.5 - Math.random());
		const selectedTeams = shuffledTeams.slice(0, 6);
		return selectedTeams;
	}

	function selectRandomTeam(teams: Team[]) {
		const randomIndex = Math.floor(Math.random() * teams.length);
		return teams[randomIndex];
	}

	function resetGame() {
		const sixRandomTeams = getRandomTeams();
		setRandomTeams(sixRandomTeams);

		const randomTeam = selectRandomTeam(sixRandomTeams);
		setTeam(randomTeam);
		setSelectedTeam(undefined);
	}

	useEffect(() => {
		if (selectedTeam) {
			if (selectedTeam.name === team?.name) {
				setScore(score + 1);
			} else {
				setScore(0);
			}
			resetGame();
		}
	}, [selectedTeam, team]);

	return (
		<div>
			<p className="mb-4">Guess which team is {team?.name}</p>
			<p className="mb-4">Score: {score}</p>
			<div className="grid grid-cols-2 gap-4">
				{randomTeams.map((team, index) => (
					<div key={index} className="flex justify-center items-center">
						<img src={team.image} alt="Logo can't loaded" className="h-max-36 h-min-36
						hover:opacity-50 transition duration-500 ease-in-out" onClick={() => setSelectedTeam(team)} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Game;
