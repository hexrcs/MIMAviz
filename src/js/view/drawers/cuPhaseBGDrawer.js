import * as PIXI from 'pixi.js';
import * as h from '../../helpers';

export default function cuPhaseBGDrawer (name = '') {
  let sprite = new PIXI.Graphics();
  sprite.beginFill(h.colorCode.LIGHT_BG);
  switch (name) {
    case 'fetch':
      sprite.drawRect(540, 90, 240, 20);
      break;
    case 'exec':
      sprite.drawRect(540, 240, 240, 20);
      break;
  }

  return sprite;
}
