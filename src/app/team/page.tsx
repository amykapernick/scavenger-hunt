import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import { getPlayer } from "@utils/players";
import { formatTeam, getTeam } from "@utils/teams";

export default async function Page ()
{
	const { emailAddresses } = await currentUser() as User
	const playerData = await getPlayer(emailAddresses[0].emailAddress)
	const teamData = await getTeam(playerData?.Team?.relation[0].id)
	const team = formatTeam(teamData)

	return <>
		<h1>{team.name}</h1>
		<dl>
			<dt>Duration</dt>
			<dd>{team.duration}</dd>
			<dt>Stops</dt>
			<dd>{team.stops}</dd>
		</dl>
	</>;
}