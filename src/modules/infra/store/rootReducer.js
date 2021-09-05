import { combineReducers } from 'redux';
import asyncDemo from '#/modules/asyncDemo/redux/reducer';
import syncDemo from '#/modules/syncDemo/redux/reducer';

const rootReducer = combineReducers({
  // add reducer here!
  asyncDemo,
  syncDemo,
});

export default rootReducer;
