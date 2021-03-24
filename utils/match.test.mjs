import { getMatchResult } from './match.mjs';

describe('match', () => {
  describe('getMatchResult', () => {
    it('should return match results properly', async () => {
      const players = ['Person A', 'Person B'];
      const scores = [
        0, 0, 0, 0,
        1, 1, 0, 1, 1,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ];

      const result = await getMatchResult({ players, scores });

      expect(result).toEqual([
        {
          'player': 'Person A',
          'game': 6,
          'set': 1
        },
        {
          'player': 'Person B',
          'game': 1,
          'set': 0
        }]);
    });
  });

});
