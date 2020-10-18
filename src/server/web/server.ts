import express from "express";
import Twig from "twig";

import config from "../../../config.json";

function init() {
    const webserver = express();

    Twig.cache(config.debug);

    webserver.use("/static", express.static("static"));

    webserver.get("/", (req, res) => {
        Twig.renderFile("./pages/game.html", {}, (err, html) => {
            res.send(html);
        });
    });

    webserver.get("/favicon.ico", (req, res) => {
        res.sendFile("img/favicon.ico", { root: "static" });
    });

    return webserver.listen(config.port, () => {
        console.log(
            `Webserver listening on port ${config.port}, debug=${config.debug}`
        );
    });
}

export default init;
