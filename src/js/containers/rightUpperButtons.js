const PIXI = require('pixi.js');

const buttons = require('../factories/buttons');

const rightUpperButtons = new PIXI.Container();

// create and add all those mode selection buttons
const addButton = buttons.newMode("ADD");
const ldcButton = buttons.newMode("LDC");
const ldvButton = buttons.newMode("LDV");
const notButton = buttons.newMode("NOT");
const stvButton = buttons.newMode("STV");

rightUpperButtons.addChild(addButton, ldcButton, ldvButton, notButton, stvButton);

module.exports = rightUpperButtons;
