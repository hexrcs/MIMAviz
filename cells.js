function createCell(name="", x=0, y=0, size=6) {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
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