import ws from "ws";
import { Server } from "http";

import { Message } from "../../common/message";
import { Connection } from "../../common/connection";

function init(webserver: Server) {
    const gameserver = new ws.Server({ server: webserver });

    gameserver.on("connection", (socket: WebSocket) => {
        var client = new Connection(socket, (msg) => {});
    });
}

export default init;
