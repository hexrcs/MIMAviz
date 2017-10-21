import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { unitBuilder } from '../builders';

export default function unitOrganizer (state = {mode: 'IDLE', step: 0}) {
  let container = new PIXI.Container();
  const path = jsonParser.processInterpreter(state)['path'];
  const values = jsonParser.processInterpreter(state)['values'];
  const unitsWithValues = Object.keys(values);
  const unitsHighLighted = new Set();
  const unitsNotHighLighted = new Set();

  for (let p of path) {
    unitsHighLighted.add(p['from']);
    unitsHighLighted.add(p['to']);
  }

  for (let e of unitsWithValues) {
    if (!unitsHighLighted.has(e)) {
      unitsNotHighLighted.add(e);
    }
  }

  // make a default ALU first. if it's in the highlighted, will be overridden, literally
  container.addChild(unitBuilder('ALU'));

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

  for (let nhl of unitsNotHighLighted) {
    const unitSprite = unitBuilder(nhl, values[nhl], false);
    container.addChild(unitSprite);
  }

  return container;
}
