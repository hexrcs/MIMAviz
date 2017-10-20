import * as PIXI from 'pixi.js';
import { buttonBuilder } from '../builders';

export default function upperButtonsOrganizer (state = {mode: 'IDLE', step: 0}, store) {
  const container = new PIXI.Container();

  for (let b of ['ADD', 'LDC', 'LDV', 'NOT', 'STV']) {
    if (b === state.mode) {
      const button = buttonBuilder(b, true, store);
      container.addChild(button);
    } else {
      const button = buttonBuilder(b, false, store);
      container.addChild(button);
    }
  }

  return container;
}
