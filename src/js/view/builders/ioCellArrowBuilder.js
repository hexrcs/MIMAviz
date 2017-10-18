import * as PIXI from "pixi.js";
import {default as h} from "../../helpers";
import {default as ioLineDrawer} from "../drawers/ioLineDrawer";
import {default as ioArrowHeadDrawer} from "../drawers/ioArrowHeadDrawer";

export default function ioCellArrowBuilder(name="", alt_arrows="lr", alt_hl=false) {
  let sprite = new PIXI.Graphics();
  const [lX,lY, rX,rY] = ioHLineSpec(name, alt_arrows);
  const line = ioLineDrawer("h", lX,lY, rY-rL, alt_hl);
  sprite.addChild(line);

  const arrowHeads =[];
  switch(alt_arrows) {
    case "lr":
      arrowHeads.push(h.positionSpecs.ioHArrowHeadSpec([lX,lY, rX,rY], "l"));
      arrowHeads.push(h.positionSpecs.ioHArrowHeadSpec([lX,lY, rX,rY], "r"));
      break;
    case "l":
      arrowHeads.push(h.positionSpecs.ioHArrowHeadSpec([lX,lY, rX,rY], "l"));
      break;
    case "r":
      arrowHeads.push(h.positionSpecs.ioHArrowHeadSpec([lX,lY, rX,rY], "r"));
      break;
  }
  for (let e of arrowHeads) {
    const arrowHeadSprite = ioArrowHeadDrawer(e, alt_hl);
    sprite.addChild(arrowHeadSprite);
  }
  
  return sprite;
}
