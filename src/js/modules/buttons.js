const PIXI = require('pixi.js');
module.exports = {newBack, newMode, newNext, newSkip, newStart};

// static variables
let upperCount = 0;

// Button factory
function newMode(name="") {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    me.drawRoundedRect(540 + 50 * upperCount, 30, 40, 20, 8);
    me.hitArea = new PIXI.RoundedRectangle(540 + 50 * upperCount, 30, 40, 20, 8);
    const text = new PIXI.Text(name, {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 540 + 20 + 50 * upperCount;
    text.y = 30 + 10;
    me.addChild(text);
    ++upperCount;
    return me;
}

function newBack() {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    me.drawRoundedRect(540, 450, 60, 20, 8);
    me.hitArea = new PIXI.RoundedRectangle(540, 450, 60, 20, 8);
    const text = new PIXI.Text("BACK", {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 540 + 30;
    text.y = 450 + 10;
    me.addChild(text);
    return me;
}

function newStart() {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    me.drawRoundedRect(540 + 90, 450, 60, 20, 8);
    me.hitArea = new PIXI.RoundedRectangle(540 + 90, 450, 60, 20, 8);
    const text = new PIXI.Text("START", {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 540 + 30 + 90;
    text.y = 450 + 10;
    me.addChild(text);
    return me;
}

// supposed to replace the start button when started
function newNext() {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    me.drawRoundedRect(540 + 90, 450, 60, 20, 8);
    me.hitArea = new PIXI.RoundedRectangle(540 + 90, 450, 60, 20, 8);
    const text = new PIXI.Text("NEXT", {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 540 + 30 + 90;
    text.y = 450 + 10;
    me.addChild(text);
    return me;
}

function newSkip() {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    me.drawRoundedRect(540 + 90 * 2, 450, 60, 20, 8);
    me.hitArea = new PIXI.RoundedRectangle(540 + 90 * 2, 450, 60, 20, 8);
    // weird stuff, can't load sprite from image here, don't know why, so gonna abandon that fastforward image now
    const text = new PIXI.Text("SKIP", {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 540 + 30 + 90 * 2;
    text.y = 450 + 10;
    me.addChild(text);
    return me;
}
