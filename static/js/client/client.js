"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = require("./renderer");
window.onload = function () {
    var renderer = new renderer_1.Renderer("canvas");
    console.log("wow!");
    setInterval(function () {
        renderer.fill("red");
    }, 1000 / 30);
};
