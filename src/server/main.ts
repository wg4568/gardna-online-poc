import express from "express";
import Twig from "twig";
import http from "http";

import config from "../../config.json";
import gameServer from "./server";

const app = express();
const server = http.createServer(app);

Twig.cache(config.debug);

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
    Twig.renderFile("./pages/game.html", {}, (err, html) => {
        res.send(html);
    });
});

app.get("/favicon.ico", (req, res) => {
    res.sendFile("img/favicon.ico", { root: "static" });
});

server.on("upgrade", (request, socket, head) => {
    gameServer.handleUpgrade(request, socket, head, (socket) => {
        gameServer.emit("connection", socket, request);
    });
});

app.listen(config.port, () => {
    console.log(
        `Webserver listening on port ${config.port}, debug=${config.debug}`
    );
});
