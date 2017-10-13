// Startup house keeping
const PIXI = require('pixi.js');

const inside = require('./containers/inside');

const log = console.log;
const app = new PIXI.Application({antialias: true, transparent: true});
document.body.appendChild(app.view);

// ======== INITIAL STATE ========
// Create light grey background
const backgound = new PIXI.Graphics();
app.stage.addChild(backgound);
backgound.beginFill(0xD8D8D8);
backgound.drawRoundedRect(0, 0, app.renderer.width, app.renderer.height, 8);

// ======== INSIDE SECTION ========
backgound.addChild(inside);

// ======== END INSIDE SECTION ========

// ======== RIGHT SECTION ========
const right = new PIXI.Container();
backgound.addChild(right);

// upper buttons for mode selection
const modeControl = new PIXI.Container();
right.addChild(modeControl);

// create and add all those mode selection buttons
// fixme 'buttons' is also to-be-refactored 
const addButton = buttons.newMode("ADD");
const ldcButton = buttons.newMode("LDC");
const ldvButton = buttons.newMode("LDV");
const notButton = buttons.newMode("NOT");
const stvButton = buttons.newMode("STV");
for (let thatButton of [addButton, ldcButton, ldvButton, notButton, stvButton]) {
    modeControl.addChild(thatButton);
}

// CU instruction list module
const viewCU = new PIXI.Graphics();
right.addChild(viewCU);
viewCU.beginFill(0xFFFFFF);
viewCU.drawRoundedRect(540, 70, 240, 360, 8);

// lower buttons for step control
const stepControl = new PIXI.Container();
right.addChild(stepControl);

// create all step control buttons but don't add them all yet
const backButton = buttons.newBack();
const startButton = buttons.newStart();
const nextButton = buttons.newNext();
const skipButton = buttons.newSkip();
stepControl.addChild(startButton); // only adding start button at start up

// ======== END RIGHT SECTION ========

// ======== DESCRIPTION SECTION ========
const description = new PIXI.Graphics();
backgound.addChild(description);
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(20, 490, 760, 100, 8);

// ======== END DESCRIPTION SECTION ========

// ======== END INITIAL STATE ========

