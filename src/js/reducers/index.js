export default function reducer(state={
  global: {mode: "IDLE", step: 0}
}, action={type: "MODE_CHANGE", payload: name}) {
  const newState = {global: {mode: state.global.mode, step: state.global.step}};
  switch(action.type) {
    case "MODE_CHANGE":
      newState.global.mode = action.payload;
      newState.global.step = 0;
      break;
    case "NAV":
      switch(action.payload) {
        case "BACK":
          newState.global.step -= 1;
          break;
        case "START":
        case "NEXT":
          newState.global.step += 1;
          break;
        case "SKIP":
          newState.global.step = 7;
          break;
        case "END":
          newState.global.step = 0;
          break;
      }
  }
  return newState;
}
