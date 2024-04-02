import { Player } from "../DB/Player";

export class PlayerRoute
{
    // If player is not created, create player
    static async getInfo(req, res)
    {
        // Check if player exists
        let player = await Player.findOne({ where: { name: req.params.name } });

        if (player)
        {
            res.status(200).json({
                "name": player.name,
                "elo": player.elo
            });
        }
        else
        {
            // If player does not exist, create player
            player = await Player.create({ name: req.params.name });

            res.status(200).json({
                "name": player.name,
                "elo": player.elo
            });
        }
    }

    static async getLeaderboard(req, res)
    {
        let players = await Player.findAll({
            order: [['elo', 'DESC']]
        });

        res.status(200).json(players);
    }
}