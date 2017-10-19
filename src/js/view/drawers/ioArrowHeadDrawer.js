import * as PIXI from "pixi.js";
import * as h from "../../helpers";

export default function ioArrowHeadDrawer(arrowHead=[], alt=false) {
  let sprite = new PIXI.Graphics();
  if(!alt) {
    sprite.beginFill(h.colorCode.BORDER);
  } else {
    sprite.beginFill(h.colorCode.INSIDE_ALT);
  }
  sprite.drawPolygon(arrowHead);
  
  return sprite;
}
