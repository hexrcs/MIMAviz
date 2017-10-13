const PIXI = require('pixi.js');

// CU instruction list module
const rightCUDisplay = new PIXI.Graphics();

rightCUDisplay.beginFill(0xFFFFFF);
rightCUDisplay.drawRoundedRect(540, 70, 240, 360, 8);

module.exports = rightCUDisplay;
