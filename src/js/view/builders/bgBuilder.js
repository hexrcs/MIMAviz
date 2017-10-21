import * as PIXI from 'pixi.js';
import {colorCode, positionSpecs} from '../../helpers';

import { rendererSize } from '../../app';

export default function bgBuilder () {
  let sprite = new PIXI.Graphics();

  makeBigBG(sprite);
  makeCUDisplayBG(sprite);
  makeButtomDescriptionBG(sprite);
  makeInsideBG(sprite);
  makeArrowTipsBG(sprite);
  makeALUioArrows(sprite);
  makeCUArrowAndBitWidth(sprite);
  makeCellsBG(sprite);

  return sprite;
}

function makeBigBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.DARK_BG);
  sprite.drawRoundedRect(0, 0, rendererSize.width, rendererSize.height, 8);
}

function makeButtomDescriptionBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.DEFAULT_ALT);
  sprite.drawRoundedRect(20, 490, 760, 100, 8);
}

function makeCUDisplayBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.DARKER_BG);
  sprite.drawRoundedRect(540, 70, 240, 360, 8);
  sprite.beginFill(colorCode.DEFAULT_ALT);
  sprite.drawRect(540, 90, 240, 320);
  const textSprite = new PIXI.Text('STEUERWERK',
    {fontFamily: 'Courier', fontSize: '12pt', fontWeight: 'bold'}
  );
  textSprite.anchor.set(0.5, 0.5);
  textSprite.x = 660;
  textSprite.y = 80;
  sprite.addChild(textSprite);
}

function makeInsideBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.DEFAULT_ALT);
  sprite.drawRoundedRect(20, 20, 500, 460, 8);
}

function makeArrowTipsBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.BORDER);
  sprite.drawPolygon(
    [200, 30, 196, 38, 198, 38, 198, 58, 202, 58, 202, 38, 204, 38]
  );
  sprite.drawPolygon(
    [198, 432, 202, 432, 202, 458, 204, 458, 200, 466, 196, 458, 198, 458]
  );
}

function makeCUArrowAndBitWidth (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.BORDER);
  sprite.drawPolygon(
    [398, 160, 398, 172, 511, 172, 511, 174, 519, 170, 511, 166, 511, 168, 402, 168, 402, 160]
  );
  const textSprite = new PIXI.Text('8',
    {fontFamily: 'Courier', fontSize: '9pt'}
  );
  textSprite.x = 455;
  textSprite.y = 175;
  sprite.addChild(textSprite);
}

function makeALUioArrows (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.BORDER);
  sprite.drawPolygon([370, 240, 366, 248, 368, 248, 368, 260, 372, 260, 372, 248, 374, 248]);
  sprite.drawPolygon([340, 300, 336, 308, 338, 308, 338, 330, 342, 330, 342, 308, 344, 308]);
  sprite.drawPolygon([400, 300, 396, 308, 398, 308, 398, 360, 402, 360, 402, 308, 404, 308]);
}

function makeCellsBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.LIGHT_BG);
  // my first reducer in this life time LOL
  // but it's just like a foreach loop :-/
  ['Akku', 'Eins', 'SAR', 'IAR', 'IR', 'Z', 'X', 'Y', 'SDR', 'R', 'W'].reduce(
    (result, item) => {
      const [x, y, cellSize] = positionSpecs.cellSpec(item);
      sprite.drawRect(x, y, cellSize * 20, 40);
    }, sprite
  );

  // ALU ahhhhhhh
  sprite.drawPolygon([340, 260, 300, 300, 360, 300, 370, 290, 380, 300, 440, 300, 400, 260, 340, 260]);
}
