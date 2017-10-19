import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {buttonBuilder} from "../builders";

export default function lowerButtonsOrganizer(
  state={
    global: {mode: "IDLE", step: 0},
    lowerButton: "",
    hoverButton: ""
  },
  store
) {
  const container = new PIXI.Container();

  for(let b of visibleButtons(state)) {
    if(b === state.lowerButton) {
      const button = buttonBuilder(b, 2, store);
      container.addChild(button);
    } else if (b === state.hoverButton) {
      const button = buttonBuilder(b, 1, store);
      container.addChild(button);
    } else {
      const button = buttonBuilder(b, 0, store);
      container.addChild(button);
    }
  }

  return container;
}

function visibleButtons(
  state={
    global: {mode: "IDLE", step: 0}
  }
) {
  const mode = state.global.mode;
  const step = state.global.step;

  if(mode === "IDLE") {
    return new Set();
  }

  if(step === 0) {
    return new Set().add("START");
  }

  if(step === 1) {
    return new Set().add("NEXT").add("SKIP");
  }

  if(step > 1 && step < 6) {
    return new Set().add("BACK").add("NEXT").add("SKIP");
  }

  if(step === 6) {
    return new Set().add("BACK").add("NEXT");
  }

  if(step > 6 && step < h.jsonParser.totalStepCount(state) - 1) {
    return new Set().add("BACK").add("NEXT").add("END");
  }

  if(step === h.jsonParser.totalStepCount(state)) {
    return new Set().add("BACK").add("END");
  }
}
