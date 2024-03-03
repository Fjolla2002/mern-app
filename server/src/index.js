import express from "express";
import cors from "cors";
import connect from ".//db/mongo.js";
import config from "./config.js";

( async() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (req, res) => {
        res.send('Hello');
    });

    await connect();

    app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
    })
})();