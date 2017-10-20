import * as PIXI from 'pixi.js';
import * as h from '../../helpers';
import { ioCellArrowBuilder, ioBusBuilder } from '../builders';

export default function ioPathOrganizer (state = {global: {mode: 'IDLE', step: 0}}) {
  let container = new PIXI.Container();
  const path = h.jsonParser.processInterpreter(state)['path'];
  const cellsFrom = new Set();
  const cellsTo = new Set();

  // cell arrows
  for (let p of path) {
    cellsFrom.add(p['from']);
    cellsTo.add(p['to']);
  }
  for (let c of ['Akku', 'Eins', 'X', 'Y', 'Z', 'SAR', 'IAR', 'IR', 'SDR']) {
    if (cellsFrom.has(c)) {
      container.addChild(ioCellArrowBuilder(c, whichArrows(c, true), true));
    } else if (cellsTo.has(c)) {
      container.addChild(ioCellArrowBuilder(c, whichArrows(c, false, true), true));
    } else {
      container.addChild(ioCellArrowBuilder(c, whichArrows(c)));
    }
  }

  // BG main bus
  container.addChild(ioBusBuilder());

  // main bus
  for (let p of path) {
    container.addChild(ioBusBuilder(p['from'], p['to']));
  }

  return container;
}

function whichArrows (name = '', from = false, to = false) {
  switch (name) {
    case 'Akku':
      if (to) {
        return 'l';
      }
      if (from) {
        return 'r';
      }
      if (!(from || to)) {
        return 'lr';
      }
    case 'Eins':
    case 'X':
    case 'Y':
      return 'r';
    case 'Z':
    case 'SAR':
      return 'l';
    case 'IAR':
    case 'IR':
    case 'SDR':
      if (from) {
        return 'l';
      }
      if (to) {
        return 'r';
      }
      if (!(from || to)) {
        return 'lr';
      }
  }
}
