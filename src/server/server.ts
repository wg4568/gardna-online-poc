import ws from "ws";

const server = new ws.Server({ noServer: true });

server.on("connection", (client) => {
    console.log("New connection");
});

export default server;
