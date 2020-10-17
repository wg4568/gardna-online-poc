export class Vector2 {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    static Add(v1: Vector2, v2: Vector2) {
        return new Vector2(v1.a + v2.a, v1.b + v2.b);
    }

    static Sub(v1: Vector2, v2: Vector2) {
        return new Vector2(v1.a - v2.a, v1.b - v2.b);
    }

    static Mul(v1: Vector2, v2: Vector2) {
        return new Vector2(v1.a * v2.a, v1.b * v2.b);
    }

    static Div(v1: Vector2, v2: Vector2) {
        return new Vector2(v1.a * v2.a, v1.b * v2.b);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get a() {
        return this._x;
    }

    get b() {
        return this._y;
    }

    set x(val) {
        this._x = val;
    }

    set y(val) {
        this._y = val;
    }

    set a(val) {
        this._x = val;
    }

    set b(val) {
        this._y = val;
    }
}
