const PIXI = require('pixi.js');

const buttons = require('../factories/buttons');

const rightLowerButtons = new PIXI.Container();

const backButton = buttons.newBack();
const startButton = buttons.newStart();
const nextButton = buttons.newNext();
const skipButton = buttons.newSkip();

// only start button is visible on init
backButton.visible = false;
nextButton.visible = false;
skipButton.visible = false;

rightLowerButtons.addChild(backButton, startButton, nextButton, skipButton);

module.exports = rightLowerButtons;
