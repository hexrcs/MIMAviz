import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { unitLineDrawer, textDrawer } from '../drawers';

export default function unitBuilder (name = '', value = '', alt = false) {
  let sprite = new PIXI.Container();
  if (name === 'ALU') {
    const ALULabel = textDrawer(name, alt, 'ALULabel');
    const ALULines = unitLineDrawer(name, alt);
    sprite.addChild(ALULabel, ALULines);
  } else {
    const [x, y, unitSize] = positionSpecs.unitSpec(name);
    const unitLabel = textDrawer(name, alt, 'unitLabel', x, y, unitSize);
    const unitValue = textDrawer(value, alt, 'unitValue', x, y, unitSize);
    const unitLines = unitLineDrawer(name, alt);
    sprite.addChild(unitLabel, unitValue, unitLines);
  }

  return sprite;
}
