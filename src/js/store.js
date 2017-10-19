import { createStore } from "redux";
import { default as reducer} from "./reducers";

const defaultState = 
{
  global: {
    mode: "IDLE",
    step: 0
  },
  // the pressed buttons
  upperButton: "",
  lowerButton: "",
  hoverButton: "",
  // 
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
