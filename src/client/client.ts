import { Renderer } from "./renderer";

window.onload = () => {
    var renderer = new Renderer("canvas");

    console.log("wow!");

    setInterval(() => {
        renderer.fill("red");
    }, 1000 / 30);
};
