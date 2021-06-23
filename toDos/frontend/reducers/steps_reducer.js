import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/steps_actions";


const stepsReducer = (state = {},action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_STEPS:
      action.steps.forEach(step => {
        nextState[step.id] = step;
      });
      return nextState;
    case RECEIVE_STEP:
      const newStep = { [action.step.id]: action.step };
      return Object.assign({}, state, newStep);
    case REMOVE_STEP:
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};


export default stepsReducer;