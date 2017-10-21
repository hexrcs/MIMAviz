import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { rwLineDrawer, rwArrowHeadDrawer, textDrawer } from '../drawers';

export default function rwUnitArrowBuilder (name = '', alt_arrows = 'lr', alt_hl = false) {
  let sprite = new PIXI.Graphics();
  const [lX, lY, rX, rY] = positionSpecs.rwHLineSpec(name, alt_arrows);
  const line = rwLineDrawer('h', lX, lY, rX - lX, alt_hl);
  sprite.addChild(line);
  const [tX, tY, bw] = positionSpecs.bitWidthSpec(name);
  const bwText = textDrawer(bw, alt_hl, 'bitWidthText', tX, tY);
  sprite.addChild(bwText);

  const arrowHeads = [];
  switch (alt_arrows) {
    case 'lr':
      arrowHeads.push(positionSpecs.rwHArrowHeadSpec([lX, lY, rX, rY], 'l'));
      arrowHeads.push(positionSpecs.rwHArrowHeadSpec([lX, lY, rX, rY], 'r'));
      break;
    case 'l':
      arrowHeads.push(positionSpecs.rwHArrowHeadSpec([lX, lY, rX, rY], 'l'));
      break;
    case 'r':
      arrowHeads.push(positionSpecs.rwHArrowHeadSpec([lX, lY, rX, rY], 'r'));
      break;
  }
  for (let e of arrowHeads) {
    const arrowHeadSprite = rwArrowHeadDrawer(e, alt_hl);
    sprite.addChild(arrowHeadSprite);
  }

  return sprite;
}
