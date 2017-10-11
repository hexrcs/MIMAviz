// Startup house keeping
const log = console.log;
const stage = new PIXI.Container();
const renderer = PIXI.autoDetectRenderer({antialias: true, transparent: true});
document.body.appendChild(renderer.view);

// ======== INITIAL STATE ========
// Create light grey background
const backgound = new PIXI.Graphics();
stage.addChild(backgound);
backgound.beginFill(0xD8D8D8);
backgound.drawRoundedRect(0, 0, renderer.width, renderer.height, 8);

// ======== INSIDE SECTION ========
const inside = new PIXI.Graphics();
backgound.addChild(inside);
inside.beginFill(0xFFFFFF);
inside.drawRoundedRect(20, 20, 500, 460, 8);


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

renderer.render(stage);
// ======== END INITIAL STATE ========