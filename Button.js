// static variables
let upperCount = 0;
let lowerCount = 0;

// Button factory
function Button(name="", isUpper=false) {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xFFFFFF);
    if (isUpper) {
        me.drawRoundedRect(540 + 50 * upper, 30, 40, 20, 8);
        me.hitArea = new PIXI.RoundedRectangle(540 + 50 * upperCount, 30, 40, 20, 8)
        const text = new PIXI.Text(name, {fontFamily: "Courier", fontSize: '12pt'});
        text.anchor.set(0.5, 0.5);
        text.x = 540 + 20 + 50 * upperCount;
        text.y = 40;
        me.addChild(text);
        ++upperCount;
    } else {
        me.drawRoundedRect(540 + 90 * upper, 450, 60, 20, 8);
        me.hitArea = new PIXI.RoundedRectangle(540 + 90 * lowerCount, 450, 60, 20, 8)
        const text = new PIXI.Text(name, {fontFamily: "Courier", fontSize: '12pt'});
        text.anchor.set(0.5, 0.5);
        text.x = 540 + 30 + 90 * lowerCount;
        text.y = 450;
        me.addChild(text);
        ++lowerCount;
    }
    // TODO I think it's better to make lower buttons individually

    parent.addChild(me);
    return me;
}
