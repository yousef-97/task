import { createStore } from 'redux';
import niceReducer from './reducers'

// const rootReducer = combineReducers();

const store = () => {
  return createStore(niceReducer)
};

export default store();