import { default as textDrawer } from '../drawers/textDrawer';

export default function cuDescriptionBuilder (text = '') {
  let sprite = textDrawer(text, false, 'cuDescription');
  return sprite;
}
