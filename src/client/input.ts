import { Vector2 } from "../common/vector";

export class Input {
    private element: HTMLCanvasElement;
    private keys: Map<string, boolean> = new Map<string, boolean>();
    private mouse: Vector2 = new Vector2(0, 0);

    public allowOutOfBounds: boolean;

    constructor(element: HTMLCanvasElement, allowOutOfBounds: boolean = false) {
        this.element = element;
        this.allowOutOfBounds = allowOutOfBounds;

        var parent = this;

        document.onkeydown = (event) => {
            parent.keys.set(event.code, true);
        };

        document.onkeyup = (event) => {
            parent.keys.set(event.code, false);
        };

        document.addEventListener(
            "mousemove",
            (e) => {
                var rect = parent.element.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;

                if (
                    allowOutOfBounds ||
                    (x > 0 &&
                        y > 0 &&
                        x < parent.element.width &&
                        y < parent.element.height)
                ) {
                    parent.mouse.x = x;
                    parent.mouse.y = y;
                }
            },
            false
        );
    }

    keyPressed(key: string) {
        if (!this.keys.has(key)) return false;
        else return this.keys.get(key);
    }

    mousePosn() {
        return this.mouse;
    }
}
