import { Color } from "../common/color";
import { Vector2 } from "../common/vector";
import { Camera } from "./camera";

export class Sprite {
    public drawRotated: (ctx: CanvasRenderingContext2D) => any;
    public drawStatic: (ctx: CanvasRenderingContext2D) => any;
    public camera: Camera;

    constructor(
        drawRotated: (ctx: CanvasRenderingContext2D) => any,
        drawStatic: (ctx: CanvasRenderingContext2D) => any,
        camera: Camera
    ) {
        this.drawRotated = drawRotated;
        this.drawStatic = drawStatic;
        this.camera = camera;
    }

    draw(
        ctx: CanvasRenderingContext2D,
        posn: Vector2,
        angle: number = 0,
        scale: Vector2 = new Vector2(1, 1)
    ) {
        var drawPosn = this.camera.translateToCanvas(posn);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(drawPosn.x, drawPosn.y);

        ctx.rotate(angle);
        ctx.scale(scale.x, scale.y);

        this.drawRotated(ctx);

        ctx.rotate(-angle);

        this.drawStatic(ctx);

        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
