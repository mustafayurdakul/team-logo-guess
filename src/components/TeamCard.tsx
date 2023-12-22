import { Team } from "../services/team.service";

interface TeamCardProps {
	team: Team;
	onClick?: () => void;
}

function TeamCard(props: TeamCardProps) {

	const { team } = props;

	return (
		<div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md p-4 cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 transition duration-200 ease-in-out transform hover:scale-105" onClick={props.onClick}>
			<img src={team.image} alt={team.name} />
			<div className="hidden">
				<p>{team.name}</p>
			</div>
		</div>
	);
}

export default TeamCard;