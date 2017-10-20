import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {textDrawer, cuPhaseBGDrawer, cuStepBGDrawer} from "../drawers";

export default function cuFetchBuilder(
  state={global: {mode: "IDLE", step: 0}}
) {
  let sprite = new PIXI.Container();
  const allInfo = h.jsonParser.cuDisplayInterpreter(state);
  const phaseLabel = allInfo["cuUpperHeader"];
  const phaseBG = cuPhaseBGDrawer("fetch");
  sprite.addChild(phaseBG);
  const phaseText = textDrawer(phaseLabel, false, "phaseLabel", 540, 90);
  sprite.addChild(phaseText);

  if(state.global.mode === "IDLE") {
    for (let i = 0; i < 3; ++i) {
      const stepText = textDrawer(allInfo["proc"][i], false, "cuStep", 540, 110 + 20 * i);
      sprite.addChild(stepText);
    }
    return sprite;
  }

  // if in fetch phase, make a blue background for that step
  if(state.global.step < 7 && state.global.step > 0) {
    const stepBG = cuStepBGDrawer(state.global.step);
    sprite.addChild(stepBG);
  }

  // write text onto the display, the alt one in blue
  for (let i = 0; i < 6; ++i) {
    let alt = false;
    if(i === state.global.step - 1) {
      alt = true;
    }
    const stepText = textDrawer(allInfo["proc"][i], alt, "cuStep", 540, 110 + 20 * i);
    sprite.addChild(stepText);
  }

  return sprite;
}
