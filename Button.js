// make buttons a class so we can create them with "new Button()
class Button extends PIXI.Graphics {
    // if isMode == true, then it's a small upper control button
    constructor(name="", parent, isMode) {
        super();
        // const me = this;
        if (name && parent) {
            if (isMode) {
                this = new ControlButton(name, parent);
            } else {

            }
        }
    }
}

let upper = 0;
let lower = 0;

class ControlButton extends Button {
    constructor(name, parent) {
        super(name, parent, true);
        const me = this;
        me.interactive = true;
        me.buttonMode = true;
        me.beginFill(0xFFFFFF);
        me.drawRoundedRect(540 + 50 * upper, 30, 40, 20, 8);
        const text = new PIXI.Text(name, {fontFamily: "Courier", fontSize: '12pt'});
        text.anchor.set(0.5, 0.5);
        text.x = 540 + 20 + 50 * upper;
        text.y = 40;
        me.addChild(text);
        ++upper;
        parent.addChild(me);
    }
}