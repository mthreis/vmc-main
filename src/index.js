import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/", (req, res) => {
    res.json({
        message: "This really works. Impressive!"
    })
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${ process.env.PORT }...`));