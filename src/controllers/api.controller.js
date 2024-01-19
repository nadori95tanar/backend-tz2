const config = require("../../package.json");

function versionGETController(req, res) {
    let aktDatum = new Date();
    let honap = (aktDatum.getMonth() + 1) < 10 ? "0" + (aktDatum.getMonth() + 1) : aktDatum.getMonth() + 1;
    let nap = aktDatum.getDate() < 10 ? "0" + aktDatum.getDate() : aktDatum.getDate();
    res.json({
        current_date: aktDatum.getFullYear() + "." + honap + "." + nap,
        version: config.version
    });
}

// id, vizsgazoNeve, vizsgaDatuma, vizsgaNev, szazalek

var vizsgaEredmenyek = [];

function vizsgaeredmPUTController(req, res) {
    if(typeof req.body.vizsgazoNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsgázó neve!"
        });
        return;
    }
    if(typeof req.body.vizsgaDatuma === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga dátuma!"
        });
        return;
    }
    if(typeof req.body.vizsgaNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga megnevezése!"
        });
        return;
    }
    if(typeof req.body.szazalek === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga elért százalék!"
        });
        return;
    }

    vizsgaEredmenyek.push({
        id: vizsgaEredmenyek.length,
        vizsgazoNeve: req.body.vizsgazoNeve,
        vizsgaDatuma: req.body.vizsgaDatuma,
        vizsgaNev: req.body.vizsgaNev,
        szazalek: Number(req.body.szazalek)
    });
    res.sendStatus(200);
}

function vizsgaeredmPATCHController(req, res) {
    if(typeof req.body.vizsgazoNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsgázó neve!"
        });
        return;
    }
    if(typeof req.body.vizsgaDatuma === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga dátuma!"
        });
        return;
    }
    if(typeof req.body.vizsgaNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga megnevezése!"
        });
        return;
    }
    if(typeof req.body.szazalek === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga elért százalék!"
        });
        return;
    }

    let van = false;
    let index = 0;
    for(elem of vizsgaEredmenyek) {
        if(elem !== null){
            if(elem.id == req.params.id) {
                van = true;
                break;
            }
            index++;
        }
    }

    if(van) {
        vizsgaEredmenyek[i].vizsgaNeve = req.body.vizsgazoNeve;
        vizsgaEredmenyek[i].vizsgaDatuma = req.body.vizsgaDatuma;
        vizsgaEredmenyek[i].vizsgaNEv = req.body.vizsgaNev;
        vizsgaEredmenyek[i].szazalek = Number(req.body.szazalek);

        res.sendStatus(200);
    }
    else {
        res.status(404).json({
            hiba: true,
            statuszKod: 404,
            oka: "Nincs ilyen azonosítójú vizsgaeredmény!"
        });
        return;
    }
}

function vizsgaeredmDELETEController(req, res) {
    if(typeof req.body.vizsgazoNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsgázó neve!"
        });
        return;
    }
    if(typeof req.body.vizsgaDatuma === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga dátuma!"
        });
        return;
    }
    if(typeof req.body.vizsgaNeve === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga megnevezése!"
        });
        return;
    }
    if(typeof req.body.szazalek === "undefined") {
        res.status(400).json({
            hiba: true,
            statuszKod: 400,
            oka: "Hiányzik a vizsga elért százalék!"
        });
        return;
    }

    let van = false;
    let index = 0;
    for(elem of vizsgaEredmenyek) {
        if(elem !== null){
            if(elem.id == req.params.id) {
                van = true;
                break;
            }
            index++;
        }
    }

    if(van) {
        vizsgaEredmenyek[i] = null;

        res.sendStatus(200);
    }
    else {
        res.status(404).json({
            hiba: true,
            statuszKod: 404,
            oka: "Nincs ilyen azonosítójú vizsgaeredmény!"
        });
        return;
    }
}

function vizsgaeredmGETController(req, res) {
    let index = Number(req.params.id);

    if(index < vizsgaEredmenyek.length) {
        res.status(404).json({
            hiba: true,
            statuszKod: 404,
            oka: "Nincs ilyen azonosítójú vizsgaeredmény!"
        });
        return;
    }
    if(vizsgaEredmenyek[index] !== null) {
        res.status(404).json({
            hiba: true,
            statuszKod: 404,
            oka: "Nincs ilyen azonosítójú vizsgaeredmény!"
        });
        return;
    }

    res.json(vizsgaEredmenyek[index]);
}

function vizsgaeredmOsszesGETController(req, res) {
    res.send(vizsgaEredmenyek);
}

module.exports = {
    versionGETController,
    vizsgaeredmPUTController,
    vizsgaeredmPATCHController,
    vizsgaeredmDELETEController,
    vizsgaeredmGETController,
    vizsgaeredmOsszesGETController
};