import * as actions from './actionType';

function sync(state = 0, action) {
  switch (action.type) {
    case actions.SYNC_DEMO_INCREASE:
      return state + action.num;
    case actions.SYNC_DEMO_DECREASE:
      return state - action.num;
    default:
      return state;
  }
}

export default sync;
