import * as PIXI from "pixi.js";
import {default as h} from "../../helpers";

export default function buttonBGDrawer(type="", x=0, y=0, status=0) {
  // not strictly a sprite in PIXI though
  let sprite = new PIXI.Graphics();

  switch(status) {
    case 0:
      sprite.beginFill(h.colorCode.DEFAULT_BG);
      break;
    case 1:
      sprite.lineStyle(2, h.colorCode.SELECT_ALT_BG, 0.75);
      sprite.beginFill(h.colorCode.DEFAULT_BG);
      break;
    case 2:
      sprite.beginFill(h.colorCode.SELECT_ALT_BG);
  }

  if(type === "upperButtonBG") {
    sprite.drawRoundedRect(x,y, 40, 20, 8);
  } else {
    sprite.drawRoundedRect(x,y, 60, 20, 8);
  }

  return sprite;
}
