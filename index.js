// Startup house keeping
const log = console.log;
const stage = new PIXI.Container();
const renderer = PIXI.autoDetectRenderer({antialias: true, transparent: true, resolution: 1});
document.body.appendChild(renderer.view);
