import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { unitBuilder } from '../builders';

export default function unitOrganizer (state = {mode: 'IDLE', step: 0}) {
  let container = new PIXI.Container();
  const path = jsonParser.processInterpreter(state)['path'];
  const values = jsonParser.processInterpreter(state)['values'];
  const registerUnits = Object.keys(values);
  const unitsHighLighted = new Set();
  const unitsNotHighLighted = new Set();

  for (let p of path) {
    unitsHighLighted.add(p['from']);
    unitsHighLighted.add(p['to']);
  }

  for (let e of registerUnits) {
    if (!unitsHighLighted.has(e)) {
      unitsNotHighLighted.add(e);
    }
  }

  // make highlighted units
  for (let hl of unitsHighLighted) {
    let unitSprite;
    if (hl === 'ALU') {
      unitSprite = unitBuilder(hl, '', true);
    } else {
      unitSprite = unitBuilder(hl, values[hl], true);
    }
    container.addChild(unitSprite);
  }

  if (!unitsHighLighted.has('ALU')) {
    unitsNotHighLighted.add('ALU');
  }

  for (let nhl of unitsNotHighLighted) {
    let unitSprite;
    if (nhl === 'ALU') {
      unitSprite = unitBuilder(nhl);
    } else {
      unitSprite = unitBuilder(nhl, values[nhl], false);
    }
    container.addChild(unitSprite);
  }

  return container;
}
