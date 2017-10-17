import * as PIXI from "pixi.js";
import {default as h} from "../../helpers";

export default function ioArrowHeadDrawer(arrowHead=[], alt=false) {
  const [x1,y1, x2,y2, x3,y3] = arrowHead;
  let sprite = new PIXI.Graphics();
  if(!alt) {
    sprite.beginFill(h.colorCode.BORDER);
  } else {
    sprite.beginFill(h.colorCode.INSIDE_ALT);
  }
  sprite.drawPolygon([x1,y1, x2,y2, x3,y3]);
  
  return sprite;
}
