import * as PIXI from 'pixi.js';
import { jsonParser } from '../../helpers';
import { bottomDescriptionBuilder, cuDescriptionBuilder } from '../builders';

export default function descriptionOrganizer (state = {global: {mode: 'IDLE', step: 0}}) {
  let container = new PIXI.Container();
  const text = jsonParser.descriptionInterpreter(state);
  const bottomSprite = bottomDescriptionBuilder(text.bottomDescription);
  const cuSprite = cuDescriptionBuilder(text.cuDescription);

  container.addChild(bottomSprite, cuSprite);
  return container;
}
