import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

export default function buttonBGDrawer (x = 0, y = 0, width = 0, isPressed = false) {
  // not strictly a sprite in PIXI though
  let sprite = new PIXI.Graphics();

  switch (isPressed) {
    case false:
      sprite.beginFill(colorCode.WHITE);
      break;
    case true:
      sprite.beginFill(colorCode.BLUE);
  }
  sprite.drawRoundedRect(x, y, width, 20, 8);

  return sprite;
}
