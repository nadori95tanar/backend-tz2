const express = require("express");

const app = express();

const PORT = 24110;

app.get("/", (req, res) => {
    res.send("Vizsganyilvántartó Rendszer backend fut!");
});

app.listen(/*"localhost", */PORT, () => {
    console.log(`Szerver elindult a http://localhost:${PORT} URL-en!`);
})