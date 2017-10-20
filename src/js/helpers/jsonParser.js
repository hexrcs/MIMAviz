import * as pd from '../../res/de/process-details.json';
import * as d from '../../res/de/descriptions.json';
import * as cu from '../../res/de/cu-display-details.json';

function processInterpreter (state = {mode: '', step: 0}) {
  const mode = state.mode;
  const step = state.step;

  return pd[mode][step];
}

function descriptionInterpreter (state = {mode: '', step: 0}) {
  const mode = state.mode;
  const step = state.step;

  return d[mode][step];
}

function cuDisplayInterpreter (state = {mode: '', step: 0}) {
  const mode = state.mode;

  return cu[mode];
}

function totalStepCount (state = {mode: '', step: 0}) {
  const mode = state.mode;

  return pd[mode].length;
}

export default {processInterpreter, descriptionInterpreter, cuDisplayInterpreter, totalStepCount};
