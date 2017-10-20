import * as PIXI from "pixi.js";
import * as h from "../../helpers";

export default function cuStepBGDrawer(step=0) {
  let sprite = new PIXI.Graphics();
  sprite.beginFill(h.colorCode.SELECT_ALT_BG);
  if(step < 7 && step > 0) {
    sprite.drawRect(540, 90 + step * 20, 240, 20);
  } else if(step > 6) {
    sprite.drawRect(540, 120 + step * 20, 240, 20);
  }
  
  return sprite;
}
