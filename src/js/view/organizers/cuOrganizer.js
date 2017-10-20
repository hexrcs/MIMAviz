import * as PIXI from 'pixi.js';
import { cuFetchBuilder, cuExecBuilder } from '../builders';

export default function cuOrganizer (state = {global: {mode: 'IDLE', step: 0}}) {
  let container = new PIXI.Container();
  container.addChild(cuFetchBuilder(state), cuExecBuilder(state));
  return container;
}
