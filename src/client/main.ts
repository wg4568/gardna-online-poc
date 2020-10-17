import { Renderer } from "./renderer";
import { Input } from "./input";

window.onload = () => {
    var renderer = new Renderer("canvas", true);
    var input = new Input(renderer.canvas);

    setInterval(() => {
        renderer.fill("red");
    }, 1000 / 100);
};
