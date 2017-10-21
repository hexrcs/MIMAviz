import * as PIXI from 'pixi.js';
import {colorCode, positionSpecs} from '../../helpers';

export default function unitLineDrawer (name = '', isHighlighted = false) {
  let sprite = new PIXI.Graphics();
  if (!isHighlighted) {
    sprite.lineStyle(1, colorCode.DARK_GRAY);
  } else {
    sprite.lineStyle(2, colorCode.RED);
  }

  if (name === 'ALU') {
    sprite.drawPolygon(
      [340, 260, 300, 300, 360, 300, 370, 290, 380, 300, 440, 300, 400, 260, 340, 260]
    );
  } else {
    const [x, y, unitSize] = positionSpecs.unitSpec(name);
    sprite.drawRect(x, y, unitSize * 20, 40);
    // horizontal
    sprite.moveTo(x, y + 20);
    sprite.lineTo(x + unitSize * 20, y + 20);
    // vertical
    for (let i = 1; i < unitSize; ++i) {
      sprite.moveTo(x + i * 20, y + 20);
      sprite.lineTo(x + i * 20, y + 40);
    }
  }

  return sprite;
}
