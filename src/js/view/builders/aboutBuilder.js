import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

import { rendererSize } from '../../app';

export default function aboutBuilder (type = 'STARTUP', store) {
  let sprite = new PIXI.Graphics();

  makeBigBG(sprite);

  return sprite;
}

function makeBigBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.EVEN_LIGHTER_GRAY);
  sprite.drawRoundedRect(0, 0, rendererSize.width, rendererSize.height, 8);
}

function makeLeaveButton (type = 'STARTUP', store) {
  let button = new PIXI.Graphics();
  button.beginFill(colorCode.WHITE);
  button.drawRoundedRect(560, 230, 80, 30, 8);
  button.hitArea = new PIXI.RoundedRectangle(560, 230, 80, 30, 8);

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

  button.addChild(textSprite);
  button.on('pointerdown', () => pointerDown(name, store));
}

function pointerDown (store) {
  store.dispatch({type: 'MODE_CHANGE', payload: 'IDLE'});
}
