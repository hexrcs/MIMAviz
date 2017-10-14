const PIXI = require('pixi.js');

const cells = require('../factories/cells');

// make cells container
const insideCells = new PIXI.Container();

// STATIC - add register cells and R/W bits 'background'
const akku = cells.newCellBG("Akku");
const eins = cells.newCellBG("Eins");
const sar = cells.newCellBG("SAR");
const iar = cells.newCellBG("IAR");
const ir = cells.newCellBG("IR");
const z = cells.newCellBG("Z");
const x = cells.newCellBG("X");
const y = cells.newCellBG("Y");
const sdr = cells.newCellBG("SDR");
const r = cells.newCellBG("R");
const w = cells.newCellBG("W");
// didn't know addChile is repeatable LOL
insideCells.addChild(akku, eins, sar, iar, ir, z, x, y, sdr, r, w);

// ALU cell
const alu = cells.newALU();
insideCells.addChild(alu);

module.exports = insideCells;
