import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { rwUnitArrowBuilder, rwBusBuilder } from '../builders';

export default function rwPathOrganizer (state = {mode: 'IDLE', step: 0}) {
  let container = new PIXI.Container();
  const path = jsonParser.processInterpreter(state)['path'];
  const unitsFrom = new Set();
  const unitsTo = new Set();

  // unit arrows
  for (let p of path) {
    unitsFrom.add(p['from']);
    unitsTo.add(p['to']);
  }
  for (let c of ['Akku', 'Eins', 'X', 'Y', 'Z', 'SAR', 'IAR', 'IR', 'SDR']) {
    if (unitsFrom.has(c)) {
      container.addChild(rwUnitArrowBuilder(c, whichArrows(c, true), true));
    } else if (unitsTo.has(c)) {
      container.addChild(rwUnitArrowBuilder(c, whichArrows(c, false, true), true));
    } else {
      container.addChild(rwUnitArrowBuilder(c, whichArrows(c)));
    }
  }

  // BG main bus
  container.addChild(rwBusBuilder());

  // main bus
  for (let p of path) {
    container.addChild(rwBusBuilder(p['from'], p['to']));
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
