import { Vector2 } from "../common/vector";

export class Camera {
    public position: Vector2;

    constructor(position: Vector2 = new Vector2(0, 0)) {
        this.position = position;
    }

    translateToCanvas(input: Vector2) {
        return new Vector2(
            input.x - this.position.x + window.innerWidth / 2,
            input.y - this.position.y + window.innerHeight / 2
        );
    }

    translateToWorld(input: Vector2) {
        return new Vector2(
            input.x + this.position.x - window.innerWidth / 2,
            input.y + this.position.y - window.innerHeight / 2
        );
    }
}
