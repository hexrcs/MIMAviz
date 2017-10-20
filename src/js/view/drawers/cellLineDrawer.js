import * as PIXI from 'pixi.js';
import {colorCode, positionSpecs} from '../../helpers';

export default function cellLineDrawer (name = '', alt = false) {
  let sprite = new PIXI.Graphics();
  if (!alt) {
    sprite.lineStyle(1, colorCode.BORDER);
  } else {
    sprite.lineStyle(2, colorCode.INSIDE_ALT);
  }

  if (name === 'ALU') {
    sprite.drawPolygon(
      [340, 260, 300, 300, 360, 300, 370, 290, 380, 300, 440, 300, 400, 260, 340, 260]
    );
  } else {
    const [x, y, cellSize] = positionSpecs.cellSpec(name);
    sprite.drawRect(x, y, cellSize * 20, 40);
    // horizontal
    sprite.moveTo(x, y + 20);
    sprite.lineTo(x + cellSize * 20, y + 20);
    // vertical
    for (let i = 1; i < cellSize; ++i) {
      sprite.moveTo(x + i * 20, y + 20);
      sprite.lineTo(x + i * 20, y + 40);
    }
  }

  return sprite;
}
