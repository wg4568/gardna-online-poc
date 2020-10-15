"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
var Renderer = /** @class */ (function () {
    function Renderer(canvasId, fullscreen) {
        if (fullscreen === void 0) { fullscreen = false; }
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        if (fullscreen)
            this.initFullscreen();
    }
    Renderer.prototype.initFullscreen = function () {
        var parent = this;
        var resize = function (event) {
            parent.canvas.width = window.innerWidth;
            parent.canvas.height = window.innerHeight;
        };
        document.body.style.margin = "0px";
        window.addEventListener("resize", resize);
        resize();
    };
    Renderer.prototype.fill = function (color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Renderer;
}());
exports.Renderer = Renderer;
