import * as PIXI from "pixi.js";
import {default as h} from "../../helpers";
import {cuFetchBuilder, cuExecBuilder} from "../builders";

export default function cuDesplayOrganizer(
  state={global: {mode: "IDLE", step: 0}}
) {
  let container = new PIXI.Container();
  container.addChild(cuFetchBuilder(state), cuExecBuilder(state));
  return container;
}
