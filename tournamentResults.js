import { readTournamentFile } from './utils/file.mjs';
import { getMatchResult } from './utils/match.mjs';

readTournamentFile().then((matches) => {
  Object.keys(matches).map(matchId => {
    const matchResult = getMatchResult(matches[matchId]);

    console.log(`Score Match ${matchId}:
    ${matchResult[0].player} defeated ${matchResult[1].player}
    ${matchResult[0].set} sets to ${matchResult[1].set}
    ${matchResult[0].player}: won ${matchResult[0].game}, lost ${matchResult[1].game}
    ${matchResult[1].player}: won ${matchResult[1].game}, lost ${matchResult[0].game}
    `)
  })
}).catch(error => {
  console.log({ error });
});
