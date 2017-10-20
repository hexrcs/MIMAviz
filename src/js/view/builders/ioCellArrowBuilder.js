import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { ioLineDrawer, ioArrowHeadDrawer } from '../drawers';

export default function ioCellArrowBuilder (name = '', alt_arrows = 'lr', alt_hl = false) {
  let sprite = new PIXI.Graphics();
  const [lX, lY, rX, rY] = positionSpecs.ioHLineSpec(name, alt_arrows);
  const line = ioLineDrawer('h', lX, lY, rX - lX, alt_hl);
  sprite.addChild(line);

  const arrowHeads = [];
  switch (alt_arrows) {
    case 'lr':
      arrowHeads.push(positionSpecs.ioHArrowHeadSpec([lX, lY, rX, rY], 'l'));
      arrowHeads.push(positionSpecs.ioHArrowHeadSpec([lX, lY, rX, rY], 'r'));
      break;
    case 'l':
      arrowHeads.push(positionSpecs.ioHArrowHeadSpec([lX, lY, rX, rY], 'l'));
      break;
    case 'r':
      arrowHeads.push(positionSpecs.ioHArrowHeadSpec([lX, lY, rX, rY], 'r'));
      break;
  }
  for (let e of arrowHeads) {
    const arrowHeadSprite = ioArrowHeadDrawer(e, alt_hl);
    sprite.addChild(arrowHeadSprite);
  }

  return sprite;
}
