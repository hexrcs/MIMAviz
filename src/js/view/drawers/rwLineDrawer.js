import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function rwLineDrawer (dir = 'h', x = 0, y = 0, length = 0, isHighlighted = false) {
  let sprite = new PIXI.Graphics();
  if (!isHighlighted) {
    sprite.lineStyle(4, colorCode.DARK_GRAY);
  } else {
    sprite.lineStyle(4, colorCode.RED);
  }

  let [dx, dy] = [x, y];
  switch (dir) {
    case 'h':
      dx += length;
      break;
    case 'v':
      dy += length;
      break;
  }
  sprite.moveTo(x, y);
  sprite.lineTo(dx, dy);

  return sprite;
}
