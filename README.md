# API

## Routes

### GET /player/:name

Success:

```json
{
  "name": "player name",
  "elo": 100
}
```

Error:

```json
{
  "error": "player not found"
}
```

### POST /player

Data:

```json
{
  "name": "player name"
}
```

Success:

```json
{
  "name": "player name",
  "elo": 100
}
```

Error:

```json
{
  "error": "player already exists"
}
```

### GET /match/:name

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

Error:

```json
{
  "error": "player not found"
}
```

### POST /match

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
Error:

```json
{
  "error": "player not found"
}
```

### GET /leaderboard

Success:

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

Error:

```json
{
  "error": "leaderboard not found"
}
```