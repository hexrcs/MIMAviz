const PIXI = require('pixi.js');

const rightUpperButtons = require('./rightUpperButtons');
const rightCUDisplay = require('./rightCUDisplay');
const rightLowerButtons = require('./rightLowerButtons');

const right = new PIXI.Container();

right.addChild(rightUpperButtons);
right.addChild(rightCUDisplay);
right.addChild(rightLowerButtons);

module.exports = right;
