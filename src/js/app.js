// Startup house keeping
const buttons = require('./modules/buttons');
const ioarrows = require('./modules/ioarrows');
const cells = require('./modules/cells');
const PIXI = require('pixi.js');

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
const inside = new PIXI.Graphics();
backgound.addChild(inside);
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(20, 20, 500, 460, 8);

// add register cells and R/W bits - they all have same format
const akku = cells.newCell("Akku", 30, 40, 6);
const eins = cells.newCell("Eins", 30, 120, 6);
const sar = cells.newCell("SAR", 40, 410, 5);
const iar = cells.newCell("IAR", 310, 40, 5);
const ir = cells.newCell("IR", 310, 120, 6);
const z = cells.newCell("Z", 310, 200, 6);
const x = cells.newCell("X", 240, 330, 6);
const y = cells.newCell("Y", 380, 360, 6);
const sdr = cells.newCell("SDR", 250, 410, 6);
const r = cells.newCell("R", 420, 420, 1);
const w = cells.newCell("W", 460, 420, 1);
for (let thatCell of [akku, eins, sar, iar, ir, z, x, y, sdr, r, w]) {
    inside.addChild(thatCell);
}

// ALU cell
const alu = cells.newALU();
inside.addChild(alu);

// make IO arrows/buses container
const insideIOs = new PIXI.Container();
inside.addChild(insideIOs);

// draw init arrows
const mainBus = ioarrows.newUD("Main", 200,30, 200,460);
const akkuIO = ioarrows.newLR("Akku", 150,60, 198,60);
const einsIO = ioarrows.newLR("Eins", 150,140, 198,140, false);
const sarIO = ioarrows.newLR("SAR", 140,430, 198,430, true, false);
const iarIO = ioarrows.newLR("IAR", 202,60, 310,60);
const irIO = ioarrows.newLR("IR", 202,140, 310,140);
const zIO = ioarrows.newLR("Z", 202,220, 310,220, true, false);
const xIO = ioarrows.newLR("X", 202,350, 240,350, false);
const yIO = ioarrows.newLR("Y", 202,380, 380,380, false);
const sdrIO = ioarrows.newLR("SDR", 202,430, 250,430);
const aluX = ioarrows.newUD("ALU-X", 340,300, 340,330, true, false);
const aluY = ioarrows.newUD("ALU-Y", 400,300, 400,360, true, false);
const aluZ = ioarrows.newUD("ALU-Z", 370,240, 370,260, true, false);
for (let thatArrow of [mainBus, akkuIO, einsIO, sarIO, iarIO, irIO, zIO, xIO, yIO, sdrIO, aluX, aluY, aluZ]) {
    inside.addChild(thatArrow);
} // TODO break down the mainBus into smaller pieces for better animation

// TODO create number cells inside register cells, might wanna make a function somewhere

// ======== END INSIDE SECTION ========

// ======== RIGHT SECTION ========
const right = new PIXI.Container();
backgound.addChild(right);

// upper buttons for mode selection
const modeControl = new PIXI.Container();
right.addChild(modeControl);

// create and add all those mode selection buttons
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

