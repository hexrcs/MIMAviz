const PIXI = require('pixi.js');

const bottom = new PIXI.Graphics();

bottom.beginFill(0xFFFFFF);
bottom.drawRoundedRect(20, 490, 760, 100, 8);

module.exports = bottom;
