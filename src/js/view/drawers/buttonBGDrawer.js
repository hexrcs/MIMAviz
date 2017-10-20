import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function buttonBGDrawer (x = 0, y = 0, width = 0, status = 0) {
  // not strictly a sprite in PIXI though
  let sprite = new PIXI.Graphics();

  switch (status) {
    case 0:
      sprite.beginFill(colorCode.DEFAULT_ALT);
      break;
    case 1:
      sprite.lineStyle(2, colorCode.SELECT_ALT_BG, 0.75);
      sprite.beginFill(colorCode.DEFAULT_ALT);
      break;
    case 2:
      sprite.beginFill(colorCode.SELECT_ALT_BG);
  }
  sprite.drawRoundedRect(x, y, width, 20, 8);

  return sprite;
}
