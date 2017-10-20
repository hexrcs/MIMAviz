import * as PIXI from 'pixi.js';
import { buttonBGDrawer, textDrawer } from '../drawers';

export default function buttonBuilder (name = '', isPressed = false, store) {
  let sprite = new PIXI.Graphics();
  sprite.interactive = true;
  sprite.buttonMode = true;
  let [x, y, width] = [0, 0, 0];
  switch (name) {
    case 'ADD':
      [x, y, width] = [540, 30, 40];
      break;
    case 'LDC':
      [x, y, width] = [590, 30, 40];
      break;
    case 'LDV':
      [x, y, width] = [640, 30, 40];
      break;
    case 'NOT':
      [x, y, width] = [690, 30, 40];
      break;
    case 'STV':
      [x, y, width] = [740, 30, 40];
      break;
    case 'BACK':
      [x, y, width] = [540, 450, 60];
      break;
    case 'START':
    case 'NEXT':
      [x, y, width] = [630, 450, 60];
      break;
    case 'SKIP':
    case 'END':
      [x, y, width] = [720, 450, 60];
      break;
  }

  let buttonBG = buttonBGDrawer(x, y, width, isPressed);

  let type = 'upperButtonLabel';
  if (width === 60) {
    type = 'lowerButtonLabel';
  }
  const buttonText = textDrawer(name, isPressed, type, x, y);
  sprite.hitArea = new PIXI.RoundedRectangle(x, y, width, 20, 8);
  sprite.addChild(buttonBG, buttonText);

  sprite.on('pointerdown', () => pointerDown(name, store));
  return sprite;
}

// maybe add actions here?
function pointerDown (name = '', store) {
  switch (name) {
    case 'ADD':
    case 'LDC':
    case 'LDV':
    case 'NOT':
    case 'STV':
      if (name !== store.getState().mode) {
        store.dispatch({type: 'MODE_CHANGE', payload: name});
      }
      break;
    case 'BACK':
    case 'START':
    case 'NEXT':
    case 'SKIP':
    case 'END':
      store.dispatch({type: 'NAV', payload: name});
      break;
  }
}
