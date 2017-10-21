import * as PIXI from 'pixi.js';
import * as store from './store';
import * as view from './view';

export const app = new PIXI.Application({antialias: true, transparent: true});
document.getElementById('mimaviz').appendChild(app.view);

export const rendererSize = {width: app.renderer.width, height: app.renderer.height};

app.stage.addChild(view.builders.bgBuilder());
app.stage.addChild(store.dynamicView);

store.render();
store.store.subscribe(store.render);
