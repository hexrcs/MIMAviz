import * as PIXI from "pixi.js";
import {default as store} from "./store";

import {default as view} from "./view";
import {default as reducers} from "./reducers";
import {default as helpers} from "./helpers";

const app = new PIXI.Application({antialias: true, transparent: true}); // for getting the renderer details
document.body.appendChild(app.view);

export const rendererSize = {width: app.renderer.width, height: app.renderer.width};

// ======== INITIAL STATE ========
// Create light grey background
const backgound = new PIXI.Graphics();
app.stage.addChild(backgound);
backgound.beginFill(0xD8D8D8);
backgound.drawRoundedRect(0, 0, app.renderer.width, app.renderer.height, 8);

// add all section containers
backgound.addChild(inside);
backgound.addChild(right);
backgound.addChild(bottom);

// ======== END INITIAL STATE ========

