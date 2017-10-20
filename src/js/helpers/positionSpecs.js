// returns cell position (upper left corner) and size
// [x, y, size]
function cellSpec (cellName = '') {
  switch (cellName) {
    case 'Akku':
      return [30, 40, 6];
    case 'Eins':
      return [30, 120, 6];
    case 'SAR':
      return [40, 410, 5];
    case 'IAR':
      return [310, 40, 5];
    case 'IR':
      return [310, 120, 6];
    case 'Z':
      return [310, 200, 6];
    case 'X':
      return [240, 330, 6];
    case 'Y':
      return [380, 360, 6];
    case 'SDR':
      return [250, 410, 6];
    case 'R':
      return [420, 420, 1];
    case 'W':
      return [460, 420, 1];
    default:
      return [];
  }
}

// returns ioArrowHead polygon points (fills 8x8 grid)
// [x1,y1, x2,y2, x3,y3]
function ioHArrowHeadSpec (lineSpec = [], dir = '') {
  let [lX, lY, rX, rY] = lineSpec;
  let arrowHead = [];
  switch (dir) {
    case 'l':
      arrowHead = [lX - 8, lY, lX, lY + 4, lX, lY - 4];
      break;
    case 'r':
      arrowHead = [rX, rY - 4, rX, rY + 4, rX + 8, rY];
      break;
  }

  return arrowHead;
}

// horizontal line
function ioHLineSpec (cellName = '', dir = 'lr') {
  let [cx, cy, cs] = cellSpec(cellName);
  let [lX, rX, lY, rY] = [0, 0, 0, 0];
  switch (cellName) {
    case 'Akku':
    case 'Eins':
    case 'SAR':
      lX = cx + 20 * cs;
      lY = cy + 20;
      rX = 198;
      rY = lY;
      break;
    default:
      lX = 202;
      lY = cy + 20;
      rX = cx;
      rY = lY;
  }

  switch (dir) {
    case 'l':
      lX += 8;
      break;
    case 'r':
      rX -= 8;
      break;
    default:
      lX += 8;
      rX -= 8;
      break;
  }

  return [lX, lY, rX, rY, dir];
}

function ioMainLineSpec (id = 0) {
  switch (id) {
    case 1:
      return [200, 62, 200, 138];
    case 2:
      return [200, 142, 200, 218];
    case 3:
      return [200, 222, 200, 348];
    case 4:
      return [200, 352, 200, 378];
    case 5:
      return [200, 382, 200, 428];
  }
}

function ioCrossPointSpec (id = 0) {
  switch (id) {
    case 1:
      return [198, 58, 202, 58, 202, 62, 198, 62];
    case 2:
      return [198, 138, 202, 138, 202, 142, 198, 142];
    case 3:
      return [198, 218, 202, 218, 202, 222, 198, 222];
    case 4:
      return [198, 348, 202, 348, 202, 352, 198, 352];
    case 5:
      return [198, 378, 202, 378, 202, 382, 198, 382];
    case 6:
      return [198, 428, 202, 428, 202, 432, 198, 432];
  }
}

export default {cellSpec, ioHArrowHeadSpec, ioHLineSpec, ioMainLineSpec, ioCrossPointSpec};
