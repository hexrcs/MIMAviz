import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { unitLineDrawer, textDrawer } from '../drawers';

export default function unitBuilder (name = '', value = '', isHighlighted = false) {
  let sprite = new PIXI.Container();
  if (name === 'ALU') {
    const ALULabel = textDrawer(name, isHighlighted, 'ALULabel');
    const ALULines = unitLineDrawer(name, isHighlighted);
    sprite.addChild(ALULabel, ALULines);
  } else {
    const [x, y, unitSize] = positionSpecs.unitSpec(name);
    const unitLabel = textDrawer(name, isHighlighted, 'unitLabel', x, y, unitSize);
    const unitValue = textDrawer(value, isHighlighted, 'unitValue', x, y, unitSize);
    const unitLines = unitLineDrawer(name, isHighlighted);
    sprite.addChild(unitLabel, unitValue, unitLines);
  }

  return sprite;
}
