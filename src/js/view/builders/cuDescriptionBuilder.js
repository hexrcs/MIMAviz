import * as PIXI from 'pixi.js';
import * as h from '../../helpers';
import { default as textDrawer } from '../drawers/textDrawer';

export default function cuDescriptionBuilder (text = '') {
  let sprite = textDrawer(text, false, 'cuDescription');
  return sprite;
}
