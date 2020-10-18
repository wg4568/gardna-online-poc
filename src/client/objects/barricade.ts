import { Sprite } from "../sprites";
import { Vector2 } from "../../common/vector";
import { Color } from "../../common/color";
import { Camera } from "../camera";

export class Barricade {
    private _color: Color;
    private _size: Vector2;
    private sprite: BarricadeSprite;
    public position: Vector2;
    public angle: number;

    constructor(
        camera: Camera,
        color: Color,
        size: Vector2,
        position: Vector2 = new Vector2(0, 0),
        angle: number = 0
    ) {
        this._color = color;
        this._size = size;
        this.position = position;
        this.angle = angle;
        this.sprite = new BarricadeSprite(camera, color, size);
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.sprite.draw(ctx, this.position, this.angle);
    }

    get color() {
        return this._color;
    }

    get size() {
        return this._size;
    }

    set color(val: Color) {
        this._color = val;
        this.sprite.color = val;
    }

    set size(val: Vector2) {
        this._size = val;
        this.sprite.size = val;
    }
}

export class BarricadeSprite extends Sprite {
    public color: Color;
    public size: Vector2;

    constructor(camera: Camera, color: Color, size: Vector2) {
        super(
            (ctx) => {
                // Draw barricade
                ctx.beginPath();
                ctx.rect(0, 0, size.a, size.b);

                ctx.lineWidth = 5;
                ctx.fillStyle = this.color.formatHEX();

                ctx.fill();
                ctx.stroke();
            },
            () => {},
            camera
        );

        this.color = color;
        this.size = size;
    }
}
