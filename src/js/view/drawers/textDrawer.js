import * as PIXI from "pixi.js";
import * as h from "../../helpers";

// This function handles drawing every text element on the view, 
// the input x,y should be the upper left corner of the block
export default function textDrawer(text="", alt=false, type="", x=0, y=0, cellSize=0) {
  let sprite = {};

  if(!alt) {
    switch(type) {
      case "bottomDescription":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', wordWrap: true, wordWrapWidth: 100}
        );
        sprite.x = 30;
        sprite.y = 495;
        break;
      case "cellLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt'}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + cellSize * 20 / 2;
        sprite.y = y + 20 / 2;
        break;
      case "ALULabel":
        sprite = new PIXI.Text("ALU", 
          {fontFamily: "Courier", fontSize: '12pt'}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = 370;
        sprite.y = 275;
        break;
      case "cellValue":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', letterSpacing: 10}
        );
        sprite.anchor.set(1, 0.5);
        sprite.x = x + cellSize * 20 - 5;
        sprite.y = y + 20 + 20 / 2;
        break;
      case "upperButtonLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt'}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + 40 / 2;
        sprite.y = y + 20 / 2;
        break;
      case "lowerButtonLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Arial", fontSize: '11pt', fontWeight: 'bold'}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + 60 / 2;
        sprite.y = y + 20 / 2;
        break;
      case "phaseLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', fontWeight: 'bold'}
        );
        sprite.anchor.set(0, 0.5);
        sprite.x = x + 5;
        sprite.y = y + 20 / 2;
        break;
      case "cuStep":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt'}
        );
        sprite.anchor.set(0, 0.5);
        sprite.x = x + 5;
        sprite.y = y + 20 / 2;
        break;
      case "cuDescription":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Arial", fontSize: '9pt', fontStyle: 'italic'}
        );
        sprite.anchor.set(0, 0.5);
        sprite.x = 540 + 5;
        sprite.y = 410 + 20 / 2;
        break;
    }
  } else {
    switch(type) {
      // case "bottomDescription":
      //   sprite = new PIXI.Text(text, {
      //     fontFamily: "Courier", 
      //     fontSize: '12pt', 
      //     wordWrap: true, 
      //     wordWrapWidth: 100
      //   });
      //   sprite.x = 30;
      //   sprite.y = 495;
      //   break;
      case "cellLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', fontWeight: 'bold', fill: h.colorCode.INSIDE_ALT}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + cellSize * 20 / 2;
        sprite.y = y + 20 / 2;
        break;
      case "ALULabel":
        sprite = new PIXI.Text("ALU", 
          {fontFamily: "Courier", fontSize: '12pt', fontWeight: 'bold', fill: h.colorCode.INSIDE_ALT}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = 370;
        sprite.y = 275;
        break;
      case "cellValue":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', letterSpacing: 10, fontWeight: 'bold', fill: h.colorCode.INSIDE_ALT}
        );
        sprite.anchor.set(1, 0.5);
        sprite.x = x + cellSize * 20 - 5;
        sprite.y = y + 20 + 20 / 2;
        break;
      case "upperButtonLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', fill: h.colorCode.DEFAULT_ALT}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + 20;
        sprite.y = y + 20 / 2;
        break;
      case "lowerButtonLabel":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Arial", fontSize: '11pt', fontWeight: 'bold', fill: h.colorCode.DEFAULT_ALT}
        );
        sprite.anchor.set(0.5, 0.5);
        sprite.x = x + 30;
        sprite.y = y + 20 / 2;
        break;
      // case "phaseLabel":
      //   sprite = new PIXI.Text(text, 
      //     {fontFamily: "Courier", fontSize: '12pt', fontWeight: 'bold'}
      //   );
      //   sprite.anchor.set(0, 0.5);
      //   sprite.x = x + 5;
      //   sprite.y = y + 20 / 2;
      //   break;
      case "cuStep":
        sprite = new PIXI.Text(text, 
          {fontFamily: "Courier", fontSize: '12pt', fill: h.colorCode.DEFAULT_ALT}
        );
        sprite.anchor.set(0, 0.5);
        sprite.x = x + 5;
        sprite.y = y + 20 / 2;
        break;
      // case "cuDescription":
      //   sprite = new PIXI.Text(text, 
      //     {fontFamily: "Arial", fontSize: '9pt', fontStyle: 'italic'}
      //   );
      //   sprite.anchor.set(0, 0.5);
      //   sprite.x = x + 5;
      //   sprite.y = y + 20 / 2;
      //   break;
    }
  }

  return sprite;
}
