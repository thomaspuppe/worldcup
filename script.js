const filterMatchesByStatus = (json, status) => {
	return json.filter(match => match.status === status)
}

const renderCompletedMatch = (match) => {
	return `
	<article>
		${match.home_team.code} ${match.home_team.goals} : ${match.away_team.goals} ${match.away_team.code}
	</article>`;
}

const renderCurrentMatch = (match) => {
	return `
	<article>
		${match.home_team.code} ${match.home_team.goals} : ${match.away_team.goals} ${match.away_team.code}
	</article>`;
}

const renderFutureMatch = (match) => {
	return `
	<article>
		${match.home_team.country} – ${match.away_team.country}
	</article>`;
}

const processResponse = (json) => {
	console.log(json)
	
	const completedMatches = filterMatchesByStatus(json, 'completed');
	const currentMatches = filterMatchesByStatus(json, 'in progress');
	const futureMatches = filterMatchesByStatus(json, 'future');

	for (i in completedMatches) {
		document.getElementById('completed').insertAdjacentHTML('beforeend', renderCompletedMatch(completedMatches[i]))
	}

	for (i in currentMatches) {
		document.getElementById('completed').insertAdjacentHTML('beforeend', renderCurrentMatch(currentMatches[i]))
	}

	for (i in futureMatches) {
		document.getElementById('completed').insertAdjacentHTML('beforeend', renderFutureMatch(futureMatches[i]))
	}
};

fetch('http://worldcup.sfg.io/matches/today').then(response => {
	console.log(response);
	return response.json();
}).then(processResponse);