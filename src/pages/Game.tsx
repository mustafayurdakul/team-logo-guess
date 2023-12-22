import { useEffect, useState } from "react";
import { Team, allTeams } from "../services/team.service";
import TeamCard from "../components/TeamCard";

function Game() {
	const [team, setTeam] = useState<Team>();
	const [randomTeams, setRandomTeams] = useState<Team[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<Team>();
	const [score, setScore] = useState(0);
	const [bestStreak, setBestStreak] = useState(0);

	useEffect(() => {

		const getRandomTeams = () => {
			const shuffledTeams = [...allTeams].sort(() => 0.5 - Math.random());
			const selectedTeams = shuffledTeams.slice(0, 6);
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
				if (score > bestStreak) {
					setBestStreak(score);
				}
				setScore(0);
			}
			resetGame();
		}
	}, [selectedTeam, team]);

	return (
		<div>
			<div className="flex flex-col items-center space-y-5 mb-5">
				<p className="text-2xl font-bold"
				>Find the team </p>
				<p className="text-2xl font-bold">
					{team?.name}
				</p>
				<div className="flex flex-row items-center space-x-5">
					<p className="text-2xl font-bold">
						Score: {score}
					</p>
					<p className="text-2xl font-bold">
						Best Streak: {bestStreak}
					</p>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{randomTeams.map((team, index) => (
					<TeamCard key={index} team={team} onClick={() => setSelectedTeam(team)} />
				))}
			</div>
		</div >
	);
}

export default Game;
