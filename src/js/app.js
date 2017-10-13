// Startup house keeping
const PIXI = require('pixi.js');

const inside = require('./containers/inside');
const right = require('./containers/right');
const bottom = require('./containers/bottom');

const log = console.log;
const app = new PIXI.Application({antialias: true, transparent: true});
document.body.appendChild(app.view);

// ======== INITIAL STATE ========
// Create light grey background
const backgound = new PIXI.Graphics();
app.stage.addChild(backgound);
backgound.beginFill(0xD8D8D8);
backgound.drawRoundedRect(0, 0, app.renderer.width, app.renderer.height, 8);

// add all section containers
backgound.addChild(inside);
backgound.addChild(right);
backgound.addChild(bottom);

// ======== END INITIAL STATE ========

