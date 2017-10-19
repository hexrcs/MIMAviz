import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {buttonBuilder} from "../builders";

export default function upperButtonsOrganizer(
  state={
    global: {mode: "IDLE", step: 0},
    upperButton: "",
    hoverButton: ""
  },
  store
) {
  const container = new PIXI.Container();

  for(let b of ["ADD", "LDC", "LDV", "NOT", "STV"]) {
    if(b === state.upperButton) {
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
