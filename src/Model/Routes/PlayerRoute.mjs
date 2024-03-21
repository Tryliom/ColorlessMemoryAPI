export class PlayerRoute
{
    static getInfo(req, res)
    {
        res.status(200).json({
            "name": "request name: " + req.params.name,
            "elo": 100
        });
    }
}