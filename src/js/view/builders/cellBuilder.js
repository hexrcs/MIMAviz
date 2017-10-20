import * as PIXI from 'pixi.js';
import * as h from '../../helpers';
import { default as textDrawer } from '../drawers/textDrawer';
import { default as cellLineDrawer } from '../drawers/cellLineDrawer';

export default function cellBuilder (name = '', value = '', alt = false) {
  let sprite = new PIXI.Container();
  if (name === 'ALU') {
    const ALULabel = textDrawer(name, alt, 'ALULabel');
    const ALULines = cellLineDrawer(name, alt);
    console.log(ALULabel);
    sprite.addChild(ALULabel, ALULines);
  } else {
    const [x, y, cellSize] = h.positionSpecs.cellSpec(name);
    const cellLabel = textDrawer(name, alt, 'cellLabel', x, y, cellSize);
    const cellValue = textDrawer(value, alt, 'cellValue', x, y, cellSize);
    const cellLines = cellLineDrawer(name, alt);
    sprite.addChild(cellLabel, cellValue, cellLines);
  }

  return sprite;
}
