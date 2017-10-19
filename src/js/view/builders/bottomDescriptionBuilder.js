import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {default as textDrawer} from "../drawers/textDrawer";

export default function bottomDescriptionBuilder(text="") {
  let sprite = textDrawer(text, false, "bottomDescription");
  return sprite;
}
