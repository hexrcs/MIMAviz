import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { textDrawer, cuPhaseBGDrawer, cuStepBGDrawer } from '../drawers';

export default function cuFetchBuilder (state = {mode: 'IDLE', step: 0}) {
  let sprite = new PIXI.Container();
  const allInfo = jsonParser.cuDisplayInterpreter(state);
  const phaseLabel = allInfo['cuUpperHeader'];
  const phaseBG = cuPhaseBGDrawer('fetch');
  sprite.addChild(phaseBG);
  const phaseText = textDrawer(phaseLabel, false, 'phaseLabel', 540, 90);
  sprite.addChild(phaseText);

  if (state.mode === 'IDLE') {
    for (let i = 0; i < 3; ++i) {
      const stepText = textDrawer(allInfo['proc'][i], false, 'cuStep', 540, 110 + 20 * i);
      sprite.addChild(stepText);
    }
    return sprite;
  }

  // if in fetch phase, make a blue background for that step
  if (state.step < 7 && state.step > 0) {
    const stepBG = cuStepBGDrawer(state.step);
    sprite.addChild(stepBG);
  }

  // write text onto the display, the highlighted one in blue
  for (let i = 0; i < 6; ++i) {
    let isHighlighted = false;
    if (i === state.step - 1) {
      isHighlighted = true;
    }
    const stepText = textDrawer(allInfo['proc'][i], isHighlighted, 'cuStep', 540, 110 + 20 * i);
    sprite.addChild(stepText);
  }

  return sprite;
}
