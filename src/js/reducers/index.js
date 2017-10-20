export default function reducer (state = {mode: 'IDLE', step: 0},
                                 action = {type: 'MODE_CHANGE', payload: name}) {
  const newState = {mode: state.mode, step: state.step};
  switch (action.type) {
    case 'MODE_CHANGE':
      newState.mode = action.payload;
      newState.step = 0;
      break;
    case 'NAV':
      switch (action.payload) {
        case 'BACK':
          newState.step -= 1;
          break;
        case 'START':
        case 'NEXT':
          newState.step += 1;
          break;
        case 'SKIP':
          newState.step = 7;
          break;
        case 'END':
          newState.step = 0;
          break;
      }
  }
  return newState;
}
