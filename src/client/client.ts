window.onload = () => {
    var renderer = new Renderer("canvas");

    setInterval(() => {
        renderer.fill("red");
    }, 1000 / 30);
};
