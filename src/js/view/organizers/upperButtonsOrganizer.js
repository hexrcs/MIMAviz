import * as PIXI from 'pixi.js';
import * as h from '../../helpers';
import { buttonBuilder } from '../builders';

export default function upperButtonsOrganizer (state = {global: {mode: 'IDLE', step: 0}}, store) {
  const container = new PIXI.Container();

  for (let b of ['ADD', 'LDC', 'LDV', 'NOT', 'STV']) {
    if (b === state.global.mode) {
      const button = buttonBuilder(b, 2, store);
      container.addChild(button);
    } else {
      const button = buttonBuilder(b, 0, store);
      container.addChild(button);
    }
  }

  return container;
}
