import * as actions from './actionType';

function async(state = 0, action) {
  switch (action.type) {
    case actions.ASYNC_DEMO_INCREASE:
      return state + action.num;
    case actions.ASYNC_DEMO_DECREASE:
      return state - action.num;
    default:
      return state;
  }
}

export default async;
