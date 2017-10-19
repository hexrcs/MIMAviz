import * as PIXI from "pixi.js";
import * as h from "../../helpers";

export default function ioLineDrawer(dir="h", x=0, y=0, length=0, alt=false) {
  let sprite = new PIXI.Graphics();
  if(!alt) {
    sprite.lineStyle(4, h.colorCode.BORDER);
  } else {
    sprite.lineStyle(4, h.colorCode.INSIDE_ALT);
  }

  let [dx, dy] = [x,y];
  switch(dir) {
    case "h":
      dy += length;
      break;
    case "v":
      dx += length;
      break;
  }
  sprite.moveTo(x, y);
  sprite.lineTo(dx, dy);

  return sprite;
}
