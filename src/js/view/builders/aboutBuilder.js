import * as PIXI from 'pixi.js';
import { colorCode } from '../../helpers';

import { rendererSize } from '../../app';

export default function aboutBuilder (type = 'STARTUP', store) {
  let sprite = new PIXI.Graphics();

  makeBigBG(sprite);
  makeLogo(sprite);
  makeTitleDescription(sprite);
  makeCreditDescription(sprite);
  let button = buildLeaveButton(type, store);
  sprite.addChild(button);

  makeClickableTexts(sprite);
  return sprite;
}

function makeBigBG (sprite = new PIXI.Graphics()) {
  sprite.beginFill(colorCode.EVEN_LIGHTER_GRAY);
  sprite.drawRoundedRect(0, 0, rendererSize.width, rendererSize.height, 8);
}

function makeLogo (sprite = new PIXI.Graphics()) {
  let logo = new PIXI.Text('MIMAviz',
    {fontFamily: 'Arial', fontSize: '36pt', fontWeight: 'bold'}
  );
  logo.x = 180;
  logo.y = 95;
  sprite.addChild(logo);
}

function makeTitleDescription (sprite = new PIXI.Graphics()) {
  let text =
    'Eine Visualisierung für die Minimalmaschine, ' +
    'ein vereinfachtes CPU Modell basierend auf dem von-Neumann-Prinzip';

  let textSprite = new PIXI.Text(text,
    {fontFamily: 'Arial', fontSize: '11pt', fontWeight: 'bold', wordWrap: true, wordWrapWidth: 450}
  );
  textSprite.x = 180;
  textSprite.y = 160;

  sprite.addChild(textSprite);
}

function makeCreditDescription (sprite = new PIXI.Graphics()) {
  let text =
    'Die ursprüngliche Arbeit bei der Entwicklung der MIMA-Architektur und deren Befehlssatz ' +
    'wurde von Prof. Tamim Asfour geleistet.';

  let textSprite = new PIXI.Text(text,
    {
      fontFamily: 'Arial', fontSize: '11pt', fontWeight: 'bold',
      align: 'center', wordWrap: true, wordWrapWidth: 490
    }
  );
  textSprite.x = 160;
  textSprite.y = 480;

  sprite.addChild(textSprite);
}

function makeClickableTexts (sprite = new PIXI.Graphics()) {
  let kitText = 'Mehr über MIMA-Architektur und Technische Informatik am KIT - ' +
    'http://ti.ira.uka.de';
  let githubText = 'Mehr über das MIMAviz Project von Xiaoru Li - https://github.com/hexrcs/MIMAviz';

  let kitLink = new PIXI.Text(kitText,
    {fontFamily: 'Arial', fontSize: '9pt', fontStyle: 'italic', fill: colorCode.BLUE_LINK}
  );
  let githubLink = new PIXI.Text(githubText,
    {fontFamily: 'Arial', fontSize: '9pt', fontStyle: 'italic', fill: colorCode.BLUE_LINK}
  );

  kitLink.anchor.set(1, 0.5);
  kitLink.x = 760;
  kitLink.y = 560;
  let kitButton = new PIXI.Container();

  kitButton.interactive = true;
  kitButton.buttonMode = true;
  kitButton.hitArea = kitLink.getBounds();
  kitButton.addChild(kitLink);
  kitButton.on('pointerdown', () => window.open('http://ti.ira.uka.de/'));

  githubLink.anchor.set(1, 0.5);
  githubLink.x = 760;
  githubLink.y = 580;
  let githubButton = new PIXI.Container();

  githubButton.interactive = true;
  githubButton.buttonMode = true;
  githubButton.hitArea = githubLink.getBounds();
  githubButton.addChild(githubLink);
  githubButton.on('pointerdown', () => window.open('https://github.com/hexrcs/MIMAviz'));

  sprite.addChild(kitButton, githubButton);
}

function buildLeaveButton (type = 'STARTUP', store) {
  let button = new PIXI.Graphics();
  button.beginFill(colorCode.BLUE);
  button.drawRoundedRect(560, 230, 80, 30, 8);
  button.interactive = true;
  button.buttonMode = true;
  button.hitArea = new PIXI.RoundedRectangle(560, 230, 80, 30, 8);

  let text = '';

  if (type === 'STARTUP') {
    text = 'ENTER';
  } else {
    text = 'back';
  }

  let textSprite = new PIXI.Text(text,
    {fontFamily: 'Arial', fontSize: '11pt', fontWeight: 'bold'}
  );
  textSprite.anchor.set(0.5, 0.5);
  textSprite.x = 560 + 80 / 2;
  textSprite.y = 230 + 30 / 2;

  button.addChild(textSprite);
  button.on('pointerdown', () => store.dispatch({type: 'MODE_CHANGE', payload: 'IDLE'}));
  return button;
}
