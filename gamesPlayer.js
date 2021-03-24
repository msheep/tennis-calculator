import { readTournamentFile } from './utils/file.mjs';
import { getMatchResult } from './utils/match.mjs';

const player = process.argv[2];

readTournamentFile().then((matches) => {

  const result = Object.keys(matches).reduce((prev, matchId) => {
    const matchResult = getMatchResult(matches[matchId]);
    const playerIndex = matchResult.findIndex(value => value.player === player);
    return playerIndex > -1
      ? {
        won: prev.won + matchResult[playerIndex].game,
        lost: prev.lost + matchResult[1 - playerIndex].game,
      }
      : prev;
  }, { won: 0, lost: 0 });

  console.log(`Won: ${result.won}`);
  console.log(`Lost: ${result.lost}`);
}).catch(error => {
  console.log({ error });
});
