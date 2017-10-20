import * as PIXI from 'pixi.js';
import * as h from '../../helpers';
import { cellBuilder } from '../builders';

export default function cellOrganizer (state = {global: {mode: 'IDLE', step: 0}}) {
  let container = new PIXI.Container();
  const path = h.jsonParser.processInterpreter(state)['path'];
  const values = h.jsonParser.processInterpreter(state)['values'];
  const cellsWithValues = Object.keys(values);
  const cellsHighLighted = new Set();
  const cellsNotHighLighted = new Set();

  for (let p of path) {
    cellsHighLighted.add(p['from']);
    cellsHighLighted.add(p['to']);
  }

  for (let e of cellsWithValues) {
    if (!cellsHighLighted.has(e)) {
      cellsNotHighLighted.add(e);
    }
  }

  // make a default ALU first. if it's in the highlighted, will be overridden, literally
  container.addChild(cellBuilder('ALU'));

  // make highlighted cells
  for (let hl of cellsHighLighted) {
    let cellSprite;
    if (hl === 'ALU') {
      cellSprite = cellBuilder(hl, '', true);
    } else {
      cellSprite = cellBuilder(hl, values[hl], true);
    }
    container.addChild(cellSprite);
  }

  for (let nhl of cellsNotHighLighted) {
    const cellSprite = cellBuilder(nhl, values[nhl], false);
    container.addChild(cellSprite);
  }

  return container;
}
