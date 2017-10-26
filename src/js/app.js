/*
 MIMAviz - A modern browser friendly MIMA visualization

 MIMA (Minimalmachine) is a simple processor model based on von Neumann architecture, used for
 educational purposes at the KIT. It is developed by Prof. Tamim Asfour.

 This is a rewrite project of the MIMA simulation (http://ti.ira.uka.de/Visualisierungen/Mima)
 in Javascript and friends, created by Xiaoru Li and distributed under MIT license (see LICENSE).

 The German descriptions in this visualization were largely borrowed from the original MIMA
 simulation, created by Thorsten Rapp and supervised by Prof. Tamim Asfour.
 */

import * as PIXI from 'pixi.js';
import * as store from './store';

export const app = new PIXI.Application({antialias: true, transparent: true});
document.getElementById('mimaviz').appendChild(app.view);

export const rendererSize = {width: app.renderer.width, height: app.renderer.height};

app.stage.addChild(store.canvasView);

store.render();
store.store.subscribe(store.render);
