import config from "../../config.json";

import { Message } from "../common/message";
import { Connection } from "../common/connection";
import { Renderer } from "./renderer";
import { Input } from "./input";
import { Color } from "../common/color";
import { Player } from "./objects/player";
import { AngleBetween } from "../common/helpers";
import { Vector2 } from "../common/vector";
import { Camera } from "./camera";
import { Barricade } from "./objects/barricade";

window.onload = () => {
    var renderer = new Renderer("canvas", true);
    var input = new Input(renderer.canvas);
    var socket = new WebSocket(`ws://localhost:${config.port}`);
    var multiplayer = new Connection(socket, (msg: Message) => {
        console.log(msg);
    });

    var background = Color.RandomPastel();

    var camera = new Camera();
    var player = new Player(
        camera,
        "william",
        Color.RandomNeon(),
        new Vector2(0, 0)
    );
    var barricade = new Barricade(
        camera,
        Color.RandomNeon(),
        new Vector2(100, 500)
    );

    setInterval(() => {
        if (renderer.skipFrame()) return;
        renderer.fill(background);

        var speed = 5;
        if (input.keyPressed("KeyW")) player.position.y -= speed;
        if (input.keyPressed("KeyS")) player.position.y += speed;
        if (input.keyPressed("KeyA")) player.position.x -= speed;
        if (input.keyPressed("KeyD")) player.position.x += speed;

        camera.position = player.position;

        player.angle = AngleBetween(
            player.position,
            camera.translateToWorld(input.mousePosn())
        );

        barricade.draw(renderer.ctx);
        player.draw(renderer.ctx);
    }, 1000 / 60);
};
