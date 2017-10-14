const PIXI = require('pixi.js');
module.exports = {cellSpec, newALU, newCellBG};

// return cell positions and size
function cellSpec(name="") {
    switch(name) {
        case "Akku":
            return [30, 40, 6];
        case "Eins":
            return [30, 120, 6];
        case "SAR":
            return [40, 410, 5];
        case "IAR":
            return [310, 40, 5];
        case "IR":
            return [310, 120, 6];
        case "Z":
            return [310, 200, 6];
        case "X":
            return [240, 330, 6];
        case "Y":
            return [380, 360, 6];
        case "SDR":
            return [250, 410, 6];
        case "R":
            return [420, 420, 1];
        case "W":
            return [460, 420, 1];
        default:
            return [];
    }
}

function newCellBG(name="") {
    const [x, y, size] = cellSpec(name);
    const me = new PIXI.Graphics();
    me.beginFill(0xD8D8D8);
    me.lineStyle(1, 0x979797);
    me.drawRect(x, y, size * 20, 40);
    
    // draw horizontal line
    const hLine = new PIXI.Graphics();
    hLine.lineStyle(1, 0x979797);
    hLine.moveTo(x, y + 20);
    hLine.lineTo(x + size * 20, y + 20);
    me.addChild(hLine);

    // draw vertical lines
    for (let i = 1; i < size; ++i) {
        const vLine = new PIXI.Graphics();
        vLine.lineStyle(1, 0x979797);
        vLine.moveTo(x + i * 20, y + 20);
        vLine.lineTo(x + i * 20, y + 40);
        me.addChild(vLine);
    }

    // add names to cell
    const text = new PIXI.Text(name, {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = x + size * 20 / 2;
    text.y = y + 20 / 2;
    me.addChild(text);

    return me;
}

function newALU() {
    const me = new PIXI.Graphics();
    me.beginFill(0xD8D8D8);
    me.lineStyle(1, 0x979797);
    // draw an ALU cell using the path points
    me.drawPolygon([340,260, 300,300, 360,300, 370,290, 380,300, 440,300, 400,260, 340,260]);

    const text = new PIXI.Text("ALU", {fontFamily: "Courier", fontSize: '12pt'});
    text.anchor.set(0.5, 0.5);
    text.x = 370;
    text.y = 275;
    me.addChild(text);
    
    return me;
}
