import { Sprite } from "../sprites";
import { Vector2 } from "../../common/vector";
import { Color } from "../../common/color";
import { Camera } from "../camera";

export class Player {
    private _username: string;
    private _color: Color;
    private sprite: PlayerSprite;
    public angle: number;
    public position: Vector2;

    constructor(
        camera: Camera,
        username: string,
        color: Color,
        position: Vector2 = new Vector2(0, 0),
        angle: number = 0
    ) {
        this._username = username;
        this._color = color;
        this.position = position;
        this.angle = angle;
        this.sprite = new PlayerSprite(camera, username, color);
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.sprite.draw(ctx, this.position, this.angle);
    }

    get username() {
        return this._username;
    }

    get color() {
        return this._color;
    }

    set username(val: string) {
        this._username = val;
        this.sprite.username = val;
    }

    set color(val: Color) {
        this._color = val;
        this.sprite.color = val;
    }
}

export class PlayerSprite extends Sprite {
    public username: string;
    public color: Color;

    constructor(camera: Camera, username: string, color: Color) {
        super(
            (ctx) => {
                // Draw turret
                ctx.beginPath();
                ctx.rect(0, -20, -60, 40);

                ctx.lineWidth = 5;
                ctx.fillStyle = "lightgrey";

                ctx.fill();
                ctx.stroke();

                // Draw body
                ctx.beginPath();
                ctx.arc(0, 0, 40, 0, 2 * Math.PI);

                ctx.lineWidth = 5;
                ctx.fillStyle = this.color.formatHEX();

                ctx.fill();
                ctx.stroke();
            },
            (ctx) => {
                // Draw username
                ctx.font = "bold 32px Comic Sans MS";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.fillStyle = this.color.formatHEX();

                var width = ctx.measureText(this.username).width;
                ctx.fillText(this.username, -width / 2, 70);
                ctx.strokeText(this.username, -width / 2, 70);
            },
            camera
        );

        this.username = username;
        this.color = color;
    }
}
