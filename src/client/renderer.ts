import { Color } from "../common/color";
import { Vector2 } from "../common/vector";

export class Renderer {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public lastResize: number = 0;

    constructor(canvasId: string, fullscreen: boolean = false) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        if (fullscreen) this.initFullscreen();
    }

    initFullscreen() {
        var parent = this;

        var resize = (event?: Event) => {
            parent.canvas.width = window.innerWidth;
            parent.canvas.height = window.innerHeight;
            parent.lastResize = Date.now();
        };

        document.body.style.margin = "0px";
        window.addEventListener("resize", resize);

        resize();
    }

    skipFrame() {
        return this.lastResize + 100 > Date.now();
    }

    fill(color: Color) {
        this.ctx.fillStyle = color.formatHEX();
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
