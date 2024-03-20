export class PlayerRoute
{
    static getInfo(req, res)
    {
        res.status(200).json({
            "name": "player name",
            "elo": 100
        });
    }
}