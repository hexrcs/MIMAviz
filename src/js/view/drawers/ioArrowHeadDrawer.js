import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function ioArrowHeadDrawer (arrowHead = [], alt = false) {
  let sprite = new PIXI.Graphics();
  if (!alt) {
    sprite.beginFill(colorCode.BORDER);
  } else {
    sprite.beginFill(colorCode.INSIDE_ALT);
  }
  sprite.drawPolygon(arrowHead);

  return sprite;
}
