const express = require("express");

const app = express();

const PORT = 24110;

app.listen("localhost", PORT, () => {
    console.log(`Szerver elindult a http://localhost:${PORT} URL-en!`);
})