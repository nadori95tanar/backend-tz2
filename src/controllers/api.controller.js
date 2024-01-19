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

module.exports = {
    versionGETController
};