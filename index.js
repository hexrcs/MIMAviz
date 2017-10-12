// Startup house keeping
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
const akku = createCell("Akku", 30, 40, 6);
const eins = createCell("Eins", 30, 120, 6);
const sar = createCell("SAR", 40, 410, 5);
const iar = createCell("IAR", 310, 40, 5);
const ir = createCell("IR", 310, 120, 6);
const z = createCell("Z", 310, 200, 6);
const x = createCell("X", 240, 330, 6);
const y = createCell("Y", 380, 360, 6);
const sdr = createCell("SDR", 250, 410, 6);
const r = createCell("R", 420, 420, 1);
const w = createCell("W", 460, 420, 1);
for (let thatCell of [akku, eins, sar, iar, ir, z, x, y, sdr, r, w]) {
    inside.addChild(thatCell);
}

// ALU cell
const alu = createALU();
inside.addChild(alu);

// make IO arrows/buses container
const insideIOs = new PIXI.Container();
inside.addChild(insideIOs);

// draw init arrows
const mainBus = createUDArrow("Main", 200,30, 200,460);
const akkuIO = createLRArrow("Akku", 150,60, 198,60);
const einsIO = createLRArrow("Eins", 150,140, 198,140, false);
const sarIO = createLRArrow("SAR", 140,430, 198,430, true, false);
const iarIO = createLRArrow("IAR", 202,60, 310,60);
const irIO = createLRArrow("IR", 202,140, 310,140);
const zIO = createLRArrow("Z", 202,220, 310,220, true, false);
const xIO = createLRArrow("X", 202,350, 240,350, false);
const yIO = createLRArrow("Y", 202,380, 380,380, false);
const sdrIO = createLRArrow("SDR", 202,430, 250,430);
const aluX = createUDArrow("ALU-X", 340,300, 340,330, true, false);
const aluY = createUDArrow("ALU-Y", 400,300, 400,360, true, false);
const aluZ = createUDArrow("ALU-Z", 370,240, 370,260, true, false);
for (let thatArrow of [mainBus, akkuIO, einsIO, sarIO, iarIO, irIO, zIO, xIO, yIO, sdrIO, aluX, aluY, aluZ]) {
    inside.addChild(thatArrow);
} // TODO break down the mainBus into smaller pieces for better animation

// TODO create number cells inside register cells, might wanna make a function somewhere

// ======== END INSIDE SECTION ========

// ======== RIGHT SECTION ========
const right = new PIXI.Container();
backgound.addChild(right);

// upper bottons for mode selection
const modeControl = new PIXI.Container();
right.addChild(modeControl);

// create and add all those mode selection buttons
const addButton = createModeButton("ADD");
const ldcButton = createModeButton("LDC");
const ldvButton = createModeButton("LDV");
const notButton = createModeButton("NOT");
const stvButton = createModeButton("STV");
for (let thatButton of [addButton, ldcButton, ldvButton, notButton, stvButton]) {
    modeControl.addChild(thatButton);
}

// CU instruction list module
const viewCU = new PIXI.Graphics();
right.addChild(viewCU);
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(540, 70, 240, 360, 8);

// lower bottons for step control
const stepControl = new PIXI.Container();
right.addChild(stepControl);

// create all step control buttons but don't add them all yet
const backButton = createBackButton();
const startButton = createStartButton();
const nextButton = createNextButton();
const skipButton = createSkipButton();
stepControl.addChild(startButton); // only adding start button at start up

// ======== END RIGHT SECTION ========

// ======== DESCRIPTION SECTION ========
const description = new PIXI.Graphics();
backgound.addChild(description);
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(20, 490, 760, 100, 8);

// ======== END DESCRIPTION SECTION ========

// ======== END INITIAL STATE ========

