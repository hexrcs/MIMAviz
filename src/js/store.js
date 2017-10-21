import * as PIXI from 'pixi.js';
import { createStore } from 'redux';
import { default as reducer } from './reducers';
import * as view from './view';

const defaultState = {mode: 'IDLE', step: 0};

export const dynamicView = new PIXI.Container();

export const store = createStore(reducer, defaultState);

export function render () {
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
