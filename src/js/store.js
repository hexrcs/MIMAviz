import * as PIXI from "pixi.js";
import { createStore } from "redux";
import { default as reducer} from "./reducers";
import * as view from "./view";

const defaultState = {global: {mode: "ADD", step: 4}};

export const dynamicView = new PIXI.Container();

export const store = createStore(reducer, defaultState);

export function render() {
  // console.log("We are in render function");
  // console.log(dynamicView);

  dynamicView.removeChildren();

  const currentState = store.getState();
  const cellView = view.organizers.cellOrganizer(currentState);
  const cuView = view.organizers.cuOrganizer(currentState);
  const descriptionView = view.organizers.descriptionOrganizer(currentState);
  const ioPathView = view.organizers.ioPathOrganizer(currentState);
  const lowerButtonsView = view.organizers.lowerButtonsOrganizer(currentState, store);
  const upperButtonsView = view.organizers.upperButtonsOrganizer(currentState, store);

  // dynamicView.addChild(cellView, cuView, descriptionView, ioPathView, lowerButtonsView, upperButtonsView);

  dynamicView.addChild(cellView, cuView, descriptionView, ioPathView, lowerButtonsView, upperButtonsView);
}
