import {DataTypes, Model} from 'sequelize';
import {Player} from "./Player.mjs";

export class Game extends Model {
    winner;
    loser;
    timestamp;
    score_winner;
    score_loser;
    deck_type;

    static InitModel(sequelize)
    {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            winner: {
                type: DataTypes.INTEGER,
                references: {
                    model: Player
                }
            },
            loser: {
                type: DataTypes.INTEGER,
                references: {
                    model: Player
                }
            },
            timestamp: DataTypes.DATE,
            score_winner: DataTypes.INTEGER,
            score_loser: DataTypes.INTEGER,
            deck_type: DataTypes.INTEGER
        }, {sequelize});
    }
}
