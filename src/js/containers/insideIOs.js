const PIXI = require('pixi.js');

const ioarrows = require('../factories/ioarrows');

// make IO arrows/buses container
const insideIOs = new PIXI.Container();

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

insideIOs.addChild(mainBus, akkuIO, einsIO, sarIO, iarIO, irIO, zIO, xIO, yIO, sdrIO, aluX, aluY, aluZ);
// TODO break down the mainBus into smaller pieces for better animation

module.exports = insideIOs;