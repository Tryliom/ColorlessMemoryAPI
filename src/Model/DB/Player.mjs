import {DataTypes, Model} from 'sequelize';

export class Player extends Model {
    name;
    elo;

    static InitModel(sequelize)
    {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: { type: DataTypes.STRING },
            elo: {
                type: DataTypes.INTEGER,
                defaultValue: 100
            }
        }, {sequelize});
    }
}