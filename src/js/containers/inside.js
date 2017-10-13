const PIXI = require('pixi.js');

const cells = require('../factories/cells');

const insideIOs = require('./insideIOs');

// inside section
const inside = new PIXI.Graphics();
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
// didn't know addChile is repeatable LOL
inside.addChild(akku, eins, sar, iar, ir, z, x, y, sdr, r, w);

// ALU cell
const alu = cells.newALU();
inside.addChild(alu);

// add IO arrows
inside.addChild(insideIOs);

module.exports = inside;
