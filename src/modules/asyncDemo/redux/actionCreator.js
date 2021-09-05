import * as actions from './actionType';

const increase = () => ({ type: actions.ASYNC_DEMO_INCREASE, num: 10 });
const decrease = () => ({ type: actions.ASYNC_DEMO_DECREASE, num: 5 });

export function asyncDemoIncrease() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increase());
    }, 3000);
  };
}

export function asyncDemoDecrease() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrease());
    }, 3000);
  };
}
