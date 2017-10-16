import { createStore } from "redux";
import { default as reducer} from "./reducers";

const defaultState = 
{
  global: {
    mode: "IDLE",
    step: 0
  },
  // only 1 upper button as "alt" - the "pressed" status will be indicated by state[global][mode]
  upperButton: { 
    alt: "",
    // the button background rendering is managed upon global mode, not button status
    status: 0 // 0: not touched, 1: mouse over. if click, will update mode, thus rerender BG.
  },
  lowerButton: {
    alt: "",
    // lower button responds when mouse click is released (if too hard will simplify)
    status: 0 // 0: not touched, 1: mouse over, 2: mouse down. 
  }
};

const exampleAction1 = {type: "NAV",  payload: "NEXT"};
const exampleAction2 = {type: "MOUSE_OVER", payload: "STV_BTN"};
const exampleAction3 = {type: "MOUSE_DOWN", payload: "NEXT"}; // ==> will fire exampleAction1
// or more complex payloads?

const exampleAction4 = {type: "CHANGE_MODE", payload: "ADD"};

const store = createStore(reducer, defaultState);

// dummy render function
function render() {
  // do stuff with store.getState(), get all the view drawers, builders, organizers working
}
// rerender whole canvas when state is changed
store.subscribe(render);
render(); // <== don't forget to render init state LOL
