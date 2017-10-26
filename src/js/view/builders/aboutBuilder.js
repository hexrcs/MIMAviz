import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

import { rendererSize } from '../../app';

export default function aboutBuilder (type = 'STARTUP') {
  let sprite = new PIXI.Graphics();

  makeBigBG(sprite);

  return sprite;
}

function makeBigBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.EVEN_LIGHTER_GRAY);
  sprite.drawRoundedRect(0, 0, rendererSize.width, rendererSize.height, 8);
}

function makeLeaveButton (type = 'STARTUP') {
  let bg = new PIXI.Graphics();
  bg.beginFill(colorCode.WHITE);
  bg.drawRoundedRect(560, 230, 80, 30, 8);

  let text = '';

  if (type === 'STARTUP') {
    text = 'ENTER';
  } else {
    text = 'BACK';
  }

  let textSprite = new PIXI.Text(text,
    {fontFamily: 'Arial', fontSize: '11pt', fontWeight: 'bold'}
  );
  textSprite.anchor.set(0.5, 0.5);
  textSprite.x = 560 + 80 / 2;
  textSprite.y = 230 + 30 / 2;

}

