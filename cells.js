function createCell(name="", x=0, y=0, size=6) {
    const me = new PIXI.Graphics();
    me.interactive = true;
    me.buttonMode = true;
    me.beginFill(0xD8D8D8);
    me.lineStyle(1, 0x979797);
    me.drawRect(x, y, size * 20, 40);
    
    // const 
    
    return me;
}