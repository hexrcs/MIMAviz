const PIXI = require('pixi.js');

// TODO nobody uses this factory yet

function newDescription(text="") {
    const me = new PIXI.Text(text, {
        fontFamily: "Courier", 
        fontSize: '12pt', 
        wordWrap: true,
        wordWrapWidth: 100
    });

    me.x = 30;
    me.y = 495;
    return me;
}

function newCUContent(text="", step=1) {
    const content = step + ": " + text;
    const me = new PIXI.Text(text, {
        fontFamily: "Courier", 
        fontSize: '12pt'
    });
    me.anchor.set(0, 0.5);
    me.x = 545;
    me.y = () => {
        if (step < 7) {
            return 120 + (step - 1) * 20;
        } else {
            return 270 + (step - 7) * 20;
        }
    }
    return me;
}

function newCUTitle() {
    const text = "STEUERWERK";
    const me = new PIXI.Text(text, {
        fontFamily: "Courier", 
        fontSize: '12pt',
        fontWeight: 'bold'
    });
    me.anchor.set(0.5, 0.5);
    me.x = 540 + 240/2;
    me.y = 70 + 20/2;
    return me;
}

function newCUDescription(text="") {
    const me = new PIXI.Text(text, {
        fontFamily: "Arial", 
        fontSize: '12pt', // might need adjustments
        fontStyle: 'italic'
    });
    me.anchor.set(0, 0.5);
    me.x = 545;
    me.y = 420;
    return me;
}

function newCUFetchPhase() {
    const text = "Fetch Phase";
    const me = new PIXI.Text(text, {
        fontFamily: "Courier", 
        fontSize: '12pt',
        fontWeight: 'bold'
    });
    me.anchor.set(0, 0.5);
    me.x = 545;
    me.y = 100;
    return me;
}

function newCUExecutePhase() {
    const text = "Execute Phase";
    const me = new PIXI.Text(text, {
        fontFamily: "Courier", 
        fontSize: '12pt',
        fontWeight: 'bold'
    });
    me.x = 545;
    me.y = 250;
    return me;
}

function newCellValue(text="unbek.", x=0, y=0, size=6) {
    const me = new PIXI.Text(text, {fontFamily: "Courier", fontSize: '12pt', letterSpacing: 10});
    me.anchor.set(1, 0.5);
    me.x = x + size * 20 - 5;
    me.y = y + 20 + 20 / 2;

    return me;
}

module.exports = {
    newDescription, 
    newCUContent, 
    newCUTitle, 
    newCUDescription, 
    newCUFetchPhase, 
    newCUExecutePhase
};