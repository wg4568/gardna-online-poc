import express from "express";
import http from "http";
import Twig from "twig";
import gameServer from "./server";

const app = express();
const server = http.createServer(app);

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
    Twig.renderFile("./pages/game.html", {}, (err, html) => {
        res.send(html);
    });
});

server.on("upgrade", (request, socket, head) => {
    gameServer.handleUpgrade(request, socket, head, (socket) => {
        gameServer.emit("connection", socket, request);
    });
});

app.listen(3000, () => {
    console.log("Server listening");
});
