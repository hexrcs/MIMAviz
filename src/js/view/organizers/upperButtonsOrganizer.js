import * as PIXI from "pixi.js";
import {default as h} from "../../helpers";
import {buttonBuilder} from "../builders";

export default function upperButtonsOrganizer(
  state={
    global: {mode: "IDLE", step: 0},
    upperButton: {alt: "", status: 0}
  }
) {
  const container = new PIXI.Container();

  for(let b of ["ADD", "LDC", "LDV", "NOT", "STV"]) {
    if(b === state.upperButton.alt) {
      const button = buttonBuilder(b, state.upperButton.status);
      container.addChild(button);
    } else {
      const button = buttonBuilder(b);
      container.addChild(button);
    }
  }

  return container;
}
