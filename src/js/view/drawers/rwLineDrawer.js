import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function rwLineDrawer (dir = 'h', x = 0, y = 0, length = 0, alt = false) {
  let sprite = new PIXI.Graphics();
  if (!alt) {
    sprite.lineStyle(4, colorCode.BORDER);
  } else {
    sprite.lineStyle(4, colorCode.INSIDE_ALT);
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
