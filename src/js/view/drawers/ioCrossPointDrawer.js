import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function ioCrossPointDrawer (points = [], alt = false) {
  let sprite = new PIXI.Graphics();
  if (!alt) {
    sprite.beginFill(colorCode.BORDER);
  } else {
    sprite.beginFill(colorCode.INSIDE_ALT);
  }
  sprite.drawPolygon(points);

  return sprite;
}
