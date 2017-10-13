const PIXI = require('pixi.js');

const insideIOs = require('./insideIOs');
const insideCells = require('./insideCells');

const inside = new PIXI.Graphics();
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(20, 20, 500, 460, 8);

// add contents
inside.addChild(insideCells);
inside.addChild(insideIOs);

// TODO create number cells inside register cells, might wanna make a function somewhere

module.exports = inside;
