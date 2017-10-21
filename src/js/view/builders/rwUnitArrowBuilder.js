import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { rwLineDrawer, rwArrowHeadDrawer, textDrawer } from '../drawers';

export default function rwUnitArrowBuilder (name = '', dir = 'lr', isHighlighted = false) {
  let sprite = new PIXI.Graphics();
  const [lX, lY, rX, rY] = positionSpecs.rwHLineSpec(name, dir);
  const line = rwLineDrawer('h', lX, lY, rX - lX, isHighlighted);
  sprite.addChild(line);
  const [tX, tY, bw] = positionSpecs.bitWidthSpec(name);
  const bwText = textDrawer(bw, isHighlighted, 'bitWidthText', tX, tY);
  sprite.addChild(bwText);

  const arrowHeads = [];
  switch (dir) {
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
    const arrowHeadSprite = rwArrowHeadDrawer(e, isHighlighted);
    sprite.addChild(arrowHeadSprite);
  }

  return sprite;
}
