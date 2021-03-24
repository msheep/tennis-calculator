import fs from 'fs';

export const readTournamentFile = async () => {
  const content = await fs.readFileSync('./data/full_tournament.txt', 'utf8');
  let matches = content
    .toString()
    .split('Match: ')
    .filter(item => !!item);
  matches = matches.map(
    match => match.split(/\r?\n/).filter(item => !!item)
  );

  return matches.reduce((prev, [matchId, player, ...rest]) => ({
    ...prev,
    [matchId]: {
      players: player.match(/Person [A-Z]/g),
      scores: rest
    }
  }), {});
};
