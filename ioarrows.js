// always left to right
function createLRArrow(name="", x=0, y=0, dx=0, dy=0, l=true, r=true) {
    const me = new PIXI.Container();

    // the basic line
    const line = new PIXI.Graphics();
    line.lineStyle(4, 0x9B9B9B);
    // leave room for arrows
    line.moveTo(x + 9, y);
    line.lineTo(dx - 9, dy);
    me.addChild(line);

    const lArrow = new PIXI.Graphics();
    lArrow.beginFill(0x9B9B9B);

    const rArrow = new PIXI.Graphics();
    rArrow.beginFill(0x9B9B9B);

    if (l) {
        lArrow.drawPolygon([x,y, x+9,y+4, x+9,y-4]); // triangle
    } else {
        lArrow.drawPolygon([x,y-2, x,y+2, x+9,y+2, x+9,y-2]); // or square - to make up the end of the line
    }

    if (r) {
        rArrow.drawPolygon([dx,dy, dx-9,dy-4, dx-9,dy+4]);
    } else {
        rArrow.drawPolygon([dx,dy+2, dx,dy-2, dx-9,dy-2, dx-9,dy+2]);
    }

    me.addChild(lArrow);
    me.addChild(rArrow);
    return me;
}

// always up to down
function createUDArrow(name="", x=0, y=0, dx=0, dy=0, u=true, d=true) {
    const me = new PIXI.Container();

    // the basic line
    const line = new PIXI.Graphics();
    line.lineStyle(4, 0x9B9B9B);
    // leave room for arrows
    line.moveTo(x, y + 9);
    line.lineTo(dx, dy - 9);
    me.addChild(line);

    const uArrow = new PIXI.Graphics();
    uArrow.beginFill(0x9B9B9B);

    const dArrow = new PIXI.Graphics();
    dArrow.beginFill(0x9B9B9B);

    if (u) {
        uArrow.drawPolygon([x,y, x+4,y+9, x-4,y+9]); // triangle
    } else {
        uArrow.drawPolygon([x-2,y, x+2,y, x+2,y-9, x-2,y-9]); // or square - to make up the end of the line
    }

    if (d) {
        dArrow.drawPolygon([dx,dy, dx-4,dy-9, dx+4,dy-9]);
    } else {
        dArrow.drawPolygon([dx+2,dy, dx-2,dy, dx-2,dy-9, dx+2,dy-9]);
    }

    me.addChild(uArrow);
    me.addChild(dArrow);
    return me;
}