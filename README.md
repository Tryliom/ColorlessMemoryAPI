# API

## Routes

### GET /player/:name

If not found, it's created with 100 elo.

Success:

```json
{
  "name": "player name",
  "elo": 100
}
```

### GET /player/:name/games

If not found, it's created with 100 elo and no matches.

Success:

```json
[
  {
    "winner": "player name",
    "loser": "other player name",
    "score_winner": 10,
    "score_loser": 5,
    "date": "2020-01-01"
  },
  {
    "winner": "other player name",
    "loser": "player name",
    "score_winner": 5,
    "score_loser": 10,
    "date": "2020-01-01"
  }
]
```

### POST /game

If a player is not found, it's created with 100 elo.

Data:

```json
{
  "winner": "player name",
  "loser": "player name",
  "score_winner": 10,
  "score_loser": 5,
  "date": "2020-01-01"
}
```

Success: 200 ok

### GET /leaderboard

Result:

```json
[
  {
    "name": "player name",
    "elo": 100
  },
  {
    "name": "other player name",
    "elo": 70
  }
]
```