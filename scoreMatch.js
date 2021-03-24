import { readTournamentFile } from './utils/file.mjs';
import { getMatchResult } from './utils/match.mjs';

const matchId = process.argv[2];

readTournamentFile().then((matches) => {
  const match = matches[matchId];
  if (!match) {
    return 'Match does not exist!';
  }

  const result = getMatchResult(match);

  console.log(`${result[0].player} defeated ${result[1].player}`)
  console.log(`${result[0].set} sets to ${result[1].set}`)
}).catch(error => {
  console.log({ error });
});
