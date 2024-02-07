import { Client } from "@notionhq/client";
import { cache } from "react";

const notion = new Client({
	auth: process.env.NOTION_API_KEY
});

export const getTeam = cache(async (teamId: string) =>
{
	const data = await notion.pages.retrieve({
		page_id: teamId
	})

	const teamData = data && {
		...data.properties,
		id: data.id
	}

	return teamData
})

export const formatTeam = (team) =>
{
	const teamData = {
		id: team.id,
		name: team.Name.title[0].plain_text,
		duration: team['Total Duration'].formula.number,
		stops: team['Total Stops'].rollup.number,
	}

	return teamData
}