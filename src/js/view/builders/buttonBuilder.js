import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {default as buttonBGDrawer} from "../drawers/buttonBGDrawer";
import {default as textDrawer} from "../drawers/textDrawer";

export default function buttonBuilder(name="", status=0, store) {
  let sprite = new PIXI.Graphics();
  sprite.interactive = true;
  sprite.buttonMode = true;
  let [x, y, width] = [0, 0, 0];
  switch(name) {
      case "ADD":
        [x, y, width] = [540, 30, 40];
        break;
      case "LDC":
        [x, y, width] = [590, 30, 40];
        break;
      case "LDV":
        [x, y, width] = [640, 30, 40];
        break;
      case "NOT":
        [x, y, width] = [690, 30, 40];
        break;
      case "STV":
        [x, y, width] = [740, 30, 40];
        break;
      case "BACK":
        [x, y, width] = [540, 450, 60];
        break;
      case "START":
      case "NEXT":
        [x, y, width] = [630, 450, 60];
        break;
      case "SKIP":
      case "END":
        [x, y, width] = [720, 450, 60];
        break;
  }

  let buttonBG = buttonBGDrawer(x,y, width, status);
  let alt = false;
  if(status === 2) {
    alt = true;
  }
  let type = "upperButtonLabel";
  if(width === 60) {
    type = "lowerButtonLabel";
  }
  const buttonText = textDrawer(name, alt, type, x,y);
  sprite.hitArea = new PIXI.RoundedRectangle(x,y, width, 20, 8);
  sprite.addChild(buttonBG, buttonText);

  if(status !== 2) {
    sprite.on("pointerover", () => {
      buttonBG = buttonBGDrawer(x,y, width, 1);
    });
    sprite.on("pointerout", () => {
      buttonBG = buttonBGDrawer(x,y, width, status);
    });
  }

  sprite.on("pointerdown", pointerDown(name, store));
  return sprite;
}

// maybe add actions here?
function pointerDown(name="", store) {
  switch(name) {
    case "ADD":
    case "LDC":
    case "LDV":
    case "NOT":
    case "STV":
      store.dispatch({type: "MODE_CHANGE", payload: name});
      break;
    case "BACK":
    case "START":
    case "NEXT":
    case "SKIP":
    case "END":
      store.dispatch({type: "NAV", payload: name});
      break;
  }
}
