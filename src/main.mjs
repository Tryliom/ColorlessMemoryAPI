import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {PlayerRoute} from "./Model/Routes/PlayerRoute.mjs";

import {Sequelize} from 'sequelize';
import {Player} from './Model/DB/Player.mjs';
import {Game} from './Model/DB/Game.mjs';

class Server {
    static async Start() {
        dotenv.config();

        const app = express();
        const port = process.env.PORT || 3000;
        const ip = process.env.IP || "127.0.0.1";

        app.use(cors());

        const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@127.0.0.1:5432/${process.env.POSTGRES_DB}`);

        Player.InitModel(sequelize);
        Game.InitModel(sequelize);

        await sequelize.sync();

        // Set up the server
        const server = app.listen(port, ip);

        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        console.log('API server started on: ' + port);

        // Routes
        app.route("/player/:name")
            .get(PlayerRoute.getInfo)
    }
}

Server.Start();