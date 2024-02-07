import { Client } from '@notionhq/client'
import { cache } from 'react'

const notion = new Client({
	auth: process.env.NOTION_API_KEY
})

export const getPlayer = cache(async (email: string) =>
{
	const data: any = await notion.databases.query({
		database_id: process.env.CONTESTANTS_DB ?? '',
		filter: {
			property: 'Email',
			email: {
				equals: email.toLowerCase()
			}
		}
	})

	const playerData: any = data?.results?.[0] && {
		...data?.results[0].properties,
		id: data?.results[0].id
	}

	return playerData
})