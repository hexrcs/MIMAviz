import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {textDrawer, cuPhaseBGDrawer, cuStepBGDrawer} from "../drawers";

export default function cuExecBuilder(
  state={global: {mode: "IDLE", step: 0}}
) {
  let sprite = new PIXI.Container();
  const allInfo = h.jsonParser(state);
  const phaseLabel = allInfo["cuLowerHeader"];
  const phaseBG = cuPhaseBGDrawer("exec");
  sprite.addChild(phaseBG);
  const phaseText = textDrawer(phaseLabel, false, "phaseLabel", 540, 240);
  sprite.addChild(phaseText);

  if(state.global.mode === "IDLE") {
    return sprite;
  }

  // if in exec phase, make a blue background for that step
  if(state.global.step > 6 && state.global.step < allInfo["proc"].length + 1) {
    const stepBG = cuStepBGDrawer(state.global.step);
    sprite.addChild(stepBG);
  }

  // write text onto the display, the alt one in blue
  for (let i = 6; i < allInfo["proc"].length; ++i) {
    let alt = false;
    if(i === state.global.step - 1) {
      alt = true;
    }
    const stepText = textDrawer(allInfo["proc"][i], alt, "cuStep", 540, 260 + 20 * (i - 6));
    sprite.addChild(stepText);
  }

  return sprite;
}
