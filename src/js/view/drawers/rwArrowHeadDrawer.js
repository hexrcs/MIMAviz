import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function rwArrowHeadDrawer (arrowHead = [], isHighlighted = false) {
  let sprite = new PIXI.Graphics();
  if (!isHighlighted) {
    sprite.beginFill(colorCode.DARK_GRAY);
  } else {
    sprite.beginFill(colorCode.RED);
  }
  sprite.drawPolygon(arrowHead);

  return sprite;
}
