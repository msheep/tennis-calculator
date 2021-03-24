# Tennis Calculator

## Installment

Use v14.15.4 node version: 
`nvm use`

Install dependencies: 
`yarn`

Run tests:
`yarn test`

## Queries

### Query match result
Query scores for a particular match
Prints who defeated whom, and the result of the sets for the match (winning player score first).

Query: `yarn run score-match <id>`

Example: `yarn run score-match 01`

Example output:

    Person A defeated Person B
    2 sets to 0
 
### Query games for player
Prints a summary of games won vs lost for a particular player over the tournament
Query: `yarn run games-player "<Player Name>"`

Example: `yarn run games-player "Person A"`

Example output:

     Won: 23
     Lost: 17

## Sample output
Running the application against the 'full_tournament.txt' file results in the following:

    $ yarn run tournament-results
    Score Match 01:
    Person A defeated Person B
    2 sets to 0
    Person A: won 12, lost 0
    Person B: won 0, lost 12

    Score Match 02:
    Person C defeated Person A
    2 sets to 1
    Person C: won 17, lost 11
    Person A: won 11, lost 17


