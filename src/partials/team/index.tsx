"use client";

import { useEffect, useState } from "react";

const Team = (props: any) =>
{
	const savedData = window.localStorage?.getItem('hunt-team') ?? {}
	const [team, setTeam] = useState<any>(savedData)

	useEffect(() =>
	{
		if (props?.team)
		{
			setTeam(props.team)

			window.localStorage.setItem('hunt-team', JSON.stringify(props.team))
		}
	}, [props])

	return (
		<>
			<h1>{team?.name}</h1>
			<dl>
				<dt>Duration</dt>
				<dd>{team?.duration}</dd>
				<dt>Stops</dt>
				<dd>{team?.stops}</dd>
			</dl>
		</>
	)
}

export default Team