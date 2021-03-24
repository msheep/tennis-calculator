import fs from 'fs';

import { readTournamentFile } from './file.mjs';

jest.mock('fs');

const testFile = 'Match: 01\n' +
  'Person A vs Person B\r\n' +
  '0\n' +
  '0\n' +
  '0\n' +
  '0';

describe('file', () => {
  describe('readTournamentFile', () => {
    it('should return match details properly', async () => {
      fs.readFileSync = jest.fn().mockResolvedValueOnce(testFile);

      const result = await readTournamentFile();


      expect(fs.readFileSync).toHaveBeenCalledWith('./data/full_tournament.txt', 'utf8');
      expect(result).toEqual({
        '01': {
          players: [ 'Person A', 'Person B' ],
          scores: [ '0', '0', '0', '0' ]
        }
      })
    });
  });

});
