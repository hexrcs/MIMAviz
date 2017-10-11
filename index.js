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

// TODO create the ALU cell
// TODO draw the init bus

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

