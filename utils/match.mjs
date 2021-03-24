import _ from 'lodash';

export const getMatchResult = ({ players, scores }) => {
  const games = scores.reduce((prev, cur) => {
    const latestMatch = _.last(prev);

    // win 4 points win a game
    if (!latestMatch || _.max(latestMatch) >= 4) {
      return [
        ...prev,
        _.set([0, 0, null], cur, 1)
      ];
    }

    latestMatch[cur] = latestMatch[cur] + 1;
    return _.set(prev, prev.length - 1, latestMatch);
  }, []);

  const sets = games.reduce((prev, cur) => {
    const latestSet = _.last(prev);
    const winner = cur[0] > cur[1] ? 0 : 1;

    // win 6 games win a set
    if (!latestSet || _.max(latestSet) >= 6) {
      return [
        ...prev,
        _.set([0, 0], winner, 1)
      ];
    }

    latestSet[winner] = latestSet[winner] + 1;
    return _.set(prev, prev.length - 1, latestSet);
  }, []);

  return players.map((player, index) => ({
    player,
    game: games.filter(game => game[index] > game[1 - index]).length,
    set: sets.filter(set => set[index] > set[1 - index]).length,
  })).sort((a, b) => b.set - a.set);
};
