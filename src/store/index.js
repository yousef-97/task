import { createStore} from 'redux';
import niceReducer from './reducers'

const store = () => {
  return createStore(niceReducer)
};

export default store();