import { Connection } from "../../common/connection";
import { Message } from "../../common/message";

class Player extends Connection {
    constructor(socket: WebSocket) {
        super(socket, (msg) => {
            this.handleMessage(msg);
        });
    }

    handleMessage(msg: Message) {}
}
