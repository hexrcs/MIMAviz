import * as PIXI from 'pixi.js';
import { positionSpecs } from '../../helpers';
import { rwLineDrawer, rwCrossPointDrawer } from '../drawers';

export default function rwBusBuilder (from = '', to = '') {
  let sprite = new PIXI.Graphics();

  // background layer
  const bgLayer = rwLineDrawer('v', 200, 60, 370);
  sprite.addChild(bgLayer);

  // colorful highlighted top
  let [y1, y2, p1, p2] = [0, 0, 0, 0];
  switch (from) {
    case 'Akku':
    case 'IAR':
      y1 = 60;
      p1 = 1;
      break;
    case 'Eins':
    case 'IR':
      p1 = 2;
      y1 = 140;
      break;
    case 'Z':
      p1 = 3;
      y1 = 220;
      break;
    case 'X':
      p1 = 4;
      y1 = 350;
      break;
    case 'Y':
      p1 = 5;
      y1 = 380;
      break;
    case 'SAR':
    case 'SDR':
      p1 = 6;
      y1 = 430;
      break;
  }
  switch (to) {
    case 'Akku':
    case 'IAR':
      p2 = 1;
      y2 = 60;
      break;
    case 'Eins':
    case 'IR':
      p2 = 2;
      y2 = 140;
      break;
    case 'Z':
      p2 = 3;
      y2 = 220;
      break;
    case 'X':
      p2 = 4;
      y2 = 350;
      break;
    case 'Y':
      p2 = 5;
      y2 = 380;
      break;
    case 'SAR':
    case 'SDR':
      p2 = 6;
      y2 = 430;
      break;
  }

  if (y1 > y2) {
    [y1, y2] = [y2, y1];
  }

  const length = y2 - y1;
  const hlLayer = rwLineDrawer('v', 200, y1, length, true);
  sprite.addChild(hlLayer);

  if (p1 > p2) {
    [p1, p2] = [p2, p1];
  }

  for (let i = 1; i <= 6; ++i) {
    if (p1 <= i && i <= p2) {
      const xPoint = rwCrossPointDrawer(positionSpecs.rwCrossPointSpec(i), true);
      sprite.addChild(xPoint);
    } else {
      const xPoint = rwCrossPointDrawer(positionSpecs.rwCrossPointSpec(i), false);
      sprite.addChild(xPoint);
    }
  }

  return sprite;
}
