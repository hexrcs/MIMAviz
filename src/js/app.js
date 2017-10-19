import * as PIXI from "pixi.js";
import {default as store} from "./store";

import * as view from "./view";
import * as reducers from "./reducers";
import * as helpers from "./helpers";

const app = new PIXI.Application({antialias: true, transparent: true}); // for getting the renderer details
document.body.appendChild(app.view);

export const rendererSize = {width: app.renderer.width, height: app.renderer.width};

app.stage.addChild(view.builders.bgBuilder());

// ======== END INITIAL STATE ========

