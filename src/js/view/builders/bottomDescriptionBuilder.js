import { textDrawer } from '../drawers';

export default function bottomDescriptionBuilder (text = '') {
  let sprite = textDrawer(text, false, 'bottomDescription');
  return sprite;
}
