import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";
import { getPlayer } from "@utils/players";
import { formatTeam, getTeam } from "@utils/teams";
import Team from '@partials/team'

export const revalidate = 60 * 60; // 1 hour

export default async function Page ()
{
	const { emailAddresses } = await currentUser() as User
	const playerData = await getPlayer(emailAddresses[0].emailAddress)
	const teamData = await getTeam(playerData?.Team?.relation[0].id)
	const team = formatTeam(teamData)

	return <Team team={team} />;
}