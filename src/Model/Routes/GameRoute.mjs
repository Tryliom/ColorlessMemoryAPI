import { Game } from "../DB/Game.mjs";
import {Player} from "../DB/Player.mjs";
import {Op} from "sequelize";

export class GameRoute
{
    static async createGame(req, res)
    {
        let winner = await Player.findOne({where: {name: req.body.winner}});
        let loser = await Player.findOne({where: {name: req.body.loser}});

        // If a player does not exist, create it
        if (!winner) winner = await Player.create({name: req.body.winner});
        if (!loser) loser = await Player.create({name: req.body.loser});

        await Game.create({
            winner: winner.id,
            loser: loser.id,
            score_winner: req.body.score_winner,
            score_loser: req.body.score_loser,
            deck_type: req.body.deck_type
        });

        res.status(200);
    }

    static async getGamesOfPlayer(req, res)
    {
        let player = await Player.findOne({where: {name: req.params.name}});

        if (!player)
        {
            // If player does not exist, create player and return empty array
            player = await Player.create({name: req.params.name});
            res.status(200).json([]);
        }

        // Get all games where the player is the winner or loser
        let games = await Game.findAll({
            where: {
                [Op.or]: [{winner: player.id}, {loser: player.id}]
            }
        });

        res.status(200).json(games);
    }
}