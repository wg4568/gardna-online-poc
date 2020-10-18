export enum MessageType {
    Profile
}

export class Message {
    public type: MessageType;
    public data: Object;

    constructor(type: MessageType, data: Object) {
        this.type = type;
        this.data = data;
    }

    static Deserialize(raw: string): Message {
        var obj = JSON.parse(raw);
        return new Message(obj.type, obj.data);
    }

    static Serialize(msg: Message): string {
        return JSON.stringify({
            type: msg.type,
            data: msg.data
        });
    }
}
