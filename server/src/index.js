import express from "express";
import cors from "cors";

( async() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (req, res) => {
        res.send('Hello');
    });


    app.listen(8080, () => {
        console.log(`Server is running on port 8080`);
    })
})();