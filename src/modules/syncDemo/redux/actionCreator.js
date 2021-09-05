import * as actions from './actionType';

export const syncDemoIncrease = () => ({
  type: actions.SYNC_DEMO_INCREASE,
  num: 1,
});
export const syncDemoDecrease = () => ({
  type: actions.SYNC_DEMO_DECREASE,
  num: 2,
});
