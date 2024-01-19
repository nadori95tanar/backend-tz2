const express = require("express");

const apiRouter = require("./routes/api.router");

const app = express();

const PORT = 24110;

app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Vizsganyilvántartó Rendszer backend fut!");
});

app.listen(PORT, () => {
    console.log(`Szerver elindult a http://localhost:${PORT} URL-en!`);
})