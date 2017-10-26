import * as PIXI from 'pixi.js';
import { createStore } from 'redux';
import { default as reducer } from './reducers';
import * as view from './view';

const startupState = {mode: 'STARTUP', step: 0};
const defaultState = {mode: 'IDLE', step: 0};

export const canvasView = new PIXI.Container();

const dynamicView = new PIXI.Container();

export const store = createStore(reducer, startupState);

function render_dynView () {
  canvasView.removeChildren();
  canvasView.addChild(view.builders.bgBuilder(store), dynamicView);
  dynamicView.removeChildren();

  const currentState = store.getState();
  const unitView = view.organizers.unitOrganizer(currentState);
  const cuView = view.organizers.cuOrganizer(currentState);
  const descriptionView = view.organizers.descriptionOrganizer(currentState);
  const rwPathView = view.organizers.rwPathOrganizer(currentState);
  const lowerButtonsView = view.organizers.lowerButtonsOrganizer(currentState, store);
  const upperButtonsView = view.organizers.upperButtonsOrganizer(currentState, store);

  dynamicView.addChild(unitView, cuView, descriptionView, rwPathView, lowerButtonsView, upperButtonsView);
}

function render_startup () {
  canvasView.removeChildren();
  canvasView.addChild(view.builders.aboutBuilder('STARTUP', store));
}

function render_about () {
  canvasView.removeChildren();
  canvasView.addChild(view.builders.aboutBuilder('ABOUT', store));
}

export function render () {
  switch (store.getState().mode) {
    case 'STARTUP':
      render_startup();
      break;
    case 'ABOUT':
      render_about();
      break;
    default:
      render_dynView();
  }
}
