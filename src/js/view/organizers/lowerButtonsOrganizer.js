import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { buttonBuilder } from '../builders';

export default function lowerButtonsOrganizer (state = {mode: 'IDLE', step: 0}, store) {
  const container = new PIXI.Container();

  for (let b of visibleButtons(state)) {
    const button = buttonBuilder(b, 0, store);
    container.addChild(button);
  }

  return container;
}

function visibleButtons (state = {mode: 'IDLE', step: 0}) {
  const mode = state.mode;
  const step = state.step;

  if (mode === 'IDLE') {
    return new Set();
  }

  if (step === 0) {
    return new Set().add('START');
  }

  if (step === 1) {
    return new Set().add('NEXT').add('SKIP');
  }

  if (step > 1 && step < 6) {
    return new Set().add('BACK').add('NEXT').add('SKIP');
  }

  if (step === 6) {
    return new Set().add('BACK').add('NEXT');
  }

  if (step > 6 && step < jsonParser.totalStepCount(state) - 1) {
    return new Set().add('BACK').add('NEXT').add('END');
  }

  if (step === jsonParser.totalStepCount(state) - 1) {
    return new Set().add('BACK').add('END');
  }
}
