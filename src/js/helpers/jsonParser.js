import * as pd from "../../res/de/process-details.json";
import * as d from "../../res/de/descriptions.json";
import * as cu from "../../res/de/cu-display-details.json";

function processInterpreter(state={global: {mode: "", step: 0}}) {
  const mode = state.global.mode;
  const step = state.global.step;

  return pd[mode]["step"][step];
}

function descriptionInterpreter(state={global: {mode: "", step: 0}}) {
  const mode = state.global.mode;
  const step = state.global.step;

  return d[mode]["step"][step];
}

function cuDisplayInterpreter(state={global: {mode: "", step: 0}}) {
  const mode = state.global.mode;

  return cu[mode];
}

export default {processInterpreter, descriptionInterpreter, cuDisplayInterpreter};
