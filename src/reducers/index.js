import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import runReducer from './runsReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  form: formReducer,
  runs: runReducer,
  auth: authReducer,
  modal: modalReducer
});
