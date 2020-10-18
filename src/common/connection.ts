import { Message } from "./message";

export class Connection {
    private socket: WebSocket;
    private onMessage: (msg: Message) => any;

    constructor(socket: WebSocket, onMessage: (msg: Message) => any) {
        this.socket = socket;
        this.onMessage = onMessage;

        var parent = this;
        this.socket.onmessage = (msg) => {
            parent.onMessage(Message.Deserialize(msg.data));
        };
    }

    sendMessage(msg: Message) {
        this.socket.send(Message.Serialize(msg));
    }
}
