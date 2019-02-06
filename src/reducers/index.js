import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import runReducer from './runsReducer';

export default combineReducers({
  form: formReducer,
  runs: runReducer
});
