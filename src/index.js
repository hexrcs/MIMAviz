//Create the renderer
var renderer = PIXI.autoDetectRenderer(600, 600);

renderer.view.style.border = "1px dashed black";

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);