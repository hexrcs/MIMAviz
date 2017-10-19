import * as PIXI from "pixi.js";
import * as h from "../../helpers";
import {default as bottomDescriptionBuilder} from "../builders/bottomDescriptionBuilder";
import {default as cuDescriptionBuilder} from "../builders/cuDescriptionBuilder";

export default function descriptionOrganizer(
  state={global: {mode: "IDLE", step: 0}}
) {
  let container = new PIXI.Container();
  const text = h.jsonParser.descriptionInterpreter(state);
  const bottomSprite = bottomDescriptionBuilder(text.bottomDescription);
  const cuSprite = cuDescriptionBuilder(text.cuDescription);

  container.addChild(bottomSprite, cuSprite);
  return container;
}
