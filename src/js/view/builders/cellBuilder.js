import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { cellLineDrawer, textDrawer } from '../drawers';

export default function cellBuilder (name = '', value = '', alt = false) {
  let sprite = new PIXI.Container();
  if (name === 'ALU') {
    const ALULabel = textDrawer(name, alt, 'ALULabel');
    const ALULines = cellLineDrawer(name, alt);
    sprite.addChild(ALULabel, ALULines);
  } else {
    const [x, y, cellSize] = positionSpecs.cellSpec(name);
    const cellLabel = textDrawer(name, alt, 'cellLabel', x, y, cellSize);
    const cellValue = textDrawer(value, alt, 'cellValue', x, y, cellSize);
    const cellLines = cellLineDrawer(name, alt);
    sprite.addChild(cellLabel, cellValue, cellLines);
  }

  return sprite;
}
